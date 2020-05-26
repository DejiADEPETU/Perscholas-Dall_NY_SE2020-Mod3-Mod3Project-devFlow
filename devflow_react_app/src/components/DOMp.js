import React, { Component } from 'react';
// import '../styles/DOMp.css';
// import Card from './Card';
import Board from './Board';

export default class DOMp extends Component {
    render() {
        return (
            <React.Fragment >
                <div  >
                    < button onclick = ""> Boards </button>
                </div>

                <div className = "mainDOMp">
                    <Board/>
                </div>
            </React.Fragment>
        );
    };
};

