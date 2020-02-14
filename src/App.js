import React, {Component} from 'react';
import logo from './graduationHat.png';
import './App.css';
import Lomake from "./Lomake";
import Lomaketiedot from "./Lomaketiedot";
import TopicBox from "./TopicBox";

class App extends Component {
    state = {
        id: "",
        title: "",
        description: "",
        additionalSource: "",
        complete: "",
        creationDate: "",
        completionDate: ""
    };
    yhdistaja = (topic) => {
        this.setState({
            id: topic.id,
            title: topic.title,
            description: topic.description,
            additionalSource: topic.additionalSource,
            complete: topic.complete,
            creationDate: topic.creationDate,
            completionDate: topic.completionDate
        })
    };

    render() {
        return (
            <div className="App">

                <br/><br/>
                <img src={logo} className="App-logo" alt="logo"/>
                <h1>Oppimispäiväkirja</h1>
                <Lomake viittaus={this.yhdistaja}/>

                <br/>
                <input type="button" defaultValue="Tulosta aiheet" onClick={() => {
                    this.setState({naytaLomakeTiedot: true});
                }}/>

                {this.state.naytaLomakeTiedot && <Lomaketiedot tiedot={this.state}/>}

                {/*<TopicBox/>*/}

            </div>

        );
    }
}

export default App;