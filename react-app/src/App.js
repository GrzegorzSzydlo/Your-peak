import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import  Home  from './views/Home';
import { About } from './views/About';
import Contact  from './views/Contact';
import NoMatch from './views/NoMatch';
import { NavigationBar } from './components/NavigationBar';
import LoginSuccess from "./views/LoginSuccess";
import File from "./views/File";
import CreateAccountSuccess from "./views/CreateAccountSuccess";

import AddCardMountain from "./views/AddCardMountain";


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
              <Route path="/file" component={File} />
              <Route path="/addCardMountain" component={AddCardMountain} />

              <Route component={NoMatch} />
            </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
