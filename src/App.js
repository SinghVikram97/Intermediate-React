import React from "react";
import "./App.css";
import UseRefComponent from "./UseRef";
import UseStateClosure from "./UseStateClosure";
import UseReducer from "./UseReducer";
import UseMemo from "./UseMemo";
import UseCallback from "./UseCallback";
import UseLayout from "./UseLayout";
import UseImperativeHandle from "./UseImperativeHandle";

function App() {
  return (
    <div className="App">
      <UseStateClosure />
      <hr />
      <UseRefComponent />
      <hr />
      <UseReducer />
      <hr />
      <UseMemo />
      <hr />
      <UseCallback />
      <hr />
      <UseLayout />
      <hr />
      <UseImperativeHandle />
    </div>
  );
}

export default App;
