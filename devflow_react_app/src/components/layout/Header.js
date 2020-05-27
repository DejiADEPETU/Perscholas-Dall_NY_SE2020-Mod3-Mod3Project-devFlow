import React from 'react';
import {Link} from 'react-router-dom';

function Header(){
    return (
        <header style={headerStyle}>
            <h1 style={band_In_Header}>devflow</h1>
                <div style={linkStyle}>
                    <Link to="/">Home</Link> | <Link to="/boards">Boards</Link>| <Link to="/search">Search</Link>| <Link to="/addButton">[+]</Link>| <Link  to="/notifications">∆</Link>| <Link to="/help">?</Link>| <Link to="/dashboard">[Dashboard]</Link>| <Link to="/oauth">Login</Link>
                </div>
        </header>
    )
}
export default Header;

    const linkStyle={
        color:'#fff',
        textDecoration: 'none'
    }
  

    const band_In_Header={
        color:'ligthblue',
        textDecoration: 'none',
        float : 'center'
    }
    
    const headerStyle ={
        background: '#33343',
        color: '#fff',
        textAlign: 'center',
        padding: '10px',
    }