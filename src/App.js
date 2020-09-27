import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { createGlobalStyle } from "styled-components";

import { DataProvider } from "./context/context";
import NavBar from "./components/navBar";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import DefaultPage from "./pages/defaultPage";

const GlobalStyles = createGlobalStyle`

html {
  font-size: calc(0.9em + 0.9vw);
  box-sizing: border-box;

  /* Variables */
  --font-primary: font-primary;
  --font-primary-bold: font-primary-bold;
  --font-secondary: font-secondary;
  --font-secondary-bold: font-secondary-bold;
  --font-secondary-italic: font-secondary-italic;
  --font-script: font-script;

  --color-black: #0e0f0d;
  --color-white: #ffffff;
  --color-gray-1: #c0c4bb;
  --color-gray-2: #d6d9d3;
  --color-gray-3: #e4e6e2;
  --color-primary-1: #234955;
  --color-primary-2: #3c7e92;
  --color-primary-3: #75b4c7;
  --color-secondary-1: #542342;
  --color-secondary-2: #a2447f;
  --color-secondary-3: #cd88b4;
}

*,
*::after,
*::before {
  padding: 0;
  margin: 0;
  box-sizing: inherit;
}

body {
  font-family: var(--font-primary) !important;
}
`;

function App() {
  return (
    <DataProvider>
      <Router>
        <GlobalStyles />
        <NavBar />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <HomePage />
          </Route>
          <Route exact path="/about">
            <AboutPage />
          </Route>
          <Route>
            <DefaultPage />
          </Route>
        </Switch>
      </Router>
    </DataProvider>
  );
}

export default App;
