import React from "react";
import { RenderCounter } from "./RenderCounter";
import { useCountState } from "../context/StateUpdateContext";

export const CountDisplay = React.memo(function CountDisplay() {
  const count = useCountState();

  return (
    <div style={{ border: "1px solid black", padding: 10 }}>
      <RenderCounter />
      {`The current count is ${count}. `}
    </div>
  );
});
