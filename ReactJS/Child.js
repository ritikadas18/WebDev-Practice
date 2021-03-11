import React from "react";

export default class Child extends React.Component {
    constructor(props){
        super(props);

    }
    componentWillReceiveProps(){
        console.log("componentWillReceiveProps in child called")
    }
    render(){
        console.log("render called in child");
        return(
            <div>
                <h1>{this.props.data}</h1>
            </div>
        );
    }
}
