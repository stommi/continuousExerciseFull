import React, {Component} from 'react';

class Lomaketiedot extends Component {
    render() {
        return (
            <div>
                <h3>Lomaketiedot</h3>
                <p>id: {this.props.tiedot.id}</p>
                <p>title: {this.props.tiedot.title}</p>
                <p>description: {this.props.tiedot.description}</p>
                <p>additionalSource: {this.props.tiedot.additionalSource}</p>
                <p>complete: {this.props.tiedot.complete}</p>
                <p>creationDate: {this.props.tiedot.creationDate}</p>
                <p>completionDate: {this.props.tiedot.completionDate}</p>
            </div>
        );
    }
}

export default Lomaketiedot;