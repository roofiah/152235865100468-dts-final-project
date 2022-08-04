import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./containers/home/Home"
import NotFound from './containers/NotFound';
import Login from './containers/Login';
import Register from './containers/Register';
import DailyMenu from './containers/home/DailyMenu';
import Dessert from './containers/home/Dessert';
import Vegetarian from './containers/home/Vegetarian';
import './App.css';
import App from "./App";
import Detail from "./containers/Detail";
import ProtectedRoute from "./components/ProtectedRoute";
import Searched from "./containers/Searched";
import CategoryDetail from "./containers/home/CategoryDetail";

function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<App />}
        >
          <Route path="/" element={<Home />} />
          <Route path="/daily-menu" element={<DailyMenu />} />
          <Route path="/dessert" element={<Dessert />} />
          <Route path="/vegetarian" element={<Vegetarian />} />
          <Route path="/detail/:id" element={
            <ProtectedRoute loginOnly={true}>
              <Detail />
            </ProtectedRoute>
          } />
          <Route path="/detail-category/:value" element={
            <ProtectedRoute loginOnly={true}>
              <CategoryDetail />
            </ProtectedRoute>
          } />
          <Route path="/search/:value" element={<Searched />} />
        </Route>
        <Route
          path="/login"
          element={
            <ProtectedRoute loginOnly={false}>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRoute loginOnly={false}>
              <Register />
            </ProtectedRoute>
          } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteApp;
