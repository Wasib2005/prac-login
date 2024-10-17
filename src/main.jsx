import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import RegistrationProvider from "./assets/RegistrationProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RegistrationProvider>
      <App />
    </RegistrationProvider>
  </StrictMode>
);
