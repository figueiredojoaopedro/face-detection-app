import React, { Component } from "react";
import Navigation from "./components/navigation/Navigation";
import Logo from "./components/logo/Logo";
import ImageLinkForm from "./components/imagelinkform/ImageLinkForm";
import FaceRecognition from "./components/faceRecognition/FaceRecognition";
import SignIn from "./components/signin/SignIn";
import Register from "./components/register/Register"
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
            box: {},
            route: 'signin',
            isSignedIn: false
        }
    }

    onRouteChange = (route) => {
        if(route === 'signout'){
            this.setState({isSignedIn: false})
        }
        else if(route === 'home'){
            this.setState({isSignedIn: true})
        }
        this.setState({route: route});
    }

    calculateFaceLocation = (data) => {
        const clarifai_face = data.outputs[0].data.regions[0].region_info.bounding_box;
        const image = document.getElementById('inputImage');
        const width = Number(image.width);
        const height = Number (image.height);
        return {
            leftCol: clarifai_face.left_col * width,
            top_row: clarifai_face.top_row * height,
            rightCol: width - (clarifai_face.right_col * width),
            bottom_row: height - (clarifai_face.bottom_row * height)
        };
    }

    displayFaceBox = (box) => {
        this.setState({box: box});
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
            response => {
                // passing the box parameter as the calculate stuff function...
                this.displayFaceBox(this.calculateFaceLocation(response));
            }
        ).catch(
            err=> console.log(err)
        );
    }
    render() {
        return (
            <div className="App">
                <Navigation isSignedIn={this.state.isSignedIn} onRouteChage={this.onRouteChange}/> 
                {
                this.state.route === 'home'
                    ? 
                    <div>
                        <Logo />
                        <Rank />
                        <ImageLinkForm 
                            onInputChange={this.onInputChange} 
                            onButtonSubmit={this.onButtonSubmit}
                        />
                        <FaceRecognition
                            box = {this.state.box}
                            imageUrl={this.state.imageUrl}
                        />
                    </div>
                    : (this.state.route === 'signin'
                        ? <SignIn onRouteChange={this.onRouteChange}/>
                        : <Register onRouteChange={this.onRouteChange}/>
                    )
                    }
            </div>
        );
    }
}

export default App;
