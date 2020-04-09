import React, { Component } from 'react';
import Topic from "./Topic";

class TopicList extends Component {
    render() {
        return (<table>
            <th>id</th>
            <th>Otsikko</th>
            <th>Kuvaus</th>
            <th>Lähde</th>
            <th>Tila</th>
            <th>Luontipäivä</th>
            <th>Valmistumispäivä</th>
            <tbody>
            <Topic tiedot={this.props.topic[0]}/>
            <Topic tiedot={this.props.topic[1]}/>
            </tbody>
        </table>);
    }

}

export default TopicList