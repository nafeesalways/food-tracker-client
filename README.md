# 🥦 Food Expiry Tracker System

A modern web application that helps users track their food inventory and receive reminders before food items expire — minimizing waste and managing groceries efficiently.

## 🚀 Live Demo

🔗 [Visit Live Site](https://freshkeep1.netlify.app/)

---    

## 🎯 Purpose

The **Food Expiry Tracker** is designed to:
- Help users track expiration dates of food items.
- Manage and categorize food inventory by type (e.g., Dairy, Meat, Vegetables).
- Store private food logs with personalized notes.
- Encourage better food management habits to reduce waste.

---

## ✨ Key Features
![Food Expiry Screenshot](https://img.freepik.com/free-photo/woman-buying-fruits-online-using-her-smartphone_23-2149240374.jpg?ga=GA1.1.1744511623.1749385980&semt=ais_items_boosted&w=740)    

- 🔐 **Authentication** — Secure login/logout with Firebase Auth.
- 📦 **Add & View Items** — Add food with quantity, category, expiry date, and notes.    
- ⏰ **Expiry Countdown** — Track time remaining until expiry.
- 📝 **Notes System** — Add custom notes to each food item.
- 🔍 **Filtering** — Search/filter items by category or expiry status.
- 📱 **Responsive Design** — Mobile-friendly UI with Tailwind CSS + DaisyUI.
- 🔄 **Framer Motion** — Smooth animations for interactive feedback.
- 🔔 **React Toastify** — Success & error notifications for actions.
- 📆 **React CountUp** — Animated countdown display for expiring foods.
- 🌐 **Dynamic SEO** — Page titles with `react-helmet-async`.
- 🔁 **React Router v6** — Seamless navigation across protected/private routes.

---

## 🧰 Technologies & Libraries

| Package               | Purpose                                                |
|-----------------------|--------------------------------------------------------|
| **React**             | JavaScript UI library for building the SPA            |
| **Tailwind CSS**      | Utility-first CSS framework for styling               |
| **DaisyUI**           | UI component library built on Tailwind                |
| **React Router DOM**  | SPA routing system                                     |
| **React Toastify**    | Toast notifications for user feedback                 |
| **Framer Motion**     | Animations and transitions                            |
| **React Helmet Async**| Manage document head (SEO support)                   |
| **React CountUp**     | Countdown display for food expiry                     |
| **Axios**             | Promise-based HTTP client for API requests            |
| **Firebase Auth**     | User authentication and token management              |

---

## 📦 Installation & Setup

```bash
git clone https://github.com/your-username/food-expiry-tracker.git
cd food-expiry-tracker
npm install
npm run dev
