import React from "react";

export default function Header() {
  return (
    <div className="header">
      <div className="menu">
        <img src="/icons/menu-icon.svg" alt="" />
      </div>
      <div className="search-box">
        <img src="/icons/search-icon.svg" alt="" />
        <input placeholder="Search Product" />
      </div>
    </div>
  );
}
