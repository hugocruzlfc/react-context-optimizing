import React, { useState } from "react";
import "./App.css";
import { CountDisplay, Counter, RenderCounter } from "./components";
import { CountProvider } from "./context/StateUpdateContext";

function App() {
  const [, forceUpdate] = useState({});

  return (
    <div className="App">
      <div style={{ border: "1px solid black", padding: 10 }}>
        <RenderCounter />
        <button onClick={() => forceUpdate({})}>force render</button>
        <CountProvider>
          <CountDisplay />
          <Counter />
        </CountProvider>
      </div>
    </div>
  );
}

export default App;
