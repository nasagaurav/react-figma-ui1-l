import React from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Products from "../components/Products";
export default function HomePage() {
  return (
    <div>
      <Header />
      <div className="intro-title">Find your suitable product now.</div>
      <Categories />
      <Products />
    </div>
  );
}
