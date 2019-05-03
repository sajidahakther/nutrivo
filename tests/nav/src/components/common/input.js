import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
  const { inputStyle, containerStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text>{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholder}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  inputStyle: {
    color: '#303030',
    // fontWeight: 'bold',
    paddingRight: 15,
    paddingLeft: 15,
    fontSize: 18,
    letterSpacing: 1,
    flex: 1,
  },
  containerStyle: {
    height: 30,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  }
};

export { Input };
