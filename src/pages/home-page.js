import React from "react";
import Header from "../components/Header";
import Categories from "../components/Categories";
import Products from "../components/Products";
export default function HomePage() {
  return (
    <div>
      <Header />
      <h1>Find your suitable product now.</h1>
      <Categories />
      <Products />
    </div>
  );
}
