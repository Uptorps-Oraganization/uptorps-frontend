import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/styling/global.css";
import App from "@/App.tsx";
import { ThemeProvider } from "./components/ContextHandlers/ThemeProvider";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>,
);
