import React, { useState, useEffect } from "react";

export default function Effect1() {
  const [time, setTime] = useState(new Date());
  const [isGreen, setIsGreen] = useState(true);
  // Time doesn't update again on re-render due to color change
  useEffect(() => {
    console.log("Effect1");
  }, []);
  // Provide empty array in dependency list it runs only once after intial render
  // Provide nothing it runs after each re-render
  // Provide [isGreen] in dependency it runs everytime it updates
  // Provide [time] in dependency it runs only once as time doesn't change after 1st render
  console.log("Effect1", time.toLocaleTimeString(), isGreen);
  return (
    <>
      <h1
        onClick={() => setIsGreen(!isGreen)}
        style={{ color: isGreen ? "limegreen" : "crimson" }}
      >
        useEffect example1: {time.toLocaleTimeString()}
      </h1>
    </>
  );
}
