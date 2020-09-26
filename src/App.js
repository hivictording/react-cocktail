import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from "./components/navBar";
import HomePage from "./pages/homePage";
import AboutPage from "./pages/aboutPage";
import DefaultPage from "./pages/defaultPage";

function App() {
  return (
    <Router>
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
  );
}

export default App;
