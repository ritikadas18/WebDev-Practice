import React from "react";
import Child from "./Child";

export default class LifeCycleHooks extends React.Component{
    constructor(){
        super();
        this.state={
            data:null,
        };
        console.log("constructor Called");
    }
    componentDidMount(){
        console.log("componentDidMount called");
        alert("component mounted");
    }
    componentDidUpdate(){
        console.log("componentDidUpdate called");
        alert("component updated");
    }
    render(){
        console.log("render called");
        return(
            <div>
                <h1>Life Cycle Hooks</h1>
                <button onClick={()=>{
                    this.setState({data:"updated"})
                }}>Call Me</button>
                <Child data={this.state.data}/>
            </div>);
    }

}
