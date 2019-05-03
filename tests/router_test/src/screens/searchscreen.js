import React, { } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const SearchScreen = () => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.welcome}
        onPress={() => Actions.overviewscreen()}
      >
       put the search functionality here with the nutrivo_app data from json file
      </Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ededed',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#000000',
  }
};

export default SearchScreen;
