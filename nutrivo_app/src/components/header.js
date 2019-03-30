import React from 'react';
import { View, Text } from 'react-native';

const Header = () => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
    <Text style={textStyle}>Overview</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 30,
    marginTop: 70,
    marginBottom: 20,
    color: '#000000'
  }

};

export default Header;
