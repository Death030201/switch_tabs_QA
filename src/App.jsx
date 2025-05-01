import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import "./App.css";

const Login = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "pst@gmail.com" && password === "1234512345") {
      if (window.confirm("Are you sure you want to login?")) {
        navigate("/home");
      }
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

const Home = () => {
  const [code, setCode] = React.useState("");
  const navigate = useNavigate();

  const handleCodeSubmit = () => {
    if (code === "GOLDEN2025") {
      navigate("/special");
    } else {
      alert("Invalid code!");
    }
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="home-page">
      <nav className="navbar">
        <h1>Practice Website</h1>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <div className="content">
        <input
          type="text"
          placeholder="Enter special code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        <button onClick={handleCodeSubmit}>Submit Code</button>
        <div className="coupon-link">
          <a href="/coupon" target="_blank" rel="noopener noreferrer">
            Click here to get your coupon
          </a>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
          Practice Iframe Below
        </h2>
        <div className="flex justify-center">
          <iframe
            src="https://action-class-practice.vercel.app/"
            title="Practice Iframe"
            width="1000"
            height="800"
            className="border-4 border-blue-300 rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const CouponPage = () => (
  <div className="coupon-page">
    <h1>
      The coupon code is: <span className="highlight">GOLDEN2025</span>
    </h1>
  </div>
);

const SpecialPage = () => (
  <div className="special-page">
    <h1> Welcome to the Golden Zone! 🎉\</h1>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/coupon" element={<CouponPage />} />
        <Route path="/special" element={<SpecialPage />} />
      </Routes>
    </Router>
  );
}

export default App;
