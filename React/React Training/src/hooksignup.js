import ReactDOM from 'react-dom';
import './index.css';
import React, { useState } from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

//working with forms

function Signup(props) {

  const[fname,setfname] = useState("");
  const[lname,setlname] = useState("");
  const[email,setemail] = useState("");
  const[pwd,setpwd] = useState("");
  const[bday,setbday] = useState("");
  const[gen,setgender] = useState("");
 
  const changeHandler =(event) =>{
    var val=event.target.value;
      if(event.target.name==="fname")
      {
        setfname(val);
      }else if (event.target.name==="lname"){
        setlname(val);
      }else if (event.target.name==="email"){
        setemail(val);
      }else if (event.target.name==="pwd"){
          setpwd(val);
      }else if (event.target.name==="D.O.B"){
        setbday(val);
    }else if (event.target.name==="gender"){
      setgender(val);
  }

  }

  const handleSubmit = () =>{
   
    alert(fname+" "+lname+" "+email+" "+pwd+" "+bday+" "+gen)
  }
        return (<div className="App auth-wrapper auth-inner">
        
         
            <form onSubmit={handleSubmit} >
                <h3>Sign Up</h3>
                
                <div className="form-group">
                    <label>First name</label>
                    <input name="fname" type="text" onChange={changeHandler}  className="form-control" placeholder="First Name"  />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input name="lname" type="text" onChange={changeHandler}  className="form-control" placeholder="Last Name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input name="email" type="email"  onChange={changeHandler} className="form-control" placeholder="Email"  />
                </div>             
                 
                <div className="form-group">
                    <label>Password</label>
                    <input name="pwd" type="password"  onChange={changeHandler} className="form-control" placeholder="Password"   />
                </div>

                <div className="form-group">
                    <label >Date Of Birth:</label><br/>
                    <input name="Date of Birth" type="date"  onChange={changeHandler} className="form-control"  className='mar10' />
                </div>

                <div className="form-group mar"  onChange={changeHandler}>
                                <label >Gender</label><br/>
                <select name="gender" className='mar10'>
                  <option value="none" selected>Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">other</option>
                </select></div>

                <button type="submit" className="btn btn-primary btn-block pad dbutton">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">Sign in?</a>
                </p>
            </form></div>
        );
    
}

ReactDOM.render(
  <React.StrictMode>
    <Signup />
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
