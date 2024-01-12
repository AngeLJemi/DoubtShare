import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './view.css'; // Import the CSS file
import Nav from './Nav';

const View = () => {
  const { id } = useParams();
  const users = useSelector(state => state.users.users);
  const user = users.find(u => u.id.toString() === id);

  return (
    <div>
    <Nav/>
    <div className="w-container">
    <div className="container">
      <h1 className="header">Query View</h1>
      {user ? (
        <div className="userDetails">
          <p>ID: {user.id}</p>
          <p>Subject: {user.sub}</p>
          <p>Description: {user.desc}</p>
          <img
                      src={`http://localhost:5000/images/${user.file}`}
                      style={{ height: '100px', width: '120px', objectFit: 'cover', borderRadius: '10px' }}
                      alt={user.title}
                    />
                    <p>Date : {user.date}</p>
        </div>
      ) : (
        <p className="notFound">User not found</p>
      )}
    </div>
    </div>
    </div>
  );
};

export default View;
