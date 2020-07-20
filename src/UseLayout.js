import React, { useState, useLayoutEffect, useRef } from "react";

const UseLayout = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const el = useRef();
  console.log(el); // stores dom element, undefined for 1st time gets value after re-render happens

  // useLayout is same as useEffect but it is sync
  // while useEffect is async

  // useLayout function will run then react will re-paint
  // while useEffect will run while component re-rendering is not blocked
  useLayoutEffect(() => {
    setWidth(el.current.clientWidth);
    setHeight(el.current.clientHeight);
  }, [height, width]);

  return (
    <div>
      <h1>useLayoutEffect Example</h1>
      <h2>textarea width: {width}px</h2>
      <h2>textarea height: {height}px</h2>
      <textarea
        onClick={() => {
          setWidth(0); // To fire re-render and useLayoutEffect runs
        }}
        ref={el}
      />
    </div>
  );
};

export default UseLayout;
