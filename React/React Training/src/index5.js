import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Cal(props)
{
 let results = parseInt(props.a) + parseInt(props.b);
 let result1 = parseInt(props.a) * parseInt(props.b);
 let result2 = parseInt(props.a) - parseInt(props.b);
 let result4 = parseInt(props.a) / parseInt(props.b);
  return <h1> addition of {props.a} and {props.b} is {results},<br></br> multiplication of {props.a} and {props.b} is {result1},<br></br> 
  substraction of {props.a} and {props.b} is {result2},<br></br>
  division of {props.a} and {props.b} is {result2} </h1>
}




ReactDOM.render(
 
 < Cal a="30"  b="15"/>,

  
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
