import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import TargetList from './components/targetlist';

const Target = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <TargetList />
      </View>
    </Provider>
  );
};

export default Target;
