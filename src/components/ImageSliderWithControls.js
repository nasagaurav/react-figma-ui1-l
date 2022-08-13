import React from "react";

export default function ImageSliderWithControls() {
  return (
    <div className="slider-container">
      <div className="top">
        <div className="img-inner"><img src="/icons/arrow-back.svg" alt="" /></div>
        <div className="img-inner"><img src="/icons/heart-icon.svg" alt="" /></div>
      </div>
      <div className="bottom">
        <img src="/products/1-full.png" alt="" />
      </div>
    </div>
  );
}
