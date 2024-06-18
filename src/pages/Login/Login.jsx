import React, { useState } from 'react';
import "./Login.css";
import logo from './../../assets/logo.png';
import netflix_spinner from "./../../assets/netflix_spinner.gif";

import { login, signup } from '../../firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [formval, setFormval] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  function handleChange(field, val){
    const updatedForm = {...formval, [field]: val};
    setFormval(updatedForm);
  }

  async function handleSubmit(event){
    event.preventDefault();
    setLoading(true);
    if(signState === "Sign In"){
      await login(formval.email, formval.password);
    } else{
      await signup(formval.name, formval.email, formval.password);
    }
    setLoading(false);
  }

  return (
    loading ? <div className='login-spinner'>
      <img src={netflix_spinner} alt="loading icon" />
    </div> : 
    <div className="login">
      <img src={logo} alt="logon logo" className='login-logo' />
      <div className='login-form'>
        <h1>{signState}</h1>
        <form>
          { signState === 'Sign Up' && <input type="text" value={formval.name} onChange={(e)=> handleChange('name', e.target.value)} placeholder='Your Name'/>}
          <input type="email" value={formval.email} onChange={(e)=> handleChange('email', e.target.value)}  placeholder='Email' />
          <input type="password" value={formval.password} onChange={(e)=> handleChange('password', e.target.value)}  placeholder='Password' />
          <button className='' type="submit" onClick={handleSubmit}>{signState}</button>
          <div className='form-help'>
            <div className='remember'>
              <input type="checkbox" />
              <label htmlFor=''>Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className='form-switch'>
          {signState === 'Sign In' && <p>New to Netflix? <span onClick={()=>setSignState('Sign Up')}>Sign Up Now</span></p>}
          {signState === 'Sign Up' && <p>ALready have account? <span onClick={()=>setSignState('Sign In')}>Sign In Now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login
