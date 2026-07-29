import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { store } from "./redux/store";
import { AuthProvider } from "./context/AuthContext";
import { ThemeProvider } from "./context/ThemeContext";


// Global Theme CSS
import "./theme.css";


ReactDOM.createRoot(document.getElementById("root"))
.render(

  <Provider store={store}>

    <ThemeProvider>

      <AuthProvider>

        <BrowserRouter>

          <App />

        </BrowserRouter>

      </AuthProvider>

    </ThemeProvider>

  </Provider>

);