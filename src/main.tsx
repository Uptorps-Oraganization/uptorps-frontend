import App from "@/App.tsx";
import { QueryProvider } from "@/contexthandlers/QueryProvider";
import { ThemeProvider } from "@/contexthandlers/ThemeProvider";
import "@/styling/global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <StrictMode>
      <QueryProvider>
        <App />
      </QueryProvider>
    </StrictMode>
  </ThemeProvider>,
);
