import React from "react";

export default function Categories() {
  const a = ["Hand Bags", "Watch", "Books", "Glasses"];
  return (
    <div className="cats">
      {a.map((x) => (
        <div className="item active">{x}</div>
      ))}
    </div>
  );
}
