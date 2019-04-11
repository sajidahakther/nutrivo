import React from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './cardsection';
import { Button } from './button';
import { Card } from './card';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { container, text, cardsect } = styles;

  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={() => {}}
    >
      <View style={container}>
        <Card>

          <CardSection style={cardsect}>
            <Text style={text}>
              {children}
            </Text>
          </CardSection>

          <CardSection>
            <Button onPress={onAccept}>Yes</Button>
            <Button onPress={onDecline}>No</Button>
          </CardSection>

        </Card>
      </View>
    </Modal>
  );
};

const styles = {
  cardsect: {
    justifyContent: 'center',
  },
  text: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.75)', // oppacity
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};

export { Confirm };
