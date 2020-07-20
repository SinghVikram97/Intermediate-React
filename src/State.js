import React, { useState } from "react";

export default function State() {
  const [isGreen, setIsGreen] = useState(true);
  return (
    <>
      <h1
        style={{ color: isGreen ? "limegreen" : "crimson" }}
        onClick={() => {
          setIsGreen(!isGreen);
        }}
      >
        useState example
      </h1>
    </>
  );
}
