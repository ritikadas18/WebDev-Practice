import React from "react";
//using export with every component in case of multiple component
export class ClassComponent extends React.Component{

    render(){
        return (
        <h1>This is a class component</h1>
        );
    }
}

export class ClassComponent1 extends React.Component{

    render(){
        return (
        <h1>This is my new class component</h1>
        );
    }
}
//export default ClassComponent
//not using the above commented statement as there are multiple components
