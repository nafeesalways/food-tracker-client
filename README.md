<div align="center">

# 🥦 FreshKeep - Food Expiry Tracker System

### *Track Smart. Waste Less. Live Better.*

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_FreshKeep-success?style=for-the-badge)](https://freshkeep-test1.netlify.app)
[![Made with React](https://img.shields.io/badge/Made_with-React_⚛️-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![Styled with Tailwind](https://img.shields.io/badge/Styled_with-Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

A modern, interactive web application that helps users track their food inventory, receive expiry reminders, reduce food waste, and get smart recipe suggestions — designed for convenience, sustainability, and smart living.

[Features](#-key-features) • [Demo](#-screenshots) • [Tech Stack](#-tech-stack) • [Installation](#-quick-start) • [Usage](#-usage)

---

![FreshKeep Banner](https://plus.unsplash.com/premium_photo-1673108852141-e8c3c22a4a22?auto=format&fit=crop&q=80&w=1200)

</div>

---

## 🎯 Purpose

**FreshKeep** empowers users to:

- 📅 **Track expiration dates** of stored food items with precision
- 📦 **Manage and categorize** food inventory efficiently
- 🔔 **Receive timely notifications** before items expire
- 🌱 **Reduce food waste** and promote sustainable living
- 📝 **Store private notes** and insights for personal food management
- 🍳 **Get smart recipe suggestions** based on expiring ingredients
- 📱 **Scan barcodes** for automated food entry with product information

---

## ✨ Key Features

<table>
<tr>
<td width="50%">

### 🔐 Core Features
- **Secure Authentication** via Firebase Auth (Email & Google)
- **Smart Food Management** with categories and quantities
- **Expiry Countdown Timer** with real-time tracking
- **Private Notes System** for each food item
- **Advanced Filter & Search** by category/status
- **🆕 Smart Recipe Suggestions** based on expiring ingredients
- **🆕 Barcode Scanner Integration** for quick food entry

</td>
<td width="50%">

### 🎨 Enhanced UX
- **Data Visualization** with Recharts
- **Beautiful Food Gallery** carousel slider
- **FAQ & Newsletter** subscription system
- **Fully Responsive Design** for all devices
- **Smooth Animations** powered by Framer Motion
- **Product Information Lookup** via Open Food Facts API
- **Personalized Recipe Recommendations** via Spoonacular API

</td>
</tr>
</table>

### 🚀 New Features

#### 🍳 Smart Recipe Suggestions
- **AI-Powered Recommendations** - Get personalized recipe ideas using your expiring ingredients
- **Waste Reduction** - Cook delicious meals before food goes bad
- **Detailed Instructions** - Step-by-step cooking guides with ingredients list
- **Nutritional Information** - View cooking time, servings, and nutrition grades
- **Ingredient Matching** - Shows how many of your items are used in each recipe

#### 📱 Barcode Scanner
- **Real-Time Scanning** - Use your device camera to scan product barcodes
- **Automatic Data Fetching** - Retrieves product name, image, brand, and ingredients
- **Multiple Barcode Formats** - Supports EAN, UPC, Code 128, Code 39
- **Open Food Facts Integration** - Access to 2.8M+ products worldwide
- **Quick Entry** - Reduce manual typing from 3 minutes to 15 seconds
- **Mobile Optimized** - Uses back camera on mobile devices for better scanning

### 🎤 Experimental Features
- **Voice Input** - Log food items using speech recognition (browser-based)
- **Smart Notifications** - Real-time alerts via React Toastify

---

## 🛠️ Tech Stack

<div align="center">

| Category | Technologies |
|:--------:|:------------|
| **Frontend** | React.js 19 (Vite), JavaScript (ES6+) |
| **Styling** | Tailwind CSS, DaisyUI |
| **Animation** | Framer Motion |
| **Routing** | React Router DOM v6 |
| **Charts** | Recharts |
| **Authentication** | Firebase Auth |
| **Backend** | Express.js, Node.js |
| **Database** | MongoDB |
| **HTTP Client** | Axios |
| **Notifications** | React Toastify |
| **SEO** | React Helmet Async |
| **Barcode Scanner** | Quagga2 |
| **APIs** | Spoonacular API, Open Food Facts API |
| **Utilities** | React CountUp, Speech Recognition API |

</div>

---

## 📸 Screenshots

<div align="center">

### 🏠 Home Page & Food Gallery
![Food Gallery](https://images.unsplash.com/photo-1543168256-418811576931?auto=format&fit=crop&q=80&w=800)

### 📊 Expiry Statistics Dashboard
![Expiry Graph](https://plus.unsplash.com/premium_photo-1726736525038-66c5306e08b0?auto=format&fit=crop&q=80&w=800)

### 🍳 Smart Recipe Suggestions
![Recipe Suggestions](https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800)

### 📱 Barcode Scanner
![Barcode Scanner](https://images.unsplash.com/photo-1516594798947-e65505dbb29d?auto=format&fit=crop&q=80&w=800)

### 📱 Responsive Mobile View
![Mobile View](https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=400)

</div>

---

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Firebase account (for authentication)
- Spoonacular API key (for recipe suggestions)
- MongoDB database

### Installation

1. **Clone the repository**

2. **Install dependencies**

3. **Configure Environment Variables**

Create a `.env` file in the root directory:


4. **Get API Keys**

- **Firebase**: Create a project at [Firebase Console](https://console.firebase.google.com/)
- **Spoonacular API**: Register at [Spoonacular](https://spoonacular.com/food-api/console#Dashboard) (Free tier: 150 requests/day)
- **Open Food Facts**: No API key needed (public API)

5. **Run the development server**

6. **Open your browser**

---

## 📖 Usage

### Adding Food Items

**Manual Entry:**
1. Navigate to "Add Food" page
2. Select "Manual Entry"
3. Fill in product details
4. Add expiry date
5. Submit

**Barcode Scanner:**
1. Navigate to "Add Food" page
2. Select "Scan Barcode"
3. Allow camera permissions
4. Point camera at product barcode
5. Wait for automatic detection
6. Verify auto-filled information
7. Add expiry date and submit

### Getting Recipe Suggestions

1. Navigate to "Recipe Suggestions" page
2. System automatically detects items expiring within 5 days
3. Click "Generate Recipe Ideas"
4. Browse personalized recipe recommendations
5. Click "View Recipe" for detailed instructions
6. See ingredients, cooking time, and steps

### Managing Your Inventory

- **View All Items**: Go to "My Items" page
- **Update Items**: Click "Update" button on any item
- **Delete Items**: Click "Delete" button (with confirmation)
- **Add Notes**: Click on any food item to add private notes
- **Filter by Category**: Use category dropdown to filter
- **Search**: Use search bar to find specific items

### Tracking Expiry

- **Dashboard**: View items expiring soon on home page
- **Statistics**: See pie chart of expired vs. nearly expiring items
- **Countdown Timer**: Real-time countdown on each food item
- **Notifications**: Get toast alerts for expiring items

---

## 🔐 Authentication

FreshKeep supports two authentication methods:

1. **Email/Password**: Traditional sign-up and login
2. **Google Sign-In**: Quick OAuth authentication

All food data is user-specific and private.

---

## 🌐 API Integration

### Spoonacular API (Recipe Suggestions)


### Open Food Facts API (Barcode Scanner)


---

## 📂 Project Structure


---

## 🔒 Privacy & Security

- ✅ **User Authentication**: Firebase secure authentication
- ✅ **Private Data**: Each user can only see their own food items
- ✅ **Token-Based API**: JWT tokens for backend requests
- ✅ **HTTPS Required**: Camera access requires secure connection
- ✅ **Local Processing**: Barcode detection happens on device
- ✅ **No Video Upload**: Camera stream is not recorded or uploaded

---

## 🐛 Known Issues & Limitations

### Barcode Scanner
- Requires HTTPS connection (camera permission)
- Works best with good lighting conditions
- May not recognize all local/regional products
- Open Food Facts database coverage varies by country

### Recipe Suggestions
- Free Spoonacular API limited to 150 requests/day
- Recipes may suggest ingredients you don't have
- Best results with 3+ expiring items

---

## 🚀 Deployment

### Frontend (Netlify)

1. Build the project:

2. Deploy to Netlify:
