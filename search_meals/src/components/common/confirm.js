import React from 'react';
import { View, Modal } from 'react-native';
import { Text, Card, CardItem, Button } from 'native-base';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { container, text, buttonText, buttons, buttonWidth } = styles;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={container}>
        <Card>
          <CardItem header bordered>
           <Text style={text}>{children}</Text>
          </CardItem>

          <CardItem style={buttons}>
              <Button style={buttonWidth} light onPress={onAccept}>
                <Text style={buttonText}>Yes</Text>
              </Button>

              <Button style={buttonWidth} light onPress={onDecline}>
                <Text style={buttonText}>No</Text>
              </Button>
          </CardItem>
        </Card>
      </View>
    </Modal>
  );
};

const styles = {
  text: {
    flex: 1,
    color: '#383838',
    textAlign: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#383838',
    textAlign: 'center',
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.75)', // oppacity
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  },
  buttons: {
    alignSelf: 'stretch',
    justifyContent: 'space-between'
  },
  buttonWidth: {
    width: '40%',
  },
};

export { Confirm };
