import React from 'react';
import { TextInput, View } from 'react-native';
import { Text } from 'native-base';

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
    color: '#7E7E7E',
    // fontWeight: 'bold',
    paddingRight: 15,
    paddingLeft: 15,
    fontSize: 16,
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
