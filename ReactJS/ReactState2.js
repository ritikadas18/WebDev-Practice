import React from "react";

export default class ReactState extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            roll:this.props.roll,
            name:this.props.name,
        };
        
    };
    
    render(){
        return(
            <div>
                <h1>{this.state.roll}</h1>
                <h1>{this.state.name}</h1>
                <button onClick={()=>{this.setState({roll:12, name:"rits",});}}>Update me</button>
            </div>
        );
    }
}
