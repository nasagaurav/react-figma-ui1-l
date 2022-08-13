import React from "react";

export default function ChooseColor() {
  const a = ["slateblue", "lightgrey", "powderblue"];
  return (
    <div className="choose-colors">
      <div className="title">Colors</div>

      <div className="color-flex">
        {a.map((x) => (
          <div className="color-item">
            <div style={{ background: x }} className="color-box-circle"></div>
            <div className="desc">{x}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
