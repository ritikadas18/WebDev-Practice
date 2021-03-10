import React from "react";

const box2 ={
    color:"black",
    backgroundColor:"lightBlue",
    width:"1000px",
    textAlign:"center",
    margin:"20px auto",
    padding:"10px",
    borderRadius:"8px",
};
const ele3={
    color:"red",
    textAlign:"center"
};
const ele4={
    color:"blue",
    backgroundColor:"yellow",
    padding:"15px",
    borderRadius:"8px",
};
export default class ClassComponent extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div style={box2}>
            <h1>This ia a functional component.</h1>
            <h3><span style={ele3}>Created by: </span><span style={ele4}>{this.props.name}</span></h3>
        </div>
        );
    }
}


