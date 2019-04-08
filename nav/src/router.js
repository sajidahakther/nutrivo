import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginForm from './components/loginform';
import Entries from './components/entries';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene
          key="login"
          component={LoginForm}
          title="Login"
          initial
        />

        <Scene
          key="entries"
          component={Entries}
          title="Entries"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
