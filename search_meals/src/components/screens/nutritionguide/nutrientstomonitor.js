import React, { Component } from 'react';
import { ScrollView } from 'react-native';
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
              <ScrollView>
                <Target />
              </ScrollView>
            </Tab>
            <Tab
              heading="To Limit"
              activeTextStyle={{ color: '#FA2133' }}
            >
              <ScrollView>
                <Limit />
              </ScrollView>
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
