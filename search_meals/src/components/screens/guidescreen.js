import React, { } from 'react';
import {
  View,
  Text
} from 'react-native';
// import { Container, Button, Segment, Content } from 'native-base';
import { Actions } from 'react-native-router-flux';

const GuideScreen = () => {
  return (
    <View style={styles.container}>
      <Text
        onPress={() => Actions.macros()}
      >
       Macronutrients
      </Text>

      <Text
        onPress={() => Actions.target()}
      >
       Nutrients To Target
      </Text>

      <Text
        onPress={() => Actions.limit()}
      >
       Nutrients To Limit
      </Text>

      <Text
        onPress={() => Actions.searchscreen()}
      >
       Smart Food Suggestions
      </Text>

      <Text
        onPress={() => Actions.portionsizes()}
      >
       Portion Sizes
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
  }
};

export default GuideScreen;
