import React, { form } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { DisplayScreen } from '../redux/actions/actions';

const Forgetpassword=() =>{

const dispatch = useDispatch();
  const allStates = useSelector((state) => state);

   const changeScreen= (screenNumber) => {
    dispatch(DisplayScreen(screenNumber));
  }

  return(
    <div style={{ flex:1, display:'flex', flexDirection:'column', textAlign:"center"}}>
      <text style={{fontSize:"30px", marginBottom:48}}> Forgot Password Page</text>
      <form>
        <div style={{flex:1, display:'flex', flexDirection:'row'}}>
          <input
            type="email" 
            placeholder="Email-ID" 
            style={{flex:1, display:'flex', margin:8, padding:8}}
          />
        </div>
        <div style={{flex:1, display:'flex', flexDirection:'row'}}>
          <input
            type="password" 
            placeholder="New Password" 
            style={{flex:1, display:'flex', margin:8, padding:8}}
          />
        </div>
        <div style={{flex:1, display:'flex', flexDirection:'row'}}>
          <input
            type="password" 
            placeholder="Re-enter Password" 
            style={{flex:1, display:'flex', margin:8, padding:8}}
          />
        </div>
        <button style={{margin:8, padding:8}}
        onClick={() => {
                changeScreen(6)
              }}>Forgot Password</button>
    </form>
  </div>
  );
};

export default Forgetpassword;