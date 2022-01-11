import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//working with lists in react
//you should always have key while working with list items otherwise error in production strict mode
class CurrencyCalc extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state = {
      a : parseInt(props.a),
      c : "",
      result:0
    };
    this.rupeeHandler = this.rupeeHandler.bind(this);
    this.yenHandler = this. yenHandler.bind(this);
   
  }

  rupeeHandler()
  {
    this.setState(
      {c: " Indian Rupees"}
    );
    this.setState(i =>(
      {result:i.a*75.52}
    ));
    

  }
  yenHandler()
  {
    this.setState(
      {c: " Japanese Yen"}
    );
    this.setState(i =>(
      {result : i.a*120.81}
    ));
    
    
  }

  render()
  {
    return(<div>
     <h1>{this.state.a} Dollar is {this.state.result}{this.state.c}</h1>
      <button onClick={this.rupeeHandler}>Rupees</button><br></br>
    <button onClick={this.yenHandler}>Yen</button> <br></br>
     </div>
    );
  }
}

ReactDOM.render(
  <CurrencyCalc a="10"/>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
