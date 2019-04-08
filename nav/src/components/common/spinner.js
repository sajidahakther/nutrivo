import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ spinnerSize }) => {
  return (
    <View style={styles.spinnerStyle}>
      {/* Option to specify the spinner loading size, or it will be large by default */}
      <ActivityIndicator size={spinnerSize || 'large'} />
    </View>
  );
};

const styles = {
  spinnerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { Spinner };
