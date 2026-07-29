import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/register.css";


function Register(){

const navigate = useNavigate();


const [form,setForm]=useState({

name:"",
email:"",
password:""

});



const handleSubmit=(e)=>{

e.preventDefault();


localStorage.setItem(
"user",
JSON.stringify(form)
);


alert("Registration Successful");


navigate("/login");


};



return(

<div className="auth-container">

<h1>Create Account</h1>


<form onSubmit={handleSubmit}>


<input
placeholder="Name"
onChange={(e)=>
setForm({...form,name:e.target.value})
}
/>


<input
placeholder="Email"
type="email"
onChange={(e)=>
setForm({...form,email:e.target.value})
}
/>


<input
placeholder="Password"
type="password"
onChange={(e)=>
setForm({...form,password:e.target.value})
}
/>



<button>
Register
</button>


</form>


</div>

);

}


export default Register;