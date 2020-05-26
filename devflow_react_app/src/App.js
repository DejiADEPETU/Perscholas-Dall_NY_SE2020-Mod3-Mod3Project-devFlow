import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
// import Oauth from './userOauth/Oauth';
import DOMp from './components/DOMp'
class App extends Component {
  render() {
    return (
      <div className="App">
        {/* 
        <div style={H2x}>
        <h1 style={H3x}> devflow</h1>
        <h3> [Initiate,Tract & Done] </h3> 
        </div>
        */}
          <DOMp/>  
          {/*<Oauth/>*/}
      </div>
    );
  }
}
export default App;

const H2x ={
  // marginTop : '5px',
  float : 'center',
  color : 'white'
}

const H3x ={

  color : 'blue',  
}


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