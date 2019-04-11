import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EntryForm from './entryform';
import { entryupdate, entrysave } from '../actions';
import { Card, CardSection, Button, Confirm } from './common';

class EditEntry extends Component {

  state = { showModal: false };

  /* iterating over every property on that object and updating the reducer with
  every property - taking all the attributes of the meal entry and putting them
  as pre-filled value inside the form reducer */
  componentWillMount() {
    _.each(this.props.entry, (value, prop) => {
      this.props.entryupdate({ prop, value });
    });
  }

  onButtonPress() {
    const { food, serving, duration } = this.props;
    this.props.entrysave({ food, serving, duration, uid: this.props.entry.uid });
  }

  render() {
    return (
      <Card>

        <EntryForm />

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            Delete
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
        >
          Are you sure you want to delete this entry?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { food, serving, duration } = state.entry;
  return { food, serving, duration };
};

export default connect(mapStateToProps, { entryupdate, entrysave })(EditEntry);
