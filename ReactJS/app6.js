import FunctionalComponent from "./components/FunctionalComponent";
import './App.css';
import {ClassComponent, ClassComponent1} from "./components/ClassComponent"; //importing all the components in a single go in case of multiple components
function App() {
  return (

<div className='app'>
  <h1>Hello I am Ritika Das</h1>
  <FunctionalComponent/> {/*using functional component and showing its reusability*/}
  <FunctionalComponent/>
  <ClassComponent/> {/*using class component and showing its reusability*/}
  <ClassComponent/>
  <ClassComponent1/> {/*another component of same class*/}
  </div>
    );
  }


export default App;
