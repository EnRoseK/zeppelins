import { Header } from "./components/Header";

import { Footer } from "./components/Footer";
import "./styles/Global.css";
import { useState } from "react";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home";

const App = () => {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
