import {
    FETCH_USERS_SUCCESS,
    SELECT_USER,
    REMOVE_USER,
    SORT_USERS,
  } from '../actions/actions';
  
  const initialState = {
    users: [],
    selectedUsers: [],
    sortBy: 'ASC',
  };
  
  export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_SUCCESS:
        return {
          ...state, 
          users: action.payload,
        };
      case SELECT_USER:
        return {
          ...state,
          selectedUsers: [...state.selectedUsers, action.payload],
          users: state.users.filter((user) => user.id !== action.payload.id),
        };
      case REMOVE_USER:
        return {
          ...state,
          selectedUsers: state.selectedUsers.filter(
            (user) => user.id !== action.payload
          ),
          users: [...state.users, state.selectedUsers.find((user) => user.id === action.payload)],
        };
      case SORT_USERS:
        const sortedUsers = [...state.selectedUsers].sort((a, b) => {
          if (state.sortBy === 'ASC') {
            return a.company.name.localeCompare(b.company.name);
          } else {
            return b.company.name.localeCompare(a.company.name);
          }
        });
        return {
          ...state,
          selectedUsers: sortedUsers,
          sortBy: action.payload,
        };
      default:
        return state;
    }
  };
  export default reducer;
  