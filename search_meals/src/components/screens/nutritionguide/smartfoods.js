import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import FoodSwiper from './smartfoods/foodswiper';


export default class SmartFoods extends Component {
  render() {
    return (
      <Container style={styles.container}>
      <Content>
          <FoodSwiper />
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
