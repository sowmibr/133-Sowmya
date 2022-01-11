import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function MyCalculatorWithHook(props){

  const[first,setFirst] = useState(props.a);
  const[second,setSecond] = useState(props.b);
  const[Add,setAdd] = useState(0);
  const[Sub,setSub] = useState(0);
  const[Mul,setMul] = useState(0);
  const[Div,setDiv] = useState(0);

  const handleAdd = () =>{
    setAdd(parseInt(first)+parseInt(second));
    
  }
  const handleSub = () =>{
    setSub(parseInt(first)-parseInt(second));
    
  }
  const handleMul = () =>{
    setMul(parseInt(first)*parseInt(second));
    
  }
  const handleDiv = () =>{
    setDiv(parseInt(first)/parseInt(second));
    
  }

  return(
    <div>
      <h2>Enter values: </h2>
<p>Addition of {first} and {second} is {Add}</p>
      <button onClick={handleAdd}>Add</button>
      <p>Subtraction of {first} and {second} is {Sub}</p>
      <button onClick={handleSub}>sub</button>
      <p>Multiplication of {first} and {second} is {Mul}</p>
      <button onClick={handleMul}>Mul</button>
      <p>Division of {first} and {second} is {Div}</p>
      <button onClick={handleDiv}>Div</button>
    </div>
  );

}

ReactDOM.render(  
  <MyCalculatorWithHook  /> ,
document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
