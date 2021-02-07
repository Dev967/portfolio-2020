import React from 'react';

import LandingPage from "./Pages/Landing_page";
import ServicePage from "./Pages/Service_page";
import ProjectsPage from "./Pages/Projects_page";
import ContactPage from "./Pages/Contact_page";
import AboutPage from "./Pages/About_page";
import CreditsPage from "./Pages/Credits_page";

import Navigation from "./Navigation";

import "./styles/body.css";

import { BrowserRouter, Route, Switch, DefaultRoute } from 'react-router-dom';
import { PageTransition } from '@steveeeie/react-page-transition';


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Route
          render={({ location }) => {
            return (
              <PageTransition
                preset="glueBottomFromTop"
                // preset="moveToBottomScaleUp"
                // preset="slide"
                // preset="fadeFromRight"
                // preset="moveToLeftFromRight"
                transitionKey={location.pathname}
              >
                <Switch location={location}>

                  <DefaultRoute handler={LandingPage} />
                  <Route path="/" component={LandingPage} exact />
                  <Route path="/Services" component={ServicePage} exact />
                  <Route path="/Projects" component={ProjectsPage} exact />
                  <Route path="/Contact" component={ContactPage} exact />
                  <Route path="/AboutMe" component={AboutPage} exact />
                  <Route path="/credits" component={CreditsPage} exact />
                </Switch>
              </PageTransition>
            );
          }}
        />
      </BrowserRouter>
    );
  }
}

export default App;
