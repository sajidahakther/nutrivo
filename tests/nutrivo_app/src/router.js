import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import MealPlans from './components/mealplans';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="login" component={MealPlans} title="Meals" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;
