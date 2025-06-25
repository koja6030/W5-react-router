import React from "react";
import { Routes, Route, Link } from "react-router";

import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";

// Hero Banner (เหมือนหน้าหลัก RoV)
const HeroBanner = () => (
  <div
    style={{
      background: `url('/images/rov-hero.jpg') center/cover no-repeat`,
      height: "70vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    }}
  >
    <div
      style={{
        background: "rgba(0, 0, 0, 0.6)",
        padding: "2rem 3rem",
        borderRadius: "12px",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "3rem", color: "#f0c000", margin: 0 }}>
        ยินดีต้อนรับสู่สมรภูมิแห่งเกียรติยศ
      </h1>
      <p style={{ margin: "1rem 0", fontSize: "1.2rem" }}>
        จัดทีมฮีโร่ พิชิตศัตรู เพื่อเกียรติและชัยชนะ!
      </p>
      <Link to="/product" style={ctaButton}>
        ดูฮีโร่ & ไอเทม
      </Link>
    </div>
  </div>
);

// CTA Button Style
const ctaButton = {
  backgroundColor: "#f0c000",
  color: "#000",
  padding: "0.8rem 2rem",
  borderRadius: "5px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "1.1rem",
  transition: "all 0.3s ease",
};

// ลิงก์ใน Nav
const StyledLink = ({ to, children }) => (
  <Link
    to={to}
    style={{
      color: "#f0c000",
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: "1.1rem",
      position: "relative",
      padding: "5px 10px",
      cursor: "pointer",
    }}
    onMouseEnter={(e) => {
      e.target.style.color = "#fff";
      e.target.style.borderBottom = "2px solid #f0c000";
    }}
    onMouseLeave={(e) => {
      e.target.style.color = "#f0c000";
      e.target.style.borderBottom = "none";
    }}
  >
    {children}
  </Link>
);

const contentBox = {
  padding: "2rem",
  maxWidth: "960px",
  margin: "auto",
  backgroundColor: "rgba(255, 255, 255, 0.03)",
  borderRadius: "10px",
  marginTop: "2rem",
  boxShadow: "0 0 15px rgba(0, 0, 0, 0.4)",
};

function App() {
  return (
    <div
      style={{
        fontFamily: "Prompt, sans-serif",
        background: "linear-gradient(to right, #0f0f0f, #1a1a1a)",
        color: "#fff",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      {/* Navigation Bar */}
      <nav
  style={{
    backgroundColor: "#121212",
    padding: "1rem 2rem",
    display: "flex",
    alignItems: "center",        // เพิ่มให้อยู่แนวกลางแนวตั้ง
    justifyContent: "center",
    gap: "40px",
    borderBottom: "2px solid #f0c000",
    boxShadow: "0 2px 10px rgba(0,0,0,0.6)",
    borderRadius: "0 0 10px 10px",
    position: "sticky",
    top: 0,
    zIndex: 10,
  }}
>
  <img
    src="https://cdn-webth.garenanow.com/webth/rov/mainsite/v2/logo_rov.png"
    alt="RoV Logo"
    style={{ height: "40px", marginRight: "20px", borderRadius: "6px", boxShadow: "0 0 8px #f0c000" }}
  />
  
  <StyledLink to="/">🏠 หน้าหลัก</StyledLink>
  <StyledLink to="/about">🎮 เกี่ยวกับเกม</StyledLink>
  <StyledLink to="/product">🛡 ฮีโร่ & ไอเทม</StyledLink>
  <StyledLink to="/notfound">📞 ติดต่อ</StyledLink>
</nav>

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroBanner />
              <div style={contentBox}>
                <Home />
              </div>
            </>
          }
        />
        <Route path="/about" element={<div style={contentBox}><About /></div>} />
        <Route path="/product" element={<div style={contentBox}><Product /></div>} />
        <Route path="/notfound" element={<div style={contentBox}><NotFound /></div>} />
      </Routes>

       <footer
        style={{
          backgroundColor: "#121212",
          color: "#f0c000",
          textAlign: "center",
          padding: "1rem",
          borderTop: "2px solid #f0c000",
          marginTop: "2rem",
          boxShadow: "0 -2px 10px rgba(0,0,0,0.6)",
        }}
      >
        <p style={{ margin: 0 }}>
          © 2015 TencenT Games Inc. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;