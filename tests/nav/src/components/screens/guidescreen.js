import React, { } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

const GuideScreen = () => {
  return (
    <View style={styles.container}>
      <Text
        style={styles.welcome}
        onPress={() => Actions.overviewscreen()}
      >
       add the buttons for the nutrition guide
      </Text>

      <Text
        style={styles.welcome}
        onPress={() => Actions.modal()}
      >
       Macronutrients
      </Text>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#000000',
  }
};

export default GuideScreen;