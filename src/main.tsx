import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "@app/App";
import { ErrorBoundary } from "@ui/components/ErrorBoundary/ErrorBoundary";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>,
);
