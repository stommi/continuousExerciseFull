import React, { Component } from 'react';
import Topic from "./Topic";

class TopicList extends Component {
    render() {
        return (<table>
            <tbody>
            <Topic tiedot={this.props.topic[0]}/>
            <Topic tiedot={this.props.topic[1]}/>
            <Topic tiedot={this.props.topic[2]}/>
            <Topic tiedot={this.props.topic[3]}/>
            <Topic tiedot={this.props.topic[4]}/>
            <Topic tiedot={this.props.topic[5]}/>
            <Topic tiedot={this.props.topic[6]}/>
            </tbody>
        </table>);
    }

}

export default TopicList