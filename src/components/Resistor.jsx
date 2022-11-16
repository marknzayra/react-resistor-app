import React from "react";
import Band from "./Band";

export default function Resistor({
  setFirstBand,
  setSecondBand,
  setThirdBand,
  setFourthBand,
}) {
  return (
    <div className="box">
      <div className="grid-resistor">
        <div id="rBody" className="resistor_body">
          <Band
            position={"band1"}
            setBand={setFirstBand}
            id="band1"
            className="band1"
          />
          <Band
            position={"band2"}
            setBand={setSecondBand}
            id="band2"
            className="band2"
          />
          <Band
            position={"band3"}
            setBand={setThirdBand}
            id="band3"
            className="band3"
          />
          <Band
            position={"band4"}
            setBand={setFourthBand}
            id="band4"
            className="band4"
          />
        </div>
        <div className="lead1"></div>
        <div className="lead2"></div>
      </div>
    </div>
  );
}
