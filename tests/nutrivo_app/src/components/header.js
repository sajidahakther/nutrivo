import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        {props.screenTitle}
      </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 65,
    borderColor: '#ddd',
    borderBottomWidth: 1,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 23,
    color: '#383838',
    fontWeight: 'bold',
    marginBottom: 20
  }
};

export default Header;
