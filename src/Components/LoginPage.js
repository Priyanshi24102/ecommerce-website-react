import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginPage(props) {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  if (
    input.email === loggedUser.email &&
    input.password === loggedUser.password
  ) {
    localStorage.setItem("loggedin", true);
    props.showHeader(true); 
    navigate("/");
  } else {
    alert("Wrong email or password");
  }
  };

  return (
    <div className="loginContainer">
      <div className="loginBox">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <div className="email">
            Email: <br />
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
          </div>
          <div className="password">
            Password: <br />
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={(e) =>
                setInput({ ...input, [e.target.name]: e.target.value })
              }
            />
          </div>
          <button className="loginBtn" type="submit" >
            Login
          </button>
          <p className="loginText">Not Registered? <button className="loginBtn2" onClick={()=>navigate("/register")}>Register</button> </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
