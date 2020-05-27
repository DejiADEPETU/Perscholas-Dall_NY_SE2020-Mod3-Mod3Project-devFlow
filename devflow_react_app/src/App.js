import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Oauth from './userOauth/Oauth';
import Home from './Home';
import Dashboard from './components/Dashboard';
import Header from './components/layout/Header';
// import DOMp from './components/DOMp'
// import CardList from './components/CardList'

class App extends Component {
  render() {
    return (
        <div>
          <div  className="App" style={H2x}>
            <h1 style={H3x}> devflow</h1>
            <h4> - Initiate, Tract & Done - </h4> 
              <div style={lox}> <oauth/> </div>
              <Oauth/>
          </div>
        </div>
    )
  }
}
export default App;

const H2x ={
  margin : '15%',
  // margineft: '25%',
  // marginRight: '25%',
  float : 'center',
  color : 'white'
  // display :'inline-block',
}

const H3x ={
  color : 'blue',  
}

const lox ={
  maxMargin : '25%',
  justify : 'center',

}












{/*
      </div>
          <Oauth/>
        <Router>
        <React.Fragment>
          <Header/>
          <div  className="App" style={H2x}>
          <h1 style={H3x}> devflow</h1>
          <h4> - Initiate, Tract & Done - </h4> 
              <div style={lox}>
                  <Link to="/oauth"> Login</Link>
              </div>
          </div>
              <Link to="/boards" styyle={H3x}>Boards</Link>
          <Switch>
            <Route path='/' exact={true} component={Home}/>
            <Route path='/oauth' exact={true} component={Oauth}/>
            <Route path='/dashboard' exact={true} component={Dashboard}/>
          <Route path='/About' exact={true} component={About}/> 
          </Switch>
        </React.Fragment>
        </Router>
        </div>
*/}
