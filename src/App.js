import "./App.css";
import Resistor from "./components/Resistor.jsx";
import Header from "./components/Header.jsx";
import Result from "./components/Result.jsx";
import DataTable from "./components/DataTable.jsx";
import { useState } from "react";
import ParticlesBg from "particles-bg";

export default function App() {
  const [firstBand, setFirstBand] = useState(0);
  const [secondBand, setSecondBand] = useState(0);
  const [thirdBand, setThirdBand] = useState(0);
  const [fourthBand, setFourthBand] = useState("10");

  return (
    <div className="App">
      <Header />
      <Resistor
        setFirstBand={setFirstBand}
        setSecondBand={setSecondBand}
        setThirdBand={setThirdBand}
        setFourthBand={setFourthBand}
      />
      <Result
        firstBand={firstBand}
        secondBand={secondBand}
        thirdBand={thirdBand}
        fourthBand={fourthBand}
      />
      <DataTable />
      <ParticlesBg color="random" type="cobweb" bg={true} />
    </div>
  );
}
