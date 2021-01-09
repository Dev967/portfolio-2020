import React from 'react';

import LandingPage from "./Pages/Landing_page";
import ServicePage from "./Pages/Service_page";
import ProjectsPage from "./Pages/Projects_page";
import ContactPage from "./Pages/Contact_page";
import AboutPage from "./Pages/About_page";
import CreditsPage from "./Pages/Credits_page";

import Navigation from "./Navigation";

import "./styles/body.css";

import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Nova+Round&display=swap');
      </style>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={LandingPage} exact />
            <Route path="/Services" component={ServicePage} exact />
            <Route path="/Projects" component={ProjectsPage} exact />
            <Route path="/Contact" component={ContactPage} exact />
            <Route path="/AboutMe" component={AboutPage} exact />
            <Route path="/credits" component={CreditsPage} exact />
            <Route component={<div>Not found</div>} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
