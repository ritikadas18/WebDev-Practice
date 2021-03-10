//added class component in our app
//path of your class component should be imported

import FunctionalComponent from "./components/FunctionalComponent";
import './App.css';
import ClassComponent from "./components/ClassComponent";
function App() {
  return (

<div className='app'>
  <h1>Hello I am Ritika Das</h1>
  <FunctionalComponent/> {/*using functional component and showing its reusability*/}
  <FunctionalComponent/>
  <ClassComponent/> {/*using class component and showing its reusability*/}
  <ClassComponent/>
  </div>
    );
  }


export default App;
