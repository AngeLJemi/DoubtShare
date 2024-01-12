import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Nav = () => {
  const navigate = useNavigate();
  const handleLogout =  async() => {
    const response = await axios.get("http://localhost:5000/logout")
    if(response.data === "Success"){
      navigate('/home');
      navigate(0);   
    }
  }
  return (
    <div className="nav-container">
    <div className="nav">
        <div className="logo-container">
        <div className="logo"></div>
        </div>
        <p>Doubt share</p>
        {/* <h3>Doubt Share</h3> */}
        <div className="pages">
            <Link to='/home'>Home</Link>
            <Link to='/create'>Raise Doubt</Link>
            <Link to='/history'>Resolved</Link>
            <Link to='/profile'>Profile</Link>
            <button onClick={handleLogout} className="logout-link">Logout</button>
            {/* {
          user.username ? 
          <div>
        <input type="button" onClick={handleLogout} value="Logout" className='btn-logout'/>
        </div>
         : 
         <div>
          <h5><Link to='/login' className='link'>Login</Link></h5>
        </div>} */}
        </div>
    </div>
    </div>
  )
}

export default Nav