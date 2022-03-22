import React from 'react';


const Navigation = ({onRouteChage, isSignedIn}) => {
        if(isSignedIn){
            return (
            <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                <p onClick={() => onRouteChage('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
            </nav>
            );
        }
        else{
            return(
                <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
                    <p onClick={() => onRouteChage('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
                    <p onClick={() => onRouteChage('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
                </nav>
            );
        }
}

export default Navigation;