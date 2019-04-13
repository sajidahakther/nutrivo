import React, { Component } from 'react';
import { connect } from 'react-redux';
import { entryupdate, addentry } from '../../../actions';
import { FormCard, SubSection, Button } from '../../common';
import EntryForm from './entryform';

class AddEntry extends Component {

  onButtonPress() {
    const { food, serving, duration } = this.props;
    this.props.addentry({ food, serving, duration: duration || 'Breakfast' });
  }

  render() {
    console.log(this.props.entry);
    return (
      <FormCard>
        {/* Form to add meal */}
        <EntryForm {...this.props} />

        {/* Press to add food entry */}
        <SubSection style={styles.buttonSpacing}>
          <Button onPress={this.onButtonPress.bind(this)}>
            Add
          </Button>
        </SubSection>
      </FormCard>
    );
  }
}

const styles = {
  buttonSpacing: {
    paddingTop: 10
  }
};

const mapStateToProps = (state) => {
  const { food, serving, duration } = state.entry;
  return { food, serving, duration };
};

export default connect(mapStateToProps, {
  entryupdate, addentry
})(AddEntry);
