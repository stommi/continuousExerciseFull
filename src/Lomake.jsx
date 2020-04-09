import React, {Component} from 'react';

class Lomake extends Component {
    state = {id: "", title: "", description: "", additionalSource: "", complete: "", creationDate: "", completionDate: ""};

    jokuMuuttunut = (e) => {
        const olio = {};
        olio[e.target.name] = e.target.value;
        this.setState(olio);
    };

    lahetaLomake = () => {
        console.log("klikattiin");
        this.props.viittaus(this.state)
    };

    render() {
        return (
            <div>
                <input name= "id" placeholder={"id"} value={this.state.id} onChange={this.jokuMuuttunut}/><br/>
                <input name= "title" placeholder={"title"} value={this.state.title} onChange={this.jokuMuuttunut}/><br/>
                <input name= "description" placeholder={"description"} value={this.state.description} onChange={this.jokuMuuttunut}/><br/>
                <input name= "additionalSource" placeholder={"additionalSource"} value={this.state.additionalSource} onChange={this.jokuMuuttunut}/><br/>
                <input name= "complete" placeholder={"complete"} value={this.state.complete} onChange={this.jokuMuuttunut}/><br/>
                <input name= "creationDate" placeholder={"creationDate"} value={this.state.creationDate} onChange={this.jokuMuuttunut}/><br/>
                <input name= "completionDate" placeholder={"completionDate"} value={this.state.completionDate} onChange={this.jokuMuuttunut}/><br/>
                <input type="button" defaultValue="Luo" onClick={this.lahetaLomake}/>
            </div>
        );
    }
}

export default Lomake;