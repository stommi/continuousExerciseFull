import React, { Component } from 'react';
import TopicList from "./TopicList";
import './TopicBox.css'
class TopicBox extends Component {
    render() {
        return (
            <div className="TopicBox">
                <h1>Aiheet</h1>
                <TopicList topic={data}/>
            </div>
        );
    }
}

var data = [{id: 0, title: "Java01", description: "Java perusteet", additionalSource: "Google", complete: "false", creationDate: "2019-02-15", completionDate: "2019-12-15"},
    {id: 1, title: "JS", description: "JS perusteet", additionalSource: "Wikipedia", complete: "true", creationDate: "2019-02-15", completionDate: "2019-12-15"} ,];

export default TopicBox;