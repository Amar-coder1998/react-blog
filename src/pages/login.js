import React, { form, useState} from "react";
import ReactDOM from 'react-dom';

import { useDispatch, useSelector } from 'react-redux';
import { DisplayScreen } from '../redux/actions/actions';

const Login = () => {
  const dispatch = useDispatch();
  const allStates = useSelector((state) => state);
  const [email_field, setEmail] = useState("");
  const [pass_field, setPassword] = useState("");

  const loginUser= (e) => {
    e.preventDefault();
    console.log("L-EMAIL", email_field, "L-PASS", pass_field);
    if(allStates.email===email_field && allStates.pass===pass_field && allStates.userexists)
    {
      setEmail("");
      setPassword("");
      alert("You have been logged in successfully");
      dispatch(DisplayScreen(4));
    }
    else
      alert("Incorrect Credentials or User Does Not Exists, please try again!!");
  }

  return(
      <div style={{ flex:1, display:'flex', flexDirection:'column', textAlign:"center"}}>
        <text style={{fontSize:"30px", marginBottom:48}}> Login Page</text>
        <form>
        {allStates.userexists
          ?
            <div style={{backgroundColor:'green', color:'white', padding:4}}>Kindly use the same creds to login.</div>
          :
            null
        }
          <div style={{flex:1, display:'flex', flexDirection:'row'}}>
            <input
              type="text" 
              placeholder="Email ID"
              onChange={e=>setEmail(e.target.value)}
              required
              style={{flex:1, display:'flex', margin:8, padding:8}}
            />
          </div>
          <div style={{flex:1, display:'flex', flexDirection:'row'}}>
            <input
              type="text" 
              placeholder="Password"
              onChange={e=>setPassword(e.target.value)}
              required
              style={{flex:1, display:'flex', margin:8, padding:8}}
            />
          </div>
          <button style={{margin:8, padding:8 }}
          onClick={(e) => {
                loginUser(e)
              }} >Login</button>
        </form>
    </div>
  );
 };

export default Login;