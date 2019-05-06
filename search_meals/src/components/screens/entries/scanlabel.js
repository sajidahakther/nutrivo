import React, { Component } from 'react';
import { Root, Button, ActionSheet, Text, Icon } from 'native-base';

const BUTTONS = ['Take a Photo', 'Select from Camera roll', 'Cancel'];
const CANCEL_INDEX = 2;

export default class ScanLabel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Root>
          <Button
            light
            onPress={() =>
            ActionSheet.show(
              {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                title: 'Scan Food Label'
              },
              buttonIndex => {
                this.setState({ clicked: BUTTONS[buttonIndex] });
              }
            )}
          >
            <Icon style={styles.icon} name="camera" />
            <Text style={styles.buttonText}>Scan Label</Text>
          </Button>
        </Root>
    );
  }
}

const styles = {
  buttonText: {
    fontSize: 16,
    color: '#383838'
  },
  icon: {
    fontSize: 18
  }
};
