import { UserState } from './state';
import { SET_USERNAME, SET_EMAIL } from './actions';

function userReducer(state: UserState, action) {
  switch (action.type) {
    case SET_USERNAME:
      return {
        ...state,
        username: action.payload.username
      };

    case SET_EMAIL:
      return {
        ...state,
        email: action.payload.email
      };

    default:
      return state;
      break;
  }
}

export { userReducer };
