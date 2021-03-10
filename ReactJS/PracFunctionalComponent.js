import React from "react";
import reactDom from "react-dom";

const box1 ={
    color:"black",
    backgroundColor:"pink",
    width:"1000px",
    textAlign:"center",
    margin:"20px auto",
    padding:"10px",
    borderRadius:"8px",
    
};
const ele1={
    color:"red",
    textAlign:"center"
};
const ele2={
    color:"blue",
    backgroundColor:"yellow",
    padding:"15px",
    borderRadius:"8px",
};
function FunctionalComponent(props){
    return(
        <div style={box1}>
            <h1>This ia a functional component.</h1>
            <h3><span style={ele1}>Created by: </span><span style={ele2}>{props.name}</span></h3>
        </div>
    );
}

export default FunctionalComponent
