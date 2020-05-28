import { app } from './reducer';
import { combineReducers } from 'redux';
import { router } from './router';
import { AuthState } from '@auth';
import { UserState } from './user';

/**
 * App state
 */
type State = {
  router: ReturnType<typeof router>;
  auth: AuthState;
  user: UserState;
};

export { State };
