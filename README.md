# 🥦 Food Expiry Tracker System

A modern, interactive web application that helps users track their food inventory, receive expiry reminders, and reduce food waste — designed for convenience, sustainability, and smart living.

🔗 **Live Demo:** [Visit FreshKeep](https://freshkeep-test1.netlify.app)

---

## 🎯 Purpose

The **Food Expiry Tracker System (FreshKeep)** is built to:
- Help users track expiration dates of stored food items.
- Manage and categorize their food inventory efficiently.
- Receive notifications before items expire.
- Encourage eco-friendly habits by reducing food waste.
- Store private notes and insights for personal food management.

---

## ✨ Key Features
![Food Expiry Screenshot](https://i.ibb.co.com/prbLVwyC/healthy-diet-male-hands-holding-smartphone-keeping-track-calories-his-food-with-fitness-app.jpg)  

| Feature | Description |
|----------|--------------|
| 🔐 **Authentication** | Secure login and logout using **Firebase Auth**. |
| 📦 **Add & View Items** | Add foods with category, quantity, expiry date, and personal notes. |
| ⏰ **Expiry Countdown** | Automatically calculate remaining days before expiry. |
| 📝 **Notes System** | Add and view private notes for each food item. |
| 🔍 **Filter & Search** | Quickly find foods by category or expiry status. |
| 📊 **Expiry Data Visualization (NEW)** | Visualize expiring items using **Recharts** for clear insights. |
| 🖼️ **Our Food Gallery (NEW)** | Beautiful **carousel slider** showcasing food categories like dairy, fruits, and vegetables. |
| ❓ **FAQ + Newsletter (NEW)** | Learn about the system and subscribe for updates directly on the site. |
| 📱 **Responsive Design** | Fully responsive with **Tailwind CSS + DaisyUI** for all devices. |
| 💫 **Smooth Animations** | Built with **Framer Motion** for elegant transitions. |
| 🔔 **Smart Notifications** | Real-time alerts using **React Toastify**. |
| 🧠 **Speech Recognition (Experimental)** | Try logging food items using your **voice** (browser-based). |

---

## 🧩 Technologies & Libraries

| Technology / Library | Purpose |
|----------------------|----------|
| **React.js (Vite)** | Core frontend framework |
| **Tailwind CSS** | Utility-first styling |
| **DaisyUI** | Ready-made Tailwind components |
| **Framer Motion** | Animation and transitions |
| **Recharts** | Visual data representation (Expiry stats) |
| **React Toastify** | Interactive toast notifications |
| **React Router DOM (v6)** | Client-side routing |
| **React Helmet Async** | SEO optimization |
| **React CountUp** | Animated expiry countdowns |
| **Axios** | API request handling |
| **Firebase Auth** | Authentication system |
| **Speech Recognition API** | Browser-based voice logging (no backend needed) |

---

## 🖼️ Screenshots

### 🏠 Home Page (Hero + Food Gallery)
![Food Gallery](https://i.ibb.co.com/Kz6yRvdN/front-view-cooked-mushrooms-with-dough-pasta-dark-table-meal-dish-food-dinner-color.jpg)

### 📊 Expiry Statistics
![Expiry Graph]https://plus.unsplash.com/premium_photo-1726736525038-66c5306e08b0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGZvb2QlMjBjaGFydHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600)

### 💌 FAQ & Newsletter Section
![Newsletter](https://i.ibb.co.com/QvVyHFP2/club-sandwich-with-cheese-cucumber-tomato-smoked-meat-salami-served-with-french-fries.jpg)

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/food-expiry-tracker.git

# Navigate into the project
cd food-tracker-client

# Install dependencies
npm install

# Start the development server
npm run dev
