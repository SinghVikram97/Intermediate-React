import React from "react";
import { hydrate } from "react-dom";
import App from "./App";

// Other browser only things

// Hydrate is like render
// But
// Hydrate is basically used in case of SSR(Server side Rendering).
// SSR gives you the skeleton or HTML markup which is being shipped from a server
// so that for the first time when your page loads it is not blank and s
// earch engine bots can index it for SEO(A use case of SSR).
// So hydrate adds the JS to your page or a node to which SSR is applied. S
// So that your page responds to the events performed by the user.

// Whereas render blows away whatevers there and re-render it
hydrate(<App />, document.getElementById("root"));
