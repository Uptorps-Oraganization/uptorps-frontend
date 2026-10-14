import App from "@/App.tsx";
import { AuthContextProvider } from "@/contexthandlers/AuthContextProvider";
import { QueryProvider } from "@/contexthandlers/QueryProvider";
import { ThemeProvider } from "@/contexthandlers/ThemeProvider";
import "@/styling/global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider>
    <StrictMode>
      <QueryProvider>
        <AuthContextProvider>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </AuthContextProvider>
      </QueryProvider>
    </StrictMode>
  </ThemeProvider>,
);
