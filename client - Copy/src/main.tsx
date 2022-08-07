import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./pages/login/Login";
import { ControlledRoute } from "./components/ControlledRoute";
import { Home } from "./pages/app/Home";

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
