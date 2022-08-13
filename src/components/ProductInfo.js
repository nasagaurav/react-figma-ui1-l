import React from "react";
import ImageSliderWithControls from "./ImageSliderWithControls";
export default function ProductInfo() {
  return (
    <div>
      <ImageSliderWithControls />
      <div className="desc-flex">
        <div className="item">
          <div className="title">Mulberry Clutch</div>
          <div className="desc">( With solo loop )</div>
        </div>
        <div className="item">
          <div className="price">$799</div>
        </div>
      </div>
    </div>
  );
}
