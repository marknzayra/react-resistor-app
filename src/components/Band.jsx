import React from "react";
import { useState } from "react";

export default function Band({ position, setBand }) {
  const [bandColor, setColor] = useState("");

  const color = [
    "black",
    "#904a0bff",
    "#dc1c4b",
    "#ec4733ff",
    "#ffd883ff",
    "#43b76eff",
    "#0094bcff",
    "#7351c5ff",
    "#808080ff",
    "#e6e6e6ff",
    "gold",
    "silver",
    "transparent",
  ];

  function handleChange(event) {
    setBand(event.target.value);
    setColor(color[event.target.value]);
  }

  if (position === "band4") {
    return (
      <div className="band4" style={{ backgroundColor: bandColor }}>
        <select onChange={handleChange} id="selectorBand4" className="selector">
          <option value="10">Gold</option>
          <option value="11">Silver</option>
          <option value="12">None</option>
        </select>
      </div>
    );
  } else {
    return (
      <div className={position} style={{ backgroundColor: bandColor }}>
        <select onChange={handleChange} className="selector">
          <option value="0">Black</option>
          <option value="1">Brown</option>
          <option value="2">Red</option>
          <option value="3">Orange</option>
          <option value="4">Yellow</option>
          <option value="5">Green</option>
          <option value="6">Blue</option>
          <option value="7">Violet</option>
          <option value="8">Grey</option>
          <option value="9">White</option>
        </select>
      </div>
    );
  }
}
