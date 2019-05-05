import React, { Component } from 'react';
import {
  Image
} from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Right,
  Left,
  Body,
  Icon
} from 'native-base';

export default class OverviewScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
          <CardItem header bordered style={styles.textColour}>
           <Text>Total Calories</Text>
         </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{ uri: 'https://file.mockplus.com/image/2018/09/2f362750-f709-4bda-9bc5-ace1f13f4110.gif' }}
                  style={styles.image}
                />
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent bordered danger>
                  <Text>Calorie Calculator</Text>
                </Button>
              </Left>

              <Right>
                <Button transparent bordered danger>
                  <Text>Edit</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>

          <Card style={{ flex: 0 }}>
          <CardItem header bordered style={styles.textColour}>
           <Text>Macronutrients</Text>
         </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{ uri: 'https://file.mockplus.com/image/2018/09/2f362750-f709-4bda-9bc5-ace1f13f4110.gif' }}
                  style={styles.image}
                />
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent bordered danger>
                  <Text>Macro Ratio Calculator</Text>
                </Button>
              </Left>

              <Right>
                <Button transparent bordered danger>
                  <Text>Edit</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>

          <Card style={{ flex: 0 }}>
          <CardItem header bordered style={styles.textColour}>
           <Text>Target Nutrient Intake</Text>
         </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{ uri: 'https://file.mockplus.com/image/2018/09/2f362750-f709-4bda-9bc5-ace1f13f4110.gif' }}
                  style={styles.image}
                />
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent bordered danger>
                  <Text>Find Your RDA</Text>
                </Button>
              </Left>

              <Right>
                <Button transparent bordered danger>
                  <Text>Edit</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = {
  image: {
    height: 200,
    flex: 1,
    width: 340
  },
  textColour: {
    color: '#FA2133'
  }
};
