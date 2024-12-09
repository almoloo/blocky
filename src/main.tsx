import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./routes/App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Homepage from "./routes/Homepage.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Homepage />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
