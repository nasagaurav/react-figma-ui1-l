import React from "react";

export default function Categories() {
  const a = ["Hand Bags", "Watch", "Books", "Glasses"];
  return (
    <div className="">
      {a.map((x) => (
        <div>{x}</div>
      ))}
    </div>
  );
}
