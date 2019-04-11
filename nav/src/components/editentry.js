import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import EntryForm from './entryform';
import { entryupdate } from '../actions';
import { Card, CardSection, Button } from './common';

class EditEntry extends Component {

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
    console.log(food, serving, duration);
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

      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { food, serving, duration } = state.entry;
  return { food, serving, duration };
};

export default connect(mapStateToProps, { entryupdate })(EditEntry);
