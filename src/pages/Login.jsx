import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import "../styles/login.css";


function Login(){


const {login}=useContext(AuthContext);

const navigate=useNavigate();


const [email,setEmail]=useState("");
const [password,setPassword]=useState("");



const handleLogin=(e)=>{

e.preventDefault();


const savedUser =
JSON.parse(localStorage.getItem("user"));



if(
savedUser &&
savedUser.email===email &&
savedUser.password===password
){

login(savedUser);

alert("Login Successful");

navigate("/");

}

else{

alert("Invalid Credentials");

}


};



return(

<div className="auth-container">


<h1>Login</h1>


<form onSubmit={handleLogin}>


<input
type="email"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>


<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>


<button>
Login
</button>


</form>


</div>

);


}


export default Login;