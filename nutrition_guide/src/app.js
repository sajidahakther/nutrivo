import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import { Header } from './components/common';
import TargetList from './components/targetlist';

const App = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <Header screenTitle="Nutrition Guide" />
        <TargetList />
      </View>
    </Provider>
  );
};

export default App;
