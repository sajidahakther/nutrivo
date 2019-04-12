import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import LoginScreen from './loginscreen';
import OverviewScreen from './overviewscreen';
import SearchScreen from './searchscreen';
import EntriesScreen from './entriesscreen';
import GuideScreen from './guidescreen';
import ProfileScreen from './profilescreen';

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{color: selected ? 'red' :'black'}}>{title}</Text>
  );
}

const App = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="loginscreen"
          component={LoginScreen}
          title="Login"
          initial
        />
        <Scene
          key="overviewscreen"
          component={OverviewScreen}
          title="Overview"
        />
      </Scene>
    </Router>
  );
}

export default App;
