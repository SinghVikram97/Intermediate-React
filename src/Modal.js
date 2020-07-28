import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

// const modalRoot = document.getElementById("modal");
// Move every document reference from intial render as node won't recognize it

const Modal = ({ children }) => {
  const elRef = useRef(null);
  if (!elRef.current) {
    elRef.current = document.createElement("div");
  }

  useEffect(() => {
    // Moved here
    const modalRoot = document.getElementById("modal");
    modalRoot.appendChild(elRef.current);
    return () => modalRoot.removeChild(elRef.current);
  }, []);

  return createPortal(<div>{children}</div>, elRef.current);
};

export default Modal;
