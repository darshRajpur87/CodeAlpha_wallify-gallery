# Wallify Lite 🌅

**Wallify Lite** is a minimalist, responsive wallpaper gallery where users can explore categorized wallpapers, search through the collection, and temporarily upload their own images (session-only). It's 100% frontend and doesn't require a backend or database.

---

## ✨ Features

- 🔍 **Search Wallpapers** by keyword.
- 🗂️ **Category Filters**: View wallpapers by topics like Nature, City, Animals, and more.
- 🖼️ **Lightbox Preview**: Click images for a fullscreen preview with navigation.
- 📤 **Temporary Image Upload**: Users can upload images and assign them a category — added only for the session.
- 💅 **Tailwind CSS + Custom Styling** for a clean and modern layout.
- 📱 **Fully Responsive**: Looks great on desktops, tablets, and phones.

---

## 🛠️ Tech Stack

- **HTML5**
- **Tailwind CSS**
- **Custom CSS**
- **Vanilla JavaScript**

---

## ⚙️ How It Works

> When a user uploads an image, it's read locally using JavaScript (`FileReader`) and added to the gallery in-memory. Since this app has no backend or cloud storage, images are not saved across sessions.

---

## 📁 Setup Instructions

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/wallify-lite.git
   cd wallify-lite
