import React, { useReducer } from "react";

// To limit rgb value b/w 0 to 255
const limitRGB = (num) => (num < 0 ? 0 : num > 255 ? 255 : num);

const step = 50;

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT_R":
      return Object.assign({}, state, { r: limitRGB(state.r + step) });
    case "DECREMENT_R":
      return Object.assign({}, state, { r: limitRGB(state.r - step) });
    case "INCREMENT_G":
      return Object.assign({}, state, { g: limitRGB(state.g + step) });
    case "DECREMENT_G":
      return Object.assign({}, state, { g: limitRGB(state.g - step) });
    case "INCREMENT_B":
      return Object.assign({}, state, { b: limitRGB(state.b + step) });
    case "DECREMENT_B":
      return Object.assign({}, state, { b: limitRGB(state.b - step) });
    default:
      return state;
  }
};

export default function UseReducer() {
  // Initial state is passed in useReducer
  // Unlike redux reducer is not run initially (1st time)

  // What if we want this for our whole application?
  // We can use useContext+useReducer which is basically Redux
  const [{ r, g, b }, dispatch] = useReducer(reducer, { r: 0, g: 0, b: 0 });
  return (
    <>
      <div>
        <h1 style={{ color: `rgb(${r}, ${g}, ${b})` }}>useReducer Example</h1>
        <div>
          <span>R &nbsp;</span>
          <button onClick={() => dispatch({ type: "INCREMENT_R" })}>➕</button>
          <button onClick={() => dispatch({ type: "DECREMENT_R" })}>➖</button>
        </div>
        <div>
          <span>G &nbsp;</span>
          <button onClick={() => dispatch({ type: "INCREMENT_G" })}>➕</button>
          <button onClick={() => dispatch({ type: "DECREMENT_G" })}>➖</button>
        </div>
        <div>
          <span>B &nbsp;</span>
          <button onClick={() => dispatch({ type: "INCREMENT_B" })}>➕</button>
          <button onClick={() => dispatch({ type: "DECREMENT_B" })}>➖</button>
        </div>
      </div>
    </>
  );
}
