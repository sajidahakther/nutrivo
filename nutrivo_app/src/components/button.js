import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ whenPressed }) => {
  const { buttonStyle, textStyle } = styles;

  return (
    <TouchableOpacity
      onPress={whenPressed}
      style={buttonStyle}
    >
      <Text style={textStyle}>
        View recipe
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#ff0000',
    fontSize: 15,
    fontWeight: 'bold',
    paddingTop: 5,
    paddingBottom: 5
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ff0000',
    marginLeft: 33,
    marginRight: 200
  }
};

export default Button;
