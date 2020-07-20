import React, { useState, useEffect } from "react";

export default function Effect2() {
  const [time, setTime] = useState(new Date());
  const [isGreen, setIsGreen] = useState(true);

  // Everytime isGreen changes useEffect is run and it updates current time
  useEffect(() => {
    setTime(new Date());
  }, [isGreen]);
  return (
    <>
      <h1
        onClick={() => setIsGreen(!isGreen)}
        style={{ color: isGreen ? "limegreen" : "crimson" }}
      >
        useEffect example2: {time.toLocaleTimeString()}
      </h1>
    </>
  );
}
