import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ClientContextProvider } from "./contexts/clientsContext.tsx";
import { ContactContextProvider } from "./contexts/contactsContext.tsx";
import { UserContextProvider } from "./contexts/usersContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ClientContextProvider>
          <ContactContextProvider>
            <App />
          </ContactContextProvider>
        </ClientContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
