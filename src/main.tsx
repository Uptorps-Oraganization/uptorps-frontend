import App from "@/App.tsx";
import { ThemeProvider } from "@/components/ContextHandlers/ThemeProvider";
import "@/styling/global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </ThemeProvider>,
);
