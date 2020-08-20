import React from "react";
import "./App.css";
import Header from "./components/header/header";
import Body from "./components/body/body";

function App() {
  let myData: string = "\n";

  return (
    <div className="App">
      <Header data={myData}></Header>

      <h1>Privet comrades</h1>
      <Body data={myData}></Body>
    </div>
  );
}

export default App;
