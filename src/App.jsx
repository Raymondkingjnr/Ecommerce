import React from "react";
import Nav from "./components/Navcomponents/Nav.jsx";
import "./App.css";
import { watchs } from "./Data/data";
import { shoes } from "./Data/data";
import { glasses } from "./Data/data";
function App() {
  return (
    <div>
      <Nav watchs={watchs} shoes={shoes} glasses={glasses} />
    </div>
  );
}

export default App;
