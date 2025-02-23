import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { registerSW } from "virtual:pwa-register";

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New content is available. Reload?")) {
      updateSW();
    }
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(<App />);