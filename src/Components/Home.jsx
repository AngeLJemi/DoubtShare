import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Components/Nav';
import '../App.css';

const Home = () => {
  return (
    <div>
      <Nav />
      <div className='wel-container'>
        <div className='wwl-container'>
          <h1>Welcome to the Home Page</h1>
          <p>Explore our platform to resolve your doubts!</p>

          {/* Registration and Login Links */}
          <div>
            <p>User Registration/Login Interface and API:
Design a user-friendly registration/login interface for both Students and Tutors.
Include necessary fields such as name, email, password, etc.
Implement APIs for user registration/login with Authentication (Token Based)
</p>
          </div>

          {/* User Dashboard Link */}
          <div>
            <p>User Dashboard Interface:
Create an intuitive dashboard for Students with easy navigation.
Display essential information like ongoing sessions, doubt history, etc.
</p>
          </div>

          {/* Doubt History Section */}
          <div>
            <h2>Doubt History</h2>
           <p> Create a section for students to view and manage their doubt history.
Implement APIs to retrieve and display doubt history for students.
Include options for sorting and filtering.</p>

          </div>

          {/* Doubt Creation Form */}
          <div>
            <h2>Create a Doubt</h2>
            <p>Design a simple doubt creation form for students with options for doubt subject types. Ensure clarity in the form for a seamless doubt creation process.
Develop an API endpoint for students to create doubt requests.
</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
