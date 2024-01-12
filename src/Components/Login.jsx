import React, { useState } from 'react'
import {Link,useNavigate} from 'react-router-dom'
import axios from 'axios';

const Login = () => {
  const[email,setEmail] = useState();
  const[password,setPassword] = useState();
  const[type,setType] = useState('Student');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/login",
        { email, password },
        { withCredentials: true }
      );
      window.location.reload();
      if (res.data === "Login Successfully") {
        navigate('/home');
      }
    } catch (error) {
      console.error("Axios error:", error.message);
    }
  }
  
  return (
    <div className='w-container'>
      <div className="container">
      <form action="" onSubmit={handleSubmit}>
      <div className="zero">
      <button onClick={() => setType('Student')}> Student</button><p>&#128072;</p>
      <p>&#128073; </p><button onClick={() => setType('Teacher')}>Teacher</button>
      </div>
        <div className="first">
          <input type="text" placeholder='EmailID' onChange={(e)=>{setEmail(e.target.value)}}/>
          <input type="password" placeholder='Password' onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <div className="second">
          <button>Login</button>
        </div>
        <div className="third">
          <p>Not yet register?<Link to="/register">Register here !</Link></p>
        </div>
        </form>
      </div>
    </div>
  )
}

export default Login