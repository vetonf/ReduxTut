
import React from 'react';
import { useDispatch } from 'react-redux';
import { removeUser } from './actions/actions';

const UserCard = ({ user }) => {
  const dispatch = useDispatch();

  const handleRemoveClick = () => {
    dispatch(removeUser(user.id));
  };

  const handleWebsiteClick = () => {
    window.open(user.website, '_blank');
  };

  return (
    <div className="user-card">
      <div>
        <h3>{user.name}</h3>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Address:</strong> {user.address.street}, {user.address.city}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Company:</strong> {user.company.name}</p>
        <p>
          <strong>Website:</strong>{' '}
          <a href={user.website} target="_blank" rel="noopener noreferrer" onClick={handleWebsiteClick}>
            {user.website}
          </a>
        </p>
      </div>
      <button onClick={handleRemoveClick}>Remove</button>
    </div>
  );
};

export default UserCard;
