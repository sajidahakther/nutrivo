import React, { Component } from 'react';
import { connect } from 'react-redux';
import EntryForm from './entryform';
import { Card, CardSection, Button } from './common';

class EditEntry extends Component {
  render() {
    return (
      <Card>
        <EntryForm />

        <CardSection>
          <Button>
            Save Changes
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect()(EditEntry);
