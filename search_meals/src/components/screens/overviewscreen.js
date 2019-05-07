import React, { Component } from 'react';
import {
  Image,
  Linking
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
      <Container style={styles.background}>
        <Content>
          <Card style={{ flex: 0 }}>
          <CardItem header bordered>
           <Text style={styles.textColour}>Total Calories</Text>
         </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5c4f75445887e652c03eec1e/5ccf5d51ec12ec8d47577975/fed8527b7a49f10ecd676d6f9b0dcda5/dnk.png' }}
                  style={styles.image}
                />
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button
                  light
                  onPress={() => Linking.openURL('https://www.calculator.net/calorie-calculator.html')}
                >
                  <Text style={styles.buttonText}>Calorie Calculator</Text>
                </Button>
              </Left>

              <Right>
                <Button iconLeft light>
                  <Icon style={styles.icon} name='cog' />
                  <Text style={styles.buttonText}>Settings</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>

          <Card style={{ flex: 0 }}>
          <CardItem header bordered>
           <Text style={styles.textColour}>Macronutrients</Text>
         </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5c4f75445887e652c03eec1e/5ccf5d51ec12ec8d47577975/6b55503a558aba1d94b2bb119702f511/bdj.png' }}
                  style={styles.image}
                />
              </Body>
            </CardItem>
            <CardItem>
              <Left>
              <Button
                light
                onPress={() => Linking.openURL('https://healthyeater.com/flexible-dieting-calculator')}
              >
                <Text style={styles.buttonText}>Calculate Macro Ratio</Text>
              </Button>
              </Left>

              <Right>
                <Button iconLeft light>
                  <Icon style={styles.icon} name='cog' />
                  <Text style={styles.buttonText}>Settings</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>

          <Card style={{ flex: 0 }}>
          <CardItem header bordered style={styles.textColour}>
           <Text style={styles.textColour}>Target Nutrient Intake</Text>
         </CardItem>
            <CardItem>
              <Body>
                <Image
                  source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5c4f75445887e652c03eec1e/5ccf5d51ec12ec8d47577975/4cedba4de311be2d10a23871d1b5ce9f/jsanj.png' }}
                  style={styles.image}
                />
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button
                  light
                  onPress={() => Linking.openURL('http://www.dietandfitnesstoday.com/rda.php')}
                >
                  <Text style={styles.buttonText}>Find Your RDA</Text>
                </Button>
              </Left>

              <Right>
                <Button iconLeft light>
                  <Icon style={styles.icon} name='cog' />
                  <Text style={styles.buttonText}>Settings</Text>
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
    height: 180,
    flex: 1,
    width: 340
  },
  textColour: {
    color: '#383838'
  },
  buttonText: {
    fontSize: 16,
    color: '#575757'
  },
  icon: {
    color: '#575757',
    fontSize: 17,
  },
  background: {
    backgroundColor: '#E8E8E8'
  }
};
