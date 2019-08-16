import React, { Component } from 'react';
import { Container, Content, CardItem, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import { entryupdate, addentry } from '../../../actions';
import EntryForm from './entryform';

class AddEntry extends Component {

  onButtonPress() {
    const { food, serving, duration } = this.props;
    this.props.addentry({ food, serving, duration: duration || 'Breakfast' });
  }

  render() {
    console.log(this.props.entry);
    return (
      <Container style={styles.container}>
        <Content>
          <EntryForm {...this.props} />
          <CardItem>
            <Button style={styles.buttonWidth} block light onPress={this.onButtonPress.bind(this)}>
              <Text style={styles.buttonText}> Add Entry </Text>
            </Button>
          </CardItem>
        </Content>
      </Container>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#E8E8E8'
  },
  buttonText: {
    fontSize: 16,
    color: '#383838'
  },
  buttonWidth: {
    textAlign: 'center',
    width: '100%',
  }
};

const mapStateToProps = (state) => {
  const { food, serving, duration } = state.entry;
  return { food, serving, duration };
};

export default connect(mapStateToProps, {
  entryupdate, addentry
})(AddEntry);
