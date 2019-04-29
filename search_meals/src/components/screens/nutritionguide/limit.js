import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import LimitList from './components/limitlist';

const Limit = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{ flex: 1 }}>
        <LimitList />
      </View>
    </Provider>
  );
};

export default Limit;
