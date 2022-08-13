import React from "react";
import AddToCartButton from "../components/AddToCartButton";
import DetailsAndReviews from "../components/DetailsAndReviews";
import ChooseColor from "../components/ChooseColor";
import ProductInfo from "../components/ProductInfo";
export default function ProductsPage() {
  return (
    <div>
      <ProductInfo />
      <ChooseColor />
      <DetailsAndReviews />
      <AddToCartButton />
    </div>
  );
}
