import React from 'react';
import {Link} from 'react-router-dom';


{/*    
    If aouth != true: var navBar = "<Link to="/">Home</Link> | <Link to="/pricing">Pricing</Link>| <Link to="/press">Press</Link>| <Link to="/user_oauth">LogIn</Link></div>" : navBar = " <Link to="/">Home</Link> | <Link to="/boards">Boards</Link>| <Link to="/search">Search</Link>| <Link to="/addButton">[+]</Link>| <Link  to="/notifications">∆</Link>| <Link to="/help">?</Link>| <Link to="/account_settings">[\_ø_/]</Link>| <Link to="/help">?</Link> "
 */}



function Header(){
    return (
        <header style={headerStyle}>
            <h1 style={band_In_Header}>devflow</h1>
                <div style={linkStyle}>
                    <Link to="/">Home</Link> | <Link to="/boards">Boards</Link>| <Link to="/search">Search</Link>| <Link to="/addButton">[+]</Link>| <Link  to="/notifications">∆</Link>| <Link to="/help">?</Link>| <Link to="/account_settings">[\_ø_/]</Link>| <Link to="/help">?</Link>
                </div>
        </header>
    )
}

const linkStyle={
    color:'#fff',
    textDecoration: 'none'
}

const band_In_Header={
    color:'orange',
    textDecoration: 'none',
    float : 'center'


const headerStyle ={
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
    
}
export default Header;