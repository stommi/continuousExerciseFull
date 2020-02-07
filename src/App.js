import React, {Component} from 'react';
import logo from './500px-Steering_wheel_ship.png';
import './App.css';
import Lomake from "./Lomake";
import Lomaketiedot from "./Lomaketiedot";

class App extends Component {
    state = { id: "", title:"", description:"", additionalSource:"", complete:"", creationDate:"", completionDate:""};
    yhdistaja = (topic) => {
        this.setState({id: topic.id, title: topic.title, description: topic.description, additionalSource: topic.additionalSource, complete: topic.complete, creationDate: topic.creationDate, completionDate: topic.completionDate})
    };
    render() {
        return (
            <div className="App">

                <h1>Oppimispäiväkirja</h1>
                <Lomake viittaus={this.yhdistaja}/>
                <Lomaketiedot tiedot={this.state}/>
                <img src={logo} className="App-logo" alt="logo" />

            </div>
        );
    }}

export default App;