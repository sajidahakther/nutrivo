import React, { } from 'react';
import { View } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

//Main
import LoginScreen from './loginscreen';

//Navbar Screens
import OverviewScreen from './screens/overviewscreen';
import SearchScreen from './screens/searchscreen';
// import EntriesScreen from './screens/entriesscreen';
import Entries from './components/entries';
import GuideScreen from './screens/guidescreen';
import ProfileScreen from './screens/profilescreen';

//Overview
import CaloriesModal from './screens/overview/caloriesmodal';
import MacrosModal from './screens/overview/macrosmodal';
import NutrientsModal from './screens/overview/nutrientsmodal';


const TabIcon = ({ focused, iconName }) => {
  return (
    <View>
    <Icon
      style={{ color: focused ? '#96c1da' : '#909090',
      fontSize: 18,
      textAlign: 'center' }}
      name={iconName}
    />
    </View>
  );
};

const RouterComponent = () => {
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
          activeTintColor='#303030'
          inactiveTintColor='#808080'
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
              component={Entries}
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

          {/* total calories modal */}
          <Scene
            modal
            key="caloriesmodal"
            component={CaloriesModal}
            title="Calories"
            hideNavBar
          />

          {/* macronutrients */}
          <Scene
            key="macrosmodal"
            component={MacrosModal}
            title="Macronutrients"
            hideNavBar
          />
          {/* target nutrient intake */}
          <Scene
            key="nutrientsmodal"
            component={NutrientsModal}
            title="Target Nutrient Intake"
            hideNavBar
          />


      </Scene>
    </Router>
  );
};

export default RouterComponent;
