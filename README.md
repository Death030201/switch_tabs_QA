
# 🌐 React Practice App

This is a learning-focused React application designed to help understand and practice key React concepts such as:

- Login authentication with validation and confirmation
- Route-based navigation (`react-router-dom`)
- Conditional rendering
- Iframe integration
- Link-based navigation to external pages
- Clean and responsive UI using CSS

---

## 🚀 Features

- 🔐 **Login Page**
  - Validates hardcoded credentials:  
    `Email`: `pst@gmail.com`  
    `Password`: `1234512345`
  - Shows browser `confirm()` before login

- 🏠 **Home Page**
  - Styled navbar with Logout button
  - Special Code input and submit
  - Link to open **Coupon Page** in new tab
  - Embedded iframe for external site:  
    [`action-class-practice.vercel.app`](https://action-class-practice.vercel.app/)

- 🎁 **Coupon Page**
  - Displays a code like: `The coupon code is: GOLDEN2025`

- ✨ **Special Page**
  - Only accessible after entering the correct coupon code (`GOLDEN-123`)
  - Features a golden-themed congratulatory layout

---

## 📁 Project Structure

```
/src
  ├── App.jsx
  ├── App.css
  ├── components/
  ├── pages/
      ├── Login.jsx
      ├── Home.jsx
      ├── CouponPage.jsx
      ├── SpecialPage.jsx
```

---

## 🔧 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the app**

   ```bash
   npm start
   ```

4. **Open in browser**

   Visit: [http://localhost:3000](http://localhost:3000)

---

## 🧪 How to Use

1. Login using:
   - Email: `pst@gmail.com`
   - Password: `1234512345`

2. Confirm login via browser alert.

3. On the home page:
   - Open the coupon link in a new tab to view the code.
   - Copy the code (e.g. `GOLDEN2025`) and enter it in the input.
   - Submit to unlock the special golden page.

4. Explore the iframe embedded at the bottom for further interaction.

---

## 📸 Screenshots

> Add screenshots of each page after app launch if desired.

---

## 🧾 License

MIT — Feel free to use for learning or testing.
