import * as React from 'react';
import { RegistrationProps } from './registration.props';
import * as styles from './registration.scss';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '@store/state';
import { setUsername } from '@store/user';

/**
 * Renders Registration
 */
const Registration: React.FC<RegistrationProps> = () => {
  const user = useSelector((state: State) => state.user);
  console.log(user);
  const dispatch = useDispatch();

  const onUserNameChange = event => {
    dispatch(setUsername(event.target.value));
  };

  return (
    <div className={styles.registration}>
      <form>
        <h1>Create your Mapbox account</h1>
        <h2>Some text will be here</h2>

        <label>Username</label>
        <input
          type='text'
          name='username'
          id='username'
          onChange={onUserNameChange}
        />

        <label>Email</label>
        <input type='text' name='email' id='email' />

        <label>Password</label>
        <input type='text' name='password' id='password' />

        <label>First name</label>
        <input type='text' name='firstName' id='firstName' />

        <label>Last name</label>
        <input type='text' name='lastName' id='lastName' />

        <label>Company</label>
        <input type='text' name='company' id='company' />

        <input type='checkbox' name='agree' id='agree' />
        <label>I agree to terms and conditions...</label>

        <button type='submit'>Get started</button>
      </form>
    </div>
  );
};

export { Registration };
