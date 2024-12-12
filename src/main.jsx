import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App section="home" />} />
      <Route path="/game" element={<App section="game" />} />
    </Routes>
  </BrowserRouter>
);
