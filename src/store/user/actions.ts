const SET_USERNAME = 'SET_USERNAME';

const setUsername = (username: string) => ({
  type: SET_USERNAME,
  payload: {
    username
  }
});

const SET_EMAIL = 'SET_EMAIL';

const setEmail = (email: string) => ({
  type: SET_EMAIL,
  payload: {
    email
  }
});

export { SET_USERNAME, setUsername, SET_EMAIL, setEmail };
