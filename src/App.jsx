// src/App.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './actions/actions';
import UserDropdown from './UserDropdown';
import UserCard from './UserCard';

const App = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const selectedUsers = useSelector((state) => state.selectedUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className="container">
      <h1>User Selection App</h1>
      <div className="dropdown-container">
        <h2>Select a User</h2>
        <UserDropdown users={users} />
      </div>
      <div className="selected-users-container">
        <h2>Selected Users</h2>
        <div className="user-cards">
          {selectedUsers.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
