import React from 'react';
import { View } from 'react-native';

const FormCard = (props) => {
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    
    marginLeft: 20,
    marginRight: 20,
  }
};

export { FormCard };
