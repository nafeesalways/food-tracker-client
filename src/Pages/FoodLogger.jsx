import React, { useState, useEffect, useRef } from "react";
import { Mic, Square } from "lucide-react";
import { toast } from "react-toastify";

const FoodLogger = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const recognitionRef = useRef(null);

  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      toast.error("❌ Sorry, your browser doesn't support the Speech Recognition API.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      let finalTranscript = "";
      for (let i = event.resultIndex; i < event.results.length; i++) {
        finalTranscript += event.results[i][0].transcript;
      }
      setTranscript(finalTranscript);
    };

    recognition.onend = () => setIsListening(false);
    recognition.onerror = (err) => console.error("Speech recognition error:", err);

    recognitionRef.current = recognition;
  }, []);

  const startListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.start();
      setTranscript("");
      setIsListening(true);
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const handleSave = () => {
    if (!transcript.trim()) {
      toast.error("⚠️ No voice input detected!");
      return;
    }
    toast.success(` Saved voice log: "${transcript}"`);
    setTranscript("");
  };

  return (
    <section className="py-16 bg-base-200 text-center">
      <h2 className="text-3xl font-bold mb-6 text-success">Voice Food Logger</h2>

      <div className="max-w-xl mx-auto bg-base-100 p-6 rounded-2xl shadow-md border border-base-300">
        <p className="text-gray-500 mb-4">
          Speak the food name or note you want to log — your speech will appear below!
        </p>

        <div className="flex justify-center gap-4 mb-4">
          {!isListening ? (
            <button
              onClick={startListening}
              className="btn btn-success flex items-center gap-2"
            >
              <Mic className="w-5 h-5" /> Start Recording
            </button>
          ) : (
            <button
              onClick={stopListening}
              className="btn btn-error flex items-center gap-2"
            >
              <Square className="w-5 h-5" /> Stop
            </button>
          )}
        </div>

        <div className="bg-base-200 rounded-xl p-4 text-left min-h-[100px]">
          {transcript ? (
            <p className="text-lg font-medium">{transcript}</p>
          ) : (
            <p className="text-gray-400 italic">Your voice text will appear here...</p>
          )}
        </div>

        <button
          onClick={handleSave}
          disabled={!transcript.trim()}
          className="btn btn-success mt-6"
        >
          Save Food Log
        </button>
      </div>
    </section>
  );
};

export default FoodLogger;
