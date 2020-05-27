import React from 'react'

function Dashboard() {
    return (
            <React.Fragment> {/* used  when you don't NEED a <div>, like when you don't need an element in the dom */}
                <div style={rx}><h1>Dashboard</h1>
                <p>This the devflow App.  A Mod3Project</p>
                </div>
            </React.Fragment>  
            //  It's like a Ghost-Element:  It doesn't dhow up in the dom
    )
}
export default Dashboard;

const rx={
    backgroundImage: 'url("./img/overview.JPG")',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
}