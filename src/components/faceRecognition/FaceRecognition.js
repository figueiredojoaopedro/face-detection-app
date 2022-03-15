import React from "react";
import "./facerecognition.css";

const FaceRecognition = ({imageUrl, box}) => {
    return(
        <div className="imagem center ma">
            <div className="output center mt2 absolute">
                <img
                    id='inputImage'
                    width='500px'
                    height='auto'
                    src={imageUrl}
                >
                </img>
                <div className="bounding-box" style={{top: box.top_row, right: box.rightCol, bottom: box.bottom_row, left: box.leftCol}}></div>
            </div>

        
        </div>
    );
}

export default FaceRecognition;