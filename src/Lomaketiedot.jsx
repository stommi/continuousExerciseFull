import React, {Component} from 'react';

class Lomaketiedot extends Component {
    render() {
        return (
            <table>
                <th>id</th>
                <th>Otsikko</th>
                <th>Kuvaus</th>
                <th>Lähde</th>
                <th>Tila</th>
                <th>Luontipäivä</th>
                <th>Valmistumispäivä</th>
                <tbody>
                <td>{this.props.tiedot.id}</td>
                <td>{this.props.tiedot.title}</td>
                <td>{this.props.tiedot.description}</td>
                <td>{this.props.tiedot.additionalSource}</td>
                <td>{this.props.tiedot.complete}</td>
                <td>{this.props.tiedot.creationDate}</td>
                <td>{this.props.tiedot.completionDate}</td>
                </tbody>
            </table>
        );
    }
}

export default Lomaketiedot;