import React from 'react';
import { View } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

// Main
import LoginForm from './components/loginform';

//Navbar Screens
import GuideScreen from './components/screens/guidescreen';
import SearchScreen from './components/screens/searchscreen';
import EntriesScreen from './components/screens/entriesscreen';
import OverviewScreen from './components/screens/overviewscreen';
import ProfileScreen from './components/screens/profilescreen';

//Entries
import AddEntry from './components/screens/entries/addentry';
import EditEntry from './components/screens/entries/editentry';

//Nutrition Guide
import Macros from './components/screens/nutritionguide/macros';
import Target from './components/screens/nutritionguide/target';
import Limit from './components/screens/nutritionguide/limit';
import PortionSizes from './components/screens/nutritionguide/portionsizes';

const TabIcon = ({ focused, iconName }) => {
  return (
    <View>
    <Icon
      style={{ color: focused ? '#FA2133' : '#909090',
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

        <Scene key="auth">
          <Scene
            key="login"
            component={LoginForm}
            // component={OverviewScreen}
            title="Login"
            hideNavBar
            initial
          />
        </Scene>

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

                {/* macronutrients */}
                <Scene
                  key="macros"
                  component={Macros}
                  title="Macronutrients"
                />

                {/* Nutrients to Target */}
                <Scene
                  key="target"
                  component={Target}
                  title="Nutrients To Target"
                />

                {/* Nutrients to Limit */}
                <Scene
                  key="limit"
                  component={Limit}
                  title="Nutrients To Limit"
                />

                {/* Smart Food Suggestions */}
                <Scene
                  key="searchscreen"
                  component={SearchScreen}
                  title="Search"
                />

                {/* Portion Sizes */}
                <Scene
                  key="portionsizes"
                  component={PortionSizes}
                  title="Portion Sizes"
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
              key="entrytab"
              title="Entries"
              iconName="plus"
              icon={TabIcon}
            >
              <Scene
                key="entries"
                component={EntriesScreen}
                title="Entries"
              />
                {/* form to add the meal */}
                <Scene
                  key="addentry"
                  component={AddEntry}
                  title="Add Entry"
                />

                {/* form to edit the entry */}
                <Scene
                  key="editentry"
                  component={EditEntry}
                  title="Edit Entry"
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
                  onRight={() => Actions.auth()}
                  rightTitle="Sign Out"
                />
              </Scene>
            </Scene>

      </Scene>
    </Router>
  );
};

export default RouterComponent;
