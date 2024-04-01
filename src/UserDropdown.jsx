import React from 'react';
import { useDispatch } from 'react-redux';
import { selectUser } from './actions/actions';

const UserDropdown = ({ users }) => {
  const dispatch = useDispatch();

  const handleSelectChange = (e) => {
    const selectedUserId = parseInt(e.target.value);
    const selectedUser = users.find((user) => user.id === selectedUserId);
    dispatch(selectUser(selectedUser));
  };

  return (
    <select onChange={handleSelectChange}>
      <option value="">Select User</option>
      {users.map((user) => (
        <option key={user.id} value={user.id}>
          {user.name}
        </option>
      ))}
    </select>
  );
};

export default UserDropdown;
