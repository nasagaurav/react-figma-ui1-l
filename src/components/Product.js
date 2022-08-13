import React from "react";

export default function Product(props) {
  const { id, title, desc, price, image } = props;
  return (
    <div className="product">
      <img src={image} alt="" />
      <div className="title">{title}</div>
      <div className="desc">{desc}</div>
      <div className="price">{price}</div>
    </div>
  );
}
