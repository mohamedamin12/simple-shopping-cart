import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";
import ShoppingCartContextProvider from "./context/ShoppingCartContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toaster />
    <ShoppingCartContextProvider>
    <App />
    </ShoppingCartContextProvider>
  </StrictMode>
);
