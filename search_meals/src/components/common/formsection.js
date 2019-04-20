import React from 'react';
import { View } from 'react-native';

const FormSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1.6,
    padding: 5,
    // backgroundColor: '#fff',
    // borderRadius: 20,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    // borderColor: 'rgba(0,0,0,0.2)',
    position: 'relative',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: '#fff',


    borderRadius: 20,
    borderWidth: 0.3,
    borderColor: '#FA2133',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2, },
    shadowOpacity: 0.1,

  }
};

export { FormSection };
