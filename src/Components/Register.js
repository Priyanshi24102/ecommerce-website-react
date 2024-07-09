import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

function Register() {
    const [input,setInput]=useState({
        name:"",
        email:"",
        password:""
    })
    const navigate= useNavigate()
  


  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem("user",JSON.stringify(input));
    navigate("/login")
  };
  return (
    <div className="loginContainer">
    <div className="loginBox">
      <h1>Create an account</h1>
      <form onSubmit={handleLogin}>
      <div className="email">
          Name: <br />
          <input type="text" name='name' value={input.name} onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} />
          
        </div>
        <div className="email">
          Email: <br />
          <input type="email"  name="email" value={input.email} onChange={(e)=>setInput({...input, [e.target.name]: e.target.value})} />
          
        </div>
        <div className="password">
          Password: <br />
          <input type="password" name='password' value={input.password} onChange={(e) => setInput({...input, [e.target.name]: e.target.value})} />
        </div>
        <button className="loginBtn" type="submit">Login</button>
        <p className="loginText">Already Registered? <button className="loginBtn2" onClick={()=>navigate("/login")}>Login</button> </p>
      </form>
    </div>
  </div>
  )
}

export default Register
