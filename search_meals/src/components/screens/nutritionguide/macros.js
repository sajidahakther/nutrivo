import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import Tab1 from './macros/protein1';
import Tab2 from './macros/carb2';
import Tab3 from './macros/fat3';
import { Actions } from 'react-native-router-flux';

export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs />
        <Tabs>
          <Tab heading="Protein">
            <Tab1 />
          </Tab>
          <Tab heading="Carbohydrate">
            <Tab2 />
          </Tab>
          <Tab heading="Fat">
            <Tab3 />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
