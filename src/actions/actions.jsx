// src/actions.js
import axios from 'axios';

export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const SELECT_USER = 'SELECT_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const SORT_USERS = 'SORT_USERS';

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const selectUser = (user) => ({
  type: SELECT_USER,
  payload: user,
});

export const removeUser = (userId) => ({
  type: REMOVE_USER,
  payload: userId,
});

export const sortUsers = (sortBy) => ({
  type: SORT_USERS,
  payload: sortBy,
});

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch(fetchUsersSuccess(response.data));
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };
};
