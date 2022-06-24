import React from "react";
import "./App.css"
import "./index.css"

import "./App.js";
import Header from "./components/Header.js";
import Meme from "./components/Meme";

export default function App() {
  return (
    <div>
      <Header />
      <div className="meme-container">
        <Meme />
      </div>
    </div>
  )
}