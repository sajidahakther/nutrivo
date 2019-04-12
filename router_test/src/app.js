import React, { } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { Text } from 'react-native';

//Routes
import LoginScreen from './loginscreen';
import OverviewScreen from './overviewscreen';
import SearchScreen from './searchscreen';
import EntriesScreen from './entriesscreen';

// import CaloriesModal from './modals/calories';
// import GuideScreen from './guidescreen';
// import ProfileScreen from './profilescreen';

const TabIcon = ({ selected, title }) => {
  return (
    <Text style={{ color: selected ? 'red' : 'black' }}>{ title }</Text>
  );
};

const App = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
      <Scene
        key="loginscreen"
        component={LoginScreen}
        title="Login"
        initial
      />
        <Scene
          key="tabbar"
          tabs
          tabBarStyle={{ backgroundColor: '#FFFFFF' }}
        >
          {/* OVERVIEW SCREEN */}
          <Scene key="overview" title="Overview" icon={TabIcon}>
            <Scene
              key="overviewscreen"
              component={OverviewScreen}
              title="Overview"
              initial
            />
            {/* caloric intake modal */}
            <Scene
              key="entriesscreen"
              component={EntriesScreen}
              title="Entries"
            />
            {/* macros */}
            {/* nutritional intake */}
          </Scene>

          {/* SEARCH SCREEN */}
          <Scene key="search" title="Search" icon={TabIcon}>
            <Scene
              key="searchscreen"
              component={SearchScreen}
              title="Search"
            />
          </Scene>

          {/* ENTRIES SCREEN */}
          <Scene key="entries" title="Entries" icon={TabIcon}>
            <Scene
              key="entriesscreen"
              component={EntriesScreen}
              title="Entries"
            />
          </Scene>

        </Scene>

      </Scene>
    </Router>
  );
};

export default App;
