import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//working with lists in react

const mylist = [1,2,3,4,5];
const listelemnts = mylist.map( (i) =>

  <li key={i.toString()}>
    {i}
  </li>

);

ReactDOM.render(  
  <ul>{listelemnts}</ul> ,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
