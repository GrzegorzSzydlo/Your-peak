import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import { Home } from './views/Home';
import { About } from './views/About';
import Contact  from './views/Contact';
import NoMatch from './views/NoMatch';
import { NavigationBar } from './components/NavigationBar';
import LoginSuccess from "./views/LoginSuccess";
import CreateAccountSuccess from "./views/CreateAccountSuccess";
import MountainViews from "./views/MountainViews";
import MountainList from "./components/MountainList";


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route path="/registration" component={CreateAccountSuccess} />
              <Route path="/loginSuccess" component={LoginSuccess} />

              <Route component={NoMatch} />
            </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
