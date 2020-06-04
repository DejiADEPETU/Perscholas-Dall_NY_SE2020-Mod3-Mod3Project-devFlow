import React, { Component } from 'react';
import fire from './config/Fire';
import DOMp from './components/DOMp'

class Home extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut();
    }

    render() {
        return (
            <div>
                <DOMp/>
                <button onClick={this.logout}>Logout</button>
            </div>
        );

    }

}

export default Home;


