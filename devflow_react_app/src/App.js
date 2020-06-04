import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Oauth from './userOauth/Oauth';
import About from './About';
import Header from './components/layout/Header';
import Home from './Home';

import './App.css';
// import { auth, handleUserProfile } from './firebase/utils';
// import CardList from './components/CardList'

class App extends Component {
  render() {
    return (
      <div>
      <Oauth/>
      <Router>
        <React.Fragment>
            <Header/>
            <div  className="App">
            <h1>devFlow</h1>
            <h4> - Initiate, Tract & Done - </h4> 
            </div>
            <div>
              <Link to="/oauth"> Login </Link>
            </div>
            <div>
            {/* <Link to="/boards" styyle={H3x}>Boards</Link> */}
            </div>
            <Switch>
              <Route path='/' exact={true} component={Home}/>
              <Route path='/oauth' exact={true} component={Oauth}/>
              {/* <Route path='/dashboard' exact={true} component={Dashboard}/> */}
            <Route path='/About' exact={true} component={About}/> 
            </Switch>
        </React.Fragment>
      </Router>
      </div>
    )
  }
}

export default App.js;



/*


import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Store from "./store";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";
import "./index.css";
import { createGlobalStyle } from "styled-components";
import $ from "jquery";
import { PersistGate } from "redux-persist/integration/react";

const { persistor, store } = Store();

const GlobalStyle = createGlobalStyle`
  html {
    background-color: orange;
    box-sizing: border-box;
    transition: all 0.5s ease-in;
  }
`;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <GlobalStyle />
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

$(document).bind("DOMNodeRemoved", function(e) {
  console.log("Removed: " + e.target.nodeName);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();



*/


/*


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
*/
