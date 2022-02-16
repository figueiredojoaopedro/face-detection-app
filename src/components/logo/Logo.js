import React from "react";
import Tilt from "react-tilt";
import './logo.css';
import ai_logo from './ai-logo.png';

const Logo = () => {
    return (
        <div className="logo-div ma4 mt0">
            <Tilt
                className="Tilt br2 shadow-2"
                options={{ max: 50 }}
                style={{ height: 150, width: 150 }}
            >
                <div className="Tilt-inner pa3">
                    <img
                    style={{paddingTop: '20px'}}
                    src={ai_logo}
                    alt='logo'
                    >
                    </img>
                </div>
            </Tilt>
        </div>
    );
};

export default Logo;
