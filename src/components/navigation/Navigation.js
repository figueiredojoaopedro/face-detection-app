import React from 'react';


const Navigation = ({onRouteChage}) => {
    return(
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
            <p onClick={() => onRouteChage('signin')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
        </nav>
    );
}

export default Navigation;