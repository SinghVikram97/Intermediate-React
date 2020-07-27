import React, { useState } from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

const Navbar = () => {
  const [padding, setPadding] = useState(15);
  return (
    /*eslint-disable */
    <header
      css={css`
        background-color: pink;
        padding: ${padding}px;
      `}
      onClick={() => setPadding(padding + 15)}
    >
      <Link to="/">Adopt Me</Link>
      <span
        css={css`
          font-size: 60px;
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
