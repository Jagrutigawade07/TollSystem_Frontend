import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import SignInPage from "./components/SignInPage";
import Dashboard from "./components/Dashboard";
import About from "./components/About";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [transactions, setTransactions] = useState([
    { date: "2025-01-01", amount: 100 },
    { date: "2025-01-02", amount: 150 },
    { date: "2025-01-03", amount: 200 },
  ]);

  const handleLogin = () => setIsLoggedIn(true);
  const handleSignIn = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="about"element={<About />} />
        <Route path="/login" element={<LoginPage handleLogin={handleLogin} />} />
        <Route path="/signin" element={<SignInPage handleSignIn={handleSignIn} />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard transactions={transactions} /> : <Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;

