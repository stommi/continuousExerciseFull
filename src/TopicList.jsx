import React, { Component } from 'react';
import Topic from "./Topic";

class TopicList extends Component {
    render() {
        return (<table>
            <tbody>
            <Topic tiedot={this.props.quote[0]}/>
            <Topic tiedot={this.props.quote[1]}/>
            <Topic tiedot={this.props.quote[2]}/>
            <Topic tiedot={this.props.quote[3]}/>
            <Topic tiedot={this.props.quote[4]}/>
            <Topic tiedot={this.props.quote[5]}/>
            <Topic tiedot={this.props.quote[6]}/>
            </tbody>
        </table>);
    }

}

export default TopicList