import React, { Component } from "react";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/imagelinkform/ImageLinkForm";
import FaceRecognition from "./components/faceRecognition/FaceRecognition";
import Rank from "./components/rank/Rank";
import "./App.css";

// to require the clarifai api
import Clarifai from 'clarifai';

// to access the api that im using...
const app = new Clarifai.App({
    apiKey: "f9a5ae86792c4500b4102fc12cbfc952",
});

class App extends Component {
    constructor(){
        super();
        this.state = {
            input: '',
            imageUrl: '',
        }
    }
    
    onInputChange = (event) => {
        this.setState({input: event.target.value});
    }
    onButtonSubmit = () => {
        this.setState({imageUrl: this.state.input})
        app.models.predict(
            Clarifai.FACE_DETECT_MODEL, 
            this.state.input
        )
        .then(
            response => console.log(response.outputs[0].data.regions[0].region_info.bounding_box)
        ).catch(
            err=> console.log(err)
        );
    }
    render() {
        return (
            <div className="App">
                <Navigation /> 
                <Logo />
                <Rank />
                <ImageLinkForm 
                    onInputChange={this.onInputChange} 
                    onButtonSubmit={this.onButtonSubmit}
                />
                <FaceRecognition
                    imageUrl={this.state.imageUrl}
                />
            </div>
        );
    }
}

export default App;
