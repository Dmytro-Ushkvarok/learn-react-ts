import * as React from 'react';
import { AppProps } from './app.props';
import * as styles from './app.scss';
import { register } from '@core';
import { Switch, Route } from 'react-router-dom';

const Auth = register('auth', () => import('@auth'));
const Profile = register('profile', () => import('@profile'));
const Registration = register('registration', () => import('@registration'));

/**
 * Renders App
 */
const App: React.FC<AppProps> = ({}) => (
  <div className={styles.app}>
    <React.Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path='/auth' component={Auth} />
        <Route path='/profile' component={Profile} />
        <Route path='/registration' component={Registration} />
      </Switch>
    </React.Suspense>
  </div>
);

export { App };
