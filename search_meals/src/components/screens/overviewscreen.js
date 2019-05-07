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
} from 'native-base';
import { IconOutline, IconFill } from '@ant-design/icons-react-native';

export default class OverviewScreen extends Component {
  render() {
    return (
      <Container style={styles.background}>
        <Content>
          <Card style={{ flex: 0 }}>
          <CardItem header bordered>
           <Text style={styles.textColour}>Total Calories</Text>
           <Right style={{ flex: 1 }}>
            <IconOutline style={{ fontSize: 24, textAlign: 'right' }} name="ellipsis" />
           </Right>
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
                  transparent
                  onPress={() => Linking.openURL('https://www.calculator.net/calorie-calculator.html')}
                >
                  <IconFill style={styles.questionIcon} name="question-circle" />
                  <Text style={styles.buttonText}>Calorie Requirement</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>

          <Card style={{ flex: 0 }}>
          <CardItem header bordered>
           <Text style={styles.textColour}>Macronutrients</Text>
           <Right style={{ flex: 1 }}>
            <IconOutline style={{ fontSize: 24, textAlign: 'right' }} name="ellipsis" />
           </Right>
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
                transparent
                onPress={() => Linking.openURL('https://healthyeater.com/flexible-dieting-calculator')}
              >
                <IconFill style={styles.questionIcon} name="question-circle" />
                <Text style={styles.buttonText}>Macronutrient Ratio</Text>
              </Button>
              </Left>
            </CardItem>
          </Card>

          <Card style={{ flex: 0 }}>
          <CardItem header bordered style={styles.textColour}>
           <Text style={styles.textColour}>Target Nutrient Intake</Text>
           <Right style={{ flex: 1 }}>
            <IconOutline style={{ fontSize: 24, textAlign: 'right' }} name="ellipsis" />
           </Right>
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
                  transparent
                  onPress={() => Linking.openURL('http://www.dietandfitnesstoday.com/rda.php')}
                >
                  <IconFill style={styles.questionIcon} name="question-circle" />
                  <Text style={styles.buttonText}>Recommended Dietary Allowance</Text>
                </Button>
              </Left>
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
    fontSize: 14,
    color: '#575757'
  },
  icon: {
    color: '#575757',
    fontSize: 17,
  },
  background: {
    backgroundColor: '#E8E8E8'
  },
  questionIcon: {
    fontSize: 18,
    color: '#707070'
  }
};
