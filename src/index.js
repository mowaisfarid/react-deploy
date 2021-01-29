import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

function Room(){
const [value,setvalue]=useState(true)

// function abc(){
//   setvalue(false)

// }

function abc(){
  setvalue((preVal)=>(!preVal))

}

return(
  <div>
    <div> the room is {(value===true)? "Bright":"Dark"} </div>
    <button onClick={abc}>Change</button>
  </div>
)
}

ReactDOM.render(<Room/>),document.getElementById('root')

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
