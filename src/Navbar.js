import React, { useState } from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

// You can have all your design themes and standards in one place
import colors from "./colors";

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
          }
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
