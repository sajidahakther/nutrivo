import React, { Component } from 'react';
import { Container, Content, Tab, Tabs, ScrollableTab } from 'native-base';
import Tab1 from './macros/protein1';
import Tab2 from './macros/carb2';
import Tab3 from './macros/fat3';

export default class TabsExample extends Component {
  render() {
    return (
      <Container style={styles.container}>
      <Content>
          <Tabs
            renderTabBar={() => <ScrollableTab />}
            tabBarUnderlineStyle={{ backgroundColor: '#FA2133' }}
          >
            <Tab
              heading="Protein"
              activeTextStyle={{ color: '#FA2133' }}
            >
              <Tab1 />
            </Tab>
            <Tab
              heading="Carbohydrate"
              activeTextStyle={{ color: '#FA2133' }}
            >
              <Tab2 />
            </Tab>
            <Tab
              heading="Fat"
              activeTextStyle={{ color: '#FA2133' }}
            >
              <Tab3 />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#E8E8E8'
  }
};
