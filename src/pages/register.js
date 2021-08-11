import React, { form, useState } from "react";

import { useDispatch, useSelector } from 'react-redux';
import { DisplayScreen, RegisterUser } from '../redux/actions/actions';
import Login from './login'

const Register=() =>{

const dispatch = useDispatch();
  const allStates = useSelector((state) => state);
  const [email_field, setEmail] = useState("");
  const [pass_field, setPassword] = useState("");

  const registerUser= (e) => {
    e.preventDefault();
    console.log("EMAIL", email_field, "PASS", pass_field);
    if(!email_field || !pass_field)
    {
      alert("Email/Password can not be empty");
      return;
    }
    dispatch(RegisterUser({email:email_field, pass:pass_field, user:1}));
    setEmail("");
    setPassword("");
    alert("Your account has been created successfully");
    dispatch(DisplayScreen(1));
    // {
    //   email:email_field,
    //   pass:pass_field
    // }
  }  

  return(
    <div style={{ flex:1, display:'flex', flexDirection:'column', textAlign:"center"}}>
      <text style={{fontSize:"30px", marginBottom:48}}> Registration Page</text>
      <form>
        <div style={{flex:1, display:'flex', flexDirection:'row'}}>
          <input
            type="text" 
            placeholder="Firstname" 
            style={{flex:1, display:'flex', margin:8, padding:8,}}
          />
        </div>
        <div style={{flex:1, display:'flex', flexDirection:'row'}}>
          <input
            type="text" 
            placeholder="Lastname" 
            style={{flex:1, display:'flex', margin:8, padding:8}}
          />
        </div>
        <div style={{flex:1, display:'flex', flexDirection:'row'}}>
          <input
            type="email" 
            placeholder="Email ID" 
            required
            style={{flex:1, display:'flex', margin:8, padding:8}}
            onChange={e=>setEmail(e.target.value)}
            value={email_field}
          />
        </div>
        <div style={{flex:1, display:'flex', flexDirection:'row'}}>
          <input
            type="password" 
            placeholder="Password" 
            required
            style={{flex:1, display:'flex', margin:8, padding:8}}
            onChange={e=>setPassword(e.target.value)}
            value={pass_field}
          />
        </div>
        <div style={{flex:1, display:'flex', flexDirection:'row'}}>
          <input
            type="password" 
            placeholder="Confirm Password" 
            style={{flex:1, display:'flex', margin:8, padding:8}}
          />
        </div>
        <button style={{margin:8, padding:8}}
         onClick={(e) => {
                registerUser(e);
              }}>Registration</button>
      </form>
    </div>
  );
};
export default Register;