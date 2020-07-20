import React from "react";
import "./App.css";
import State from "./State";
import Effect1 from "./Effect1";
import Effect2 from "./Effect2";
import Effect3 from "./Effect3";
import Context from "./Context";

function App() {
  return (
    <div className="App">
      <State />
      <hr />
      <Effect1 />
      <hr />
      <Effect2 />
      <hr />
      <Effect3 />
      <hr />
      <Context />
    </div>
  );
}

export default App;
