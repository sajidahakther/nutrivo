import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from './common';

class AddEntry extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Food"
            placeholder="Rice"
          />
        </CardSection>

        <CardSection>
          <Input
            label="Serving Size"
            placeholder="100 g"
          />
        </CardSection>

        <CardSection>
        </CardSection>

        <CardSection>
          <Button>
            Log Meal
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default AddEntry;
