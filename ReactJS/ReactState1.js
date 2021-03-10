import React from "react";

export default class ReactState extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            roll:this.props.roll,
            name:this.props.name,
        };
        this.UpdateMe=this.UpdateMe.bind(this);
    };
    UpdateMe(){
        this.setState({
            roll:12,
            name:"ritika das",
        });

    };
    render(){
        return(
            <div>
                <h1>{this.state.roll}</h1>
                <h1>{this.state.name}</h1>
                <button onClick={this.UpdateMe}>Update me</button>
            </div>
        );
    }
}
