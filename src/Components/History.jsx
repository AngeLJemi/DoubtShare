import React, { useState } from 'react';
import Nav from './Nav';
import './Home.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom"
import axios from 'axios';

const History = () => {
  const users = useSelector(state => state.users.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [filterValues, setFilterValues] = useState({
    id: '',
    sub: '',
    desc: '',
    date: '',
    // Add more filter values for other columns if needed
  });

  const handleFilterChange = (column, value) => {
    setFilterValues(prevValues => ({
      ...prevValues,
      [column]: value,
    }));
  };

  const handleEdit = user => {
    // Perform actions for editing with the user data
    console.log(user);
    navigate(`/view/${user.id}`);
  };

  const filteredUsers = users.filter(user => {
    return (
      user.id.includes(filterValues.id) &&
      user.sub.toLowerCase().includes(filterValues.sub.toLowerCase()) &&
      user.desc.toLowerCase().includes(filterValues.desc.toLowerCase()) &&
      user.date.includes(filterValues.date)
      // Add more filtering conditions for other columns if needed
    );
  });
  const handleDelete = async (id) => {
    const response = await axios.delete(`http://localhost:5000/deleteQuery/${id}`)
    // console.log(response);
    // dispatch(deleteuser({id}))
    navigate('/history')
 }
  return (
    <div>
      <Nav />
      <div className="history">
        <p>Resolved Doubts</p>
        <div className="h-container">
          <table className="history-table">
            <thead>
              <tr>
                <th>
                  <input
                    type="text"
                    placeholder="Filter ID"
                    value={filterValues.id}
                    className="filter-input"
                    onChange={e => handleFilterChange('id', e.target.value)}
                  />
                </th>
                <th>
                  <input
                    type="text"
                    placeholder="Filter Subject"
                    value={filterValues.sub}
                    className="filter-input"
                    onChange={e => handleFilterChange('sub', e.target.value)}
                  />
                </th>
                <th>
                  <input
                    type="text"
                    placeholder="Filter Description"
                    value={filterValues.desc}
                    className="filter-input"
                    onChange={e => handleFilterChange('desc', e.target.value)}
                  />
                </th>
                <th>Image</th>
                <th>
                  <input
                    type="text"
                    placeholder="Filter Date"
                    value={filterValues.date}
                    className="filter-input"
                    onChange={e => handleFilterChange('date', e.target.value)}
                  />
                </th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
            {filteredUsers.map(user => (
              <tr key={user.id}>
                <td onClick={() => handleEdit(user)}>
                  {user.id}
                </td>
                <td onClick={() => handleEdit(user)}>
                  {user.sub}
                </td>
                <td onClick={() => handleEdit(user)}>
                  {user.desc}
                </td>
                <td onClick={() => handleEdit(user)}>
                  <img
                    src={`http://localhost:5000/images/${user.file}`}
                    style={{ height: '60px', width: '120px', objectFit: 'cover', borderRadius: '10px' }}
                    alt={user.title}
                  />
                </td>
                <td onClick={() => handleEdit(user)}>
                  {user.date}
                </td>
                <td>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default History;
