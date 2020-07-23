import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Searchparams from "./SearchParams";
import Details from "./details";
import themeContext from "./ThemeContext";

const App = () => {
  const themeHook = useState("darkblue");
  return (
    <React.StrictMode>
      <themeContext.Provider value={themeHook}>
        <div>
          <header>
            <Link to="/">Adopt me!</Link>
          </header>
          <Router>
            <Searchparams path="/" />
            <Details path="/details/:id" />
          </Router>
        </div>
      </themeContext.Provider>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById("root"));
