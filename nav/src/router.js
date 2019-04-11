import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/loginform';
import Entries from './components/entries';
import AddEntry from './components/addentry';
import EditEntry from './components/editentry';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>

        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            title="Login"
            initial // scene that loads first when app is run
          />
        </Scene>

        <Scene key="main">
          <Scene
            // callback function to 'Add Entry'
            onRight={() => Actions.addentry()}
            rightTitle="Add"
            key="entries"
            component={Entries}
            title="Entries"
            initial
          />

          <Scene
            key="addentry"
            component={AddEntry}
            title="Add Food"
          />

          <Scene
            key="editentry"
            component={EditEntry}
            title="Edit Entry"
          />
        </Scene>

      </Scene>
    </Router>
  );
};

export default RouterComponent;
