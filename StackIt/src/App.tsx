import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import BodyContainer from "./components/BodyContainer/BodyContainer";
function App() {
  return (
    <>
      <div className="app-container">
        <Navbar />
        <BodyContainer />
      </div>
    </>
  );
}

export default App;
