import React, { } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Router, Scene, Tabs } from 'react-native-router-flux';

const MacrosScreen = () => {
  return (
    <Scene key="MacronutrientsScreen">
      <Tabs
        key="macronutrients"
        swipeEnabled
        showLabel
        tabBarPosition='top'
        tabBarStyle={{ backgroundColor: '#ffffff' }}
        labelStyle={{ color: '#000000' }}
        indicatorStyle={{ backgroundColor: '#ededed' }}
        activeBackgroundColor="white"
        navBar={GuideNavBar} // create a function
        lazy
      >
        <Scene
          key="carbohydrate"
          component={CarbohydrateScreen} // create the screen in carbohydratescreen.js
          title="Carbohydrate"
          tintColor={'#ededed'}
          hideNavBar
          back={false}
        />
        <Scene
          key="protein"
          component={ProteinScreen}
          title="Protein"
          tintColor={'#ededed'}
          hideNavBar
          back={false}
        />
        <Scene
          key="fat"
          component={FatScreen}
          title="Fat"
          tintColor={'#ededed'}
          hideNavBar
          back={false}
        />
      </Tabs>
    </Scene>
  );
};


export default MacrosScreen;
