import App from "@/App.tsx";
import "@/styling/global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./components/ContextHandlers/ThemeProvider";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>,
);
