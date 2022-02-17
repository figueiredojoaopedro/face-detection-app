import React, { Component } from "react";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/imagelinkform/ImageLinkForm.js";
import Rank from "./components/rank/Rank";
import "./App.css";

class App extends Component {
    constructor(){
        super();
        this.state = {
            input: '',
        }
    }
    onInputCHange = (event) => {
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
                    onInputCHange={this.onInputCHange} 
                    onButtonSubmit={this.onButtonSubmit}
                />
                {/*<FaceRecognition/>*/}
            </div>
        );
    }
}

export default App;
