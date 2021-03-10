import './App.css';
import React from "react";
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
function App() {
    return ( 
      
        <React.Fragment className = "App">

        <FunctionalComponent name="Ritika_18" />
        <ClassComponent name="Ritika_18" />

        </React.Fragment>
     
    );
}
export default App;
