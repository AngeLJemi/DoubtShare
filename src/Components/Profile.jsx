import React from 'react';
import './Profile.css'; // Import your stylesheet for additional styling
import Nav from './Nav';
import '../App.css';
import { useSelector } from 'react-redux';

const Profile = () => {
    const users = useSelector(state => state.users.queries);
   console.log(users)
    return (
        <div >
            <Nav />
            <div className="profile-container">
                <h2>User Profile</h2>
                <div className="profile-info">
                    <table>
                        <tbody>
                            {users.map((user) => (
                                <React.Fragment key={user.id}>
                                    <tr>
                                        <th>User Name:</th>
                                        <td>{user.username}</td>
                                    </tr>
                                    <tr>
                                        <th>User Class:</th>
                                        <td>{user.class}</td>
                                    </tr>
                                    <tr>
                                        <th>Email:</th>
                                        <td>{user.email}</td>
                                    </tr>
                                    <tr>
                                        <th>Contact:</th>
                                        <td>{user.contact}</td>
                                    </tr>
                                   
                                    
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Profile;
