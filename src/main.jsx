import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  onNeedRefresh() {
    // Show a prompt to the user to refresh the page
  },
  onOfflineReady() {
    // Show a message that the app is ready to work offline
  },
});

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App section="home" />} />
    </Routes>
  </BrowserRouter>
);
