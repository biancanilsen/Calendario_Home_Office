import { NextUIProvider } from "@nextui-org/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="646276690504-mvc6la11av50gpubq83m0r45h1cqkp6k.apps.googleusercontent.com">
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);

reportWebVitals();
