import React, { useState } from "react";

export default function Categories() {
  const a = ["Hand Bags", "Watch", "Books", "Glasses"];
  const [s, sets] = useState("Hand Bags");
  return (
    <div className="cats">
      {a.map((x) => (
        <div onClick={()=>sets(x)} className={s === x ? "item active" : "item"}>{x}</div>
      ))}
    </div>
  );
}
