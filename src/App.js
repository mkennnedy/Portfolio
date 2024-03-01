import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Hero from "./Components/Hero";
import Portfolio from "./Components/Portfolio";

function App() {
  return (
    <div cassName="App">
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </div>
  );
}

export default App;
