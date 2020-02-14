import React, { Component } from 'react';
import TopicList from "./TopicList";
// import './TopicBox.css'
class TopicBox extends Component {
    render() {
        return (
            <div className="TopicBox">
                <h1>TopicBox</h1>
                <TopicList topic={data}/>
            </div>
        );
    }
}

var data = [{id: 1, title: "Java01", description: "Java perusteet", additionalSource: "Google", complete: true, creationDate: "2019-02-15", completionDate: "2019-12-15"} ,];

export default TopicBox;