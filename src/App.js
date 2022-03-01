import React, { Component } from "react";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/imagelinkform/ImageLinkForm.js";
import Rank from "./components/rank/Rank";
import "./App.css";

// to require the clarifai api
import Clarifai from 'clarifai';

// to access the api that im using...
const app = new Clarifai.App({
    apiKey: "36a126e3ad854417b93b7167e0384ab1",
});
class App extends Component {
    constructor(){
        super();
        this.state = {
            input: ''
        }
    }
    // as we are creating something that changes the dom, we've got to accept an event at the function
    onInputChange = (event) => {
        console.log(event.target.value);
    }
    // to catch the detect click
    onButtonSubmit = () => {
        setImageUrl(input)
        app.models.predict(
            Clarifai.FACE_DETECT_MODEL,
        )
        .then((response) => {
            console.log(
                response.outputs[0].data.regions[0].region_info.bounding_box
            );
        })
        .catch((err) => {
            console.log(err);
        })
    }

    render() {
        return (
            <div className="App">
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm 
                    onSubmit={this.onButtonSubmit} 
                    onInputChange={this.onInputChange}   
                />
                {/*<FaceRecognition/>*/}
            </div>
        );
    }
}

export default App;
