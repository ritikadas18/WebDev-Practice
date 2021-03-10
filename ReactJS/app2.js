//second react app with some basic features

import logo from './logo.svg';
import './App.css';
const i=true;
const place = "Jhansi";
const beta = "https://2.bp.blogspot.com/-CzH30hf-cXg/X9sdRn_6eMI/AAAAAAAACJU/aFcU5FprQMgOnZ6Bz_yzyV8aB_Gm8y7dgCK4BGAYYCw/s1600/Blog%2BBanner%2B1080x210.jpg";
const link = "https://www.beta-labs.in"; 
const element = (
  <ol> {/*creating ordered list*/}
    <li>HTML5</li>
    <li>CSS3</li>
    <li>JAVASCRIPT</li>
    <li>BOOTSTRAP</li>
    <li>MONGODB</li>
    <li>MONGOOSE</li>
    <li>REACTJS</li>
  </ol>
);
  
function App() {
  return (

<div className='app'>
  <h1>Hii I am from {place}</h1> {/*adding some text*/}
  <h2>I am a girl : {i==1 ? "true":"false"}</h2> {/* Printing through condition*/}
  <a href={link}> {/*adding link to the image*/}
  <img src={beta} alt=""/> {/*adding image*/}
  </a>
  <h3>The topics to be learnt are
    {element} {/*calling the content to be displayed*/}
  </h3>
  </div>
    );
  }


export default App;
