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
            input: '',
        }
    }
    onInputChange = (event) => {
        console.log(event.target.value);
    }
    onButtonSubmit = () => {
        console.log('click');
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
                {/*<FaceRecognition/>*/}
            </div>
        );
    }
}

export default App;
