import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Oauth from './userOauth/Oauth';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Oauth/>
      </div>
    );
  }
}
export default App;

/*
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Oauth/>
        <Router>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/Dashboard' exact={true} component={Dashboard}/>
            <Route path='/About' exact={true} component={About}/>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App;
*/