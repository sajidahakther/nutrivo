import React, { Component } from 'react';
import {
  Image,
  Linking,
  View
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
        <Card>
          <CardItem header bordered>
            <Left>
              <IconOutline style={{ fontSize: 24, textAlign: 'left', color: '#FA2133' }} name="left" />
            </Left>
            <View style={{ paddingRight: 5 }}>
              <Text style={styles.dateHeader}> Today </Text>
            </View>
            <Right>
              <IconOutline style={{ fontSize: 24, textAlign: 'right', color: '#FA2133' }} name="right" />
            </Right>
          </CardItem>
        </Card>
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
                  source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5c4f75445887e652c03eec1e/5cd28e85ae4c991fed8002e6/14a6813abab6f3570af0d098093cfb2d/calories.png' }}
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
                  source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5c4f75445887e652c03eec1e/5cd28e85ae4c991fed8002e6/56ca00e8847df4aa0407fbf01ca74b60/macros.png' }}
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
                  source={{ uri: 'https://trello-attachments.s3.amazonaws.com/5c4f75445887e652c03eec1e/5cd28e85ae4c991fed8002e6/ce8a70e150afaf2ec3331d4195d9c8da/nutrients.png' }}
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
    fontSize: 16,
    color: '#707070',
    textAlign: 'right'
  },
  dateHeader: {
    fontSize: 16,
    paddingRight: 5,
    color: '#383838',
  }
};
