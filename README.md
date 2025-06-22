
# 🛍️ mettā muse - Product Listing Page

Welcome to **mettā muse**, a responsive and accessible e-commerce storefront built with **Next.js**. This project focuses on showcasing a curated collection of products with sorting, filtering, responsive layouts, and SEO optimizations.

---

## 🚀 Features

- ✅ **Responsive Layout** for desktop and mobile
- ✅ **Product Card Grid** with dynamic image, title, and pricing
- ✅ **Filter Sidebar** (with context toggle and checkbox logic)
- ✅ **Category-based Filtering** using Context API
- ✅ **SEO Best Practices** (meta tags, semantic HTML, heading order)
- ✅ **Custom Loader** while fetching product data
- ✅ Built with **Next.js App Router** (`app/` directory structure)

---

## 📁 Project Structure

```
app/
├── components/
│   ├── Footer/
│   ├── Navbar/
│   ├── SubMenu/
│   ├── ProductCard/
│   ├── ProductList/
│   ├── ProductHeader/
│   └── Loader/
├── context/
│   └── ProductContext.jsx
├── styles/
│   └── globals.css
├── layout.js
├── page.js (HomePage)
```

---

## 📦 Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/)
- **State Management**: React Context API
- **Styling**: Modular CSS
- **Accessibility**: Proper heading order, form labels
- **SEO**: Dynamic metadata using `export const metadata`

---

## 🧑‍💻 Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/akshalder11/Appscrip-task-AkashHalder.git
cd Appscrip-task-AkashHalder
```

### 2. Install dependencies
```bash
npm install
# or
yarn
```

### 3. Run the development server
```bash
npm run dev
# or
yarn dev
```

App will be available at: [https://appscrip-task-akashhalder.netlify.app](https://appscrip-task-akashhalder.netlify.app)

---

## 🌐 SEO & Accessibility

- All headings follow a **sequentially-descending order**
- Semantic tags used where appropriate (`section`, `aside`, etc.)
- Custom `metadata` used for title & description
- Form inputs have associated `<label>` elements for accessibility

---

## 📚 API Used

All product data is fetched from [https://fakestoreapi.com/](https://fakestoreapi.com/).

---

## 📌 Future Enhancements

- Add product detail pages with dynamic routing
- Integrate real authentication & cart features
- Implement filter modal for mobile
- Pagination / "Load More" products
- Internationalization (i18n)

---

## 💡 Author

Built with ❤️ by Akash