import FunctionalComponent from "./components/FunctionalComponent";
import './App.css';
import './components/comp.css';
import {ClassComponent, ClassComponent1} from "./components/ClassComponent";
import MyComponent from "./components/MyComponent";
import MyComponent2 from "./components/MyComponent2";


function App() {
  return (

<div className='app'>
  
  <MyComponent2 title="Declarative" 
  content="React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.
  Declarative views make your code more predictable and easier to debug."/> 
  <MyComponent2 title="Component-Based"
  content="Build encapsulated components that manage their own state, then compose them to make complex UIs.
  Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app and keep state out of the DOM."/>
  <MyComponent2 title="Learn Once, Write Anywhere" 
  content="We don’t make assumptions about the rest of your technology stack, so you can develop new features in React without rewriting existing code.
  React can also render on the server using Node and power mobile apps using React Native."/>
  </div>
    );
  }


export default App;
