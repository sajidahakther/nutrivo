import React from 'react';
import { View, Image } from 'react-native';

class MealLoader extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{ uri: 'https://thumbs.gfycat.com/BitterEarnestBeardeddragon-small.gif' }}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    width: 50,
    height: 50
  }
};

export default MealLoader;
