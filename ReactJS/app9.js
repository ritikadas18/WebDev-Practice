import FunctionalComponent from "./components/FunctionalComponent";
import './App.css';
import './components/comp.css';
import {ClassComponent, ClassComponent1} from "./components/ClassComponent";
import MyComponent from "./components/MyComponent";
import MyComponent2 from "./components/MyComponent2";
import ReactState from "./components/ReactState";

function App() {
  return (

<div className='app'>
  
  <ReactState roll="1" name="pranshu" />
  </div>
    );
  }


export default App;
