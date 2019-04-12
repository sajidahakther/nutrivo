import React, { } from 'react';
import { View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

//Routes
import LoginScreen from './loginscreen';
import OverviewScreen from './overviewscreen';
import SearchScreen from './searchscreen';
import EntriesScreen from './entriesscreen';
import GuideScreen from './guidescreen';
import ProfileScreen from './profilescreen';

const TabIcon = ({ focused, iconName }) => {
  return (
    <View>
    <Icon
      style={{ color: focused ? 'red' : 'black',
      fontSize: 18,
      textAlign: 'center' }}
      name={iconName}
    />
    {/*<Text style={{ color: selected ? 'red' : 'black' }}> {title} </Text>*/}
    </View>
  );
};

const App = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>

      {/* LOGIN SCREEN */}
      <Scene
        key="loginscreen"
        component={LoginScreen}
        title="Login"
        initial
      />

        {/* BOTTOM NAVIGATION */}
        <Scene
          key="tabbar"
          tabs
          activeTintColor='red'
          tabBarStyle={{ backgroundColor: '#FFFFFF' }}
        >
          {/* NUTRITION GUIDE SCREEN */}
          <Scene
            key="guide"
            title="Guide"
            iconName="leanpub"
            icon={TabIcon}
            color='#000000'
          >
            <Scene
              key="guidescreen"
              component={GuideScreen}
              title="Nutrition Guide"
            />
          </Scene>

          {/* SEARCH SCREEN */}
          <Scene
            key="search"
            title="Search"
            iconName="search"
            icon={TabIcon}
          >
            <Scene
              key="searchscreen"
              component={SearchScreen}
              title="Search"
            />
          </Scene>

          {/* ENTRIES SCREEN */}
          <Scene
            key="entries"
            title="Entries"
            iconName="plus"
            icon={TabIcon}
          >
            <Scene
              key="entriesscreen"
              component={EntriesScreen}
              title="Entries"
            />
          </Scene>

          {/* OVERVIEW SCREEN */}
          <Scene
            key="overview"
            title="Overview"
            iconName="bar-chart"
            icon={TabIcon}
          >
            <Scene
              key="overviewscreen"
              component={OverviewScreen}
              title="Overview"
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

          {/* PROFILE SCREEN */}
          <Scene
            key="profile"
            title="Profile"
            iconName="user-circle-o"
            icon={TabIcon}
          >
            <Scene
              key="profilescreen"
              component={ProfileScreen}
              title="Profile"
            />
          </Scene>

        </Scene>

      </Scene>
    </Router>
  );
};

export default App;
