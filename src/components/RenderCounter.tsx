import React, { useEffect, useRef } from "react";

export function RenderCounter() {
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (ref.current)
      ref.current.textContent = (
        Number(ref.current.textContent || "0") + 1
      ).toString();
  });

  return (
    <span
      style={{
        backgroundColor: "#ccc",
        borderRadius: 4,
        padding: "2px 4px",
        fontSize: "0.8rem",
        margin: "0 6px",
        display: "inline-block",
      }}
      ref={ref}
    />
  );
}
