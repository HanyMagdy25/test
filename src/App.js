import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Test1 from "./Tests/Test1/Test1";
import LazyLoadingTest from "./components/LazyLoadingTest/LazyLoadingTest";
import SvgWithPercentage from "./components/SvgWithPercentage/SvgWithPercentage";

import React, { useRef } from "react";
import mySvgPath from "../src/assets/male.svg";
import SvgFill from "./components/SvgFill/SvgFill";

function App() {

  return (
    <div className="App flex justify-center">
      {/* <Test1  /> */}
      {/* <LazyLoadingTest/> */}

      <div className="w-36 pt-4">
        {/* <SvgWithPercentage percent={75} color="blue" /> */}
        <SvgFill />
      </div>
    </div>
  );
}

export default App;
