import React from "react";

const FaceRecognition = ({imageUrl}) => {
    return(
        <div className="center ma">
            <div className="center mt2">
                <img 
                    width='500px'
                    height='auto'
                    src={imageUrl}
                >
                </img>
            </div>

        
        </div>
    );
}

export default FaceRecognition;