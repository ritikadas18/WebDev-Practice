import React from "react";

export default class ReactState extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            roll:this.props.roll,
            name:this.props.name,
        };
    };
    UpdateMe=()=>{
        this.setState({
            roll:10,
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
