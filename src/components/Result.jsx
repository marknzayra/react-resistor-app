import { getBottomNavigationActionUtilityClass } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function Result({
  firstBand,
  secondBand,
  thirdBand,
  fourthBand,
}) {
  const [percent, setPercent] = useState(5);

  const band1 = firstBand;
  const band2 = secondBand;
  const band3 = thirdBand;
  const band4 = fourthBand;

  let num1 = band1.toString();
  let num2 = band2.toString();
  let result = num1 + num2;
  let num3 = result * Math.pow(10, band3);
  
  useEffect(() => {
    if (band4 === "10") {
      setPercent(5);
    } else if (band4 === "11") {
      setPercent(10);
    } else {
      setPercent(20);
    }
  }, [band4]);

  let template = `${num3}Ω ±${percent}%`;

  return (
    <div>
      <header>
        <div id="outBanner" className="outBanner">
          <h1>The Value is:</h1>
          <h2 id="current-value">{template}</h2>
        </div>
      </header>
    </div>
  );
}
