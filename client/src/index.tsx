import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ControlledRoute } from "./components/ControlledRoute";
import { Home } from "./pages/app/Home";
import { Login } from "./pages/login/Login";

//
const Main = () => (
  <BrowserRouter>
    <Routes>
      <Route path="app">
        <Route
          path="home"
          element={
            <ControlledRoute>
              <Home />
            </ControlledRoute>
          }
        />
      </Route>
      <Route
        path="login"
        element={
          <ControlledRoute>
            <Login />
          </ControlledRoute>
        }
      />

      <Route path="*" element={<div>404! Invalid route</div>} />
    </Routes>
  </BrowserRouter>
);

//
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
