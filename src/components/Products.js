import React from "react";
import Product from "./Product";
export default function Products() {
  const a = [
    {
      id: 1,
      title: "Mulberry Clutch1",
      desc: "Series 1",
      price: "$199",
      image: "/products/1.png",
    },
    {
      id: 2,
      title: "Mulberry Clutch2",
      desc: "Series 2",
      price: "$299",
      image: "/products/2.png",
    },
    {
      id: 3,
      title: "Mulberry Clutch3",
      desc: "Series 3",
      price: "$399",
      image: "/products/3.png",
    },
    {
      id: 4,
      title: "Mulberry Clutch4",
      desc: "Series 4",
      price: "$499",
      image: "/products/4.png",
    },
  ];

  return (
    <div className="products">
      {a.map((x) => (
        <Product key={x.id} {...x} />
      ))}
    </div>
  );
}
