import React from "react";

export default function Product(props) {
  const { id, title, desc, price, image } = props;
  return (
    <div className="">
      <img src={image} alt="" />
      <div>{title}</div>
      <div>{desc}</div>
      <div>{price}</div>
    </div>
  );
}
