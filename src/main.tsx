import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ClientContextProvider } from "./contexts/clientsContext.tsx";
import { ContactContextProvider } from "./contexts/contactsContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ClientContextProvider>
        <ContactContextProvider>
          <App />
        </ContactContextProvider>
      </ClientContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
