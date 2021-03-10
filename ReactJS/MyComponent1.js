import React from "react";
import './comp.css';
function MyComponent(props){
    return(
        <div className='box'>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        </div>
    );
}

export default MyComponent
