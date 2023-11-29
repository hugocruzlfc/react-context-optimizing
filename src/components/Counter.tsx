import React from "react";
import { RenderCounter } from "./RenderCounter";
import { useCountUpdater } from "../context/StateUpdateContext";

export const Counter = React.memo(function Counter() {
  const increment = useCountUpdater();

  return (
    <div style={{ border: "1px solid black", padding: 10 }}>
      <RenderCounter />
      <button onClick={increment}>Increment count</button>
    </div>
  );
});
