import _ from 'lodash';
import React, { Component } from 'react';
import { Container, Content, Button, CardItem, Card, Left, Right, Text } from 'native-base';
import { connect } from 'react-redux';
import EntryForm from './entryform';
import { entryupdate, entrysave, entrydelete } from '../../../actions';
import { Confirm } from '../../common';

class EditEntry extends Component {

  state = { showModal: false };

  componentWillMount() {
    _.each(this.props.entry, (value, prop) => {
      this.props.entryupdate({ prop, value });
    });
  }

  onButtonPress() {
    const { food, serving, duration } = this.props;
    this.props.entrysave({ food, serving, duration, uid: this.props.entry.uid });
  }

  onAccept() {
    const { uid } = this.props.entry;
    this.props.entrydelete({ uid });
  }

  onDecline() {
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <EntryForm />
          <Card>
            <CardItem>
              <Left>
                <Button
                  block
                  light
                  onPress={() => this.setState({ showModal: !this.state.showModal })}
                >
                  <Text style={styles.buttonText}> Delete Entry </Text>
                </Button>
              </Left>

              <Right>
                <Button block light onPress={this.onButtonPress.bind(this)}>
                  <Text style={styles.buttonText}> Save Changes </Text>
                </Button>
              </Right>
            </CardItem>
          </Card>

          <Card>
            <Confirm
              visible={this.state.showModal}
              onAccept={this.onAccept.bind(this)}
              onDecline={this.onDecline.bind(this)}
            >
              Are you sure you want to delete this entry?
            </Confirm>
          </Card>
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
  }
};

const mapStateToProps = (state) => {
  const { food, serving, duration } = state.entry;
  return { food, serving, duration };
};

export default connect(mapStateToProps, {
  entryupdate, entrysave, entrydelete
})(EditEntry);
