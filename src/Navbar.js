import React, { useState } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";

// You can have all your design themes and standards in one place
import colors from "./colors";

const spin = keyframes`
 to{
  transform:rotate(360deg)
 }
`;

const Navbar = () => {
  const [padding, setPadding] = useState(15);
  return (
    /*eslint-disable */
    <header
      css={css`
        background-color: ${colors.secondary};
        padding: ${padding}px;
      `}
      onClick={() => setPadding(padding + 15)}
    >
      <Link to="/">Adopt Me</Link>
      <span
        css={css`
          font-size: 60px;
          /* & refers to the actual component itself */
          &:hover {
            text-decoration: underline;
            animation: 1s ${spin} linear infinite reverse;
          }

          display: inline-block;
          animation: 1s ${spin} linear infinite;
        `}
        role="img"
        aria-label="logo"
      >
        🐩
      </span>
    </header>
  );
};

export default Navbar;
