import React, { Component } from 'react';
import { Container, Content, Tab, Tabs, ScrollableTab } from 'native-base';
import Target from './target.js';
import Limit from './limit.js';

export default class NutrientsToMonitor extends Component {
  render() {
    return (
      <Container style={styles.container}>
      <Content>
          <Tabs
            renderTabBar={() => <ScrollableTab />}
            tabBarUnderlineStyle={{ backgroundColor: '#FA2133' }}
          >
            <Tab
              heading="To Target"
              activeTextStyle={{ color: '#FA2133' }}
            >
              <Target />
            </Tab>
            <Tab
              heading="To Limit"
              activeTextStyle={{ color: '#FA2133' }}
            >
              <Limit />
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
