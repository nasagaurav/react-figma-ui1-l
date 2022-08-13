import React from "react";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import HomePage from "./pages/home-page";
import ProductsPage from "./pages/products-page";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
