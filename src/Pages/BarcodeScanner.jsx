import React, { useState, useRef, useEffect } from "react";
import Quagga from "@ericblade/quagga2";
import axios from "axios";
import { toast } from "react-toastify";
import { FaBarcode, FaCamera, FaStop, FaSpinner } from "react-icons/fa";
import { motion } from "framer-motion";

const BarcodeScanner = ({ onProductScanned }) => {
  const [scanning, setScanning] = useState(false);
  const [scannedCode, setScannedCode] = useState("");
  const [loading, setLoading] = useState(false);
  const scannerRef = useRef(null);

  // Initialize Quagga barcode scanner
  const startScanner = () => {
    setScanning(true);
    setScannedCode("");
    
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          target: scannerRef.current, // Video feed container
          constraints: {
            width: { min: 640 },
            height: { min: 480 },
            facingMode: "environment", // Use back camera on mobile devices
            aspectRatio: { min: 1, max: 2 },
          },
        },
        locator: {
          patchSize: "medium",
          halfSample: true,
        },
        numOfWorkers: 2,
        decoder: {
          readers: [
            "ean_reader", // European Article Number (most common)
            "ean_8_reader", // EAN-8
            "upc_reader", // Universal Product Code
            "upc_e_reader", // UPC-E
            "code_128_reader", // Code 128
            "code_39_reader", // Code 39
          ],
        },
        locate: true,
      },
      (err) => {
        if (err) {
          console.error("Error initializing Quagga:", err);
          toast.error("Failed to start camera. Please allow camera permissions.");
          setScanning(false);
          return;
        }
        console.log("Barcode scanner initialized successfully");
        Quagga.start();
      }
    );

    // Listen for barcode detection
    Quagga.onDetected(handleDetection);
  };

  // Stop barcode scanner
  const stopScanner = () => {
    Quagga.stop();
    Quagga.offDetected(handleDetection);
    setScanning(false);
  };

  // Handle barcode detection
  const handleDetection = (result) => {
    if (result && result.codeResult && result.codeResult.code) {
      const code = result.codeResult.code;
      
      // Prevent duplicate scans
      if (code === scannedCode) return;
      
      setScannedCode(code);
      toast.success(`Barcode detected: ${code}`);
      
      // Fetch product data from Open Food Facts API
      fetchProductData(code);
      
      // Stop scanner after successful detection
      stopScanner();
    }
  };

  // Cleanup on component unmount
  useEffect(() => {
    return () => {
      if (scanning) {
        Quagga.stop();
        Quagga.offDetected(handleDetection);
      }
    };
  }, [scanning]);

  // Fetch product information from Open Food Facts API
  const fetchProductData = async (barcode) => {
    setLoading(true);
    
    try {
      const response = await axios.get(
        `https://world.openfoodfacts.org/api/v0/product/${barcode}.json`
      );

      if (response.data.status === 1) {
        const product = response.data.product;
        
        // Prepare product data object
        const productInfo = {
          barcode: barcode,
          name: product.product_name || product.product_name_en || "Unknown Product",
          image: product.image_url || product.image_front_url || "",
          category: product.categories_tags?.[0]?.replace("en:", "") || "Uncategorized",
          brands: product.brands || "Unknown Brand",
          ingredients: product.ingredients_text || product.ingredients_text_en || "No ingredients listed",
          nutritionGrade: product.nutrition_grades || product.nutriscore_grade || "N/A",
          quantity: product.quantity || "",
        };
        
        // Pass product data to parent component
        if (onProductScanned) {
          onProductScanned(productInfo);
        }
        
        toast.success("Product information retrieved successfully!");
      } else {
        toast.warning("Product not found in Open Food Facts database.");
        
        // Still pass basic barcode info
        if (onProductScanned) {
          onProductScanned({
            barcode: barcode,
            name: "",
            image: "",
            category: "",
            brands: "",
            ingredients: "",
            nutritionGrade: "N/A",
            quantity: "",
          });
        }
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
      toast.error("Failed to retrieve product information. Please enter manually.");
      
      // Still pass barcode for manual entry
      if (onProductScanned) {
        onProductScanned({
          barcode: barcode,
          name: "",
          image: "",
          category: "",
          brands: "",
          ingredients: "",
          nutritionGrade: "N/A",
          quantity: "",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 border border-gray-200">
      {/* Header */}
      <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <FaBarcode className="text-green-600 text-2xl" />
        Barcode Scanner
      </h3>

      <p className="text-sm text-gray-600 mb-4">
        Point your camera at the product barcode to automatically fetch information
      </p>

      {/* Scanner Controls */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 mb-4">
        {!scanning ? (
          <button
            onClick={startScanner}
            className="btn bg-green-600 text-white hover:bg-green-700 flex items-center justify-center gap-2 px-6 w-full sm:w-auto"
          >
            <FaCamera className="text-lg" /> Start Scanning
          </button>
        ) : (
          <button
            onClick={stopScanner}
            className="btn bg-red-600 text-white hover:bg-red-700 flex items-center justify-center gap-2 px-6 w-full sm:w-auto"
          >
            <FaStop className="text-lg" /> Stop Scanning
          </button>
        )}
      </div>

      {/* Camera Feed Container */}
      {scanning && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-2xl mx-auto bg-black rounded-xl overflow-hidden shadow-2xl"
        >
          {/* Video stream target */}
          <div 
            ref={scannerRef} 
            className="w-full h-64 sm:h-80 md:h-96"
          />
          
          {/* Scanner overlay line */}
          <div className="absolute inset-0 border-4 border-green-500 pointer-events-none rounded-xl">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-red-500 shadow-lg animate-pulse"></div>
          </div>

          {/* Scanning indicator */}
          <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-2">
            <FaSpinner className="animate-spin" />
            Scanning...
          </div>
        </motion.div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="mt-4 flex justify-center items-center gap-2 text-green-600">
          <FaSpinner className="animate-spin text-xl" />
          <span className="font-medium">Fetching product information...</span>
        </div>
      )}

      {/* Scanned Barcode Display */}
      {scannedCode && !loading && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-4 bg-green-50 border border-green-200 rounded-xl"
        >
          <p className="text-center text-gray-700">
            <span className="font-semibold">Scanned Barcode:</span>{" "}
            <span className="text-green-700 font-mono text-base sm:text-lg font-bold">
              {scannedCode}
            </span>
          </p>
        </motion.div>
      )}

      {/* Instructions */}
      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
        <h4 className="font-semibold text-blue-800 mb-2 text-sm">📱 Tips for best results:</h4>
        <ul className="text-xs sm:text-sm text-gray-700 space-y-1 list-disc list-inside">
          <li>Hold your device steady and ensure good lighting</li>
          <li>Keep the barcode centered in the frame</li>
          <li>Maintain a distance of 10-15cm from the barcode</li>
          <li>Make sure the barcode is not blurry or damaged</li>
        </ul>
      </div>
    </div>
  );
};

export default BarcodeScanner;
