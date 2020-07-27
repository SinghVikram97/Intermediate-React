import React, { useState, lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";

// We don't want to include details page right away
// But as soon as parcel/webpack see this import it will import and bundle it in
// SO we delete it from here

// import Details from "./Details";

const Details = lazy(() => import("./Details.js"));
// Details is now a placeholder component that will not load the code
// Untill later when Details is actually tried to be rendered for the 1st time

const App = () => {
  const theme = useState("darkblue");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <header>
          <Link to="/">Adopt Me!</Link>
        </header>
        {/* Need to use Suspense component with lazy */}
        <Suspense fallback={<h1>Loading Route....</h1>}>
          {/* Fallback in case code not ready yet */}
          <Router>
            <SearchParams path="/" />
            <Details path="/details/:id" />
          </Router>
        </Suspense>
      </div>
    </ThemeContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
