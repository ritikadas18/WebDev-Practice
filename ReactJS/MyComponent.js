import React from "react";

function MyComponent(props){
    return(
        <div className='box'>
        <h1>{props.title}</h1>
        <p>{props.content}</p>
        </div>
    );
}

export default MyComponent
