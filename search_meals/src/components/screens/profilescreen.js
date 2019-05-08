import React, { Component } from 'react';
import {
  Card,
  CardItem,
  Container,
  Content,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Button,
  Form,
  Item,
  Picker,
  Thumbnail,
  Accordion,
  Tab,
  Tabs,
  ScrollableTab
} from 'native-base';
import { Image } from 'react-native';
import { IconFill } from '@ant-design/icons-react-native';
import { Actions } from 'react-native-router-flux';

const dataArray = [
  {
    title: 'Protein',
    content: '10–35% of calories',
  },
  {
    title: 'Carbohydrates',
    content: '45–65% of calories'
  },
  {
    title: 'Fats',
    content: '45–65% of calories'
  },
];

export default class ProfileScreen extends Component {
  constructor(props) {
  super(props);
  this.state = {
    selected2: undefined
  };
}
onValueChange2(value: string) {
  this.setState({
    selected2: value
  });
}
  render() {
    return (
      <Container style={styles.container}>
        <Card>
          <CardItem bordered>
            <Left>
              <Thumbnail source={{ uri: 'https://pbs.twimg.com/profile_images/1119318837005103110/_ZYH5KEe_400x400.jpg' }} />
              <Body>
                <Text style={styles.title}>Sajidah Akther</Text>
              </Body>
            </Left>
          </CardItem>
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: undefined }}
                placeholder='My Main Objective:'
                placeholderStyle={{ color: '#7e7e7e' }}
                placeholderIconColor='#007aff'
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Balance Meals" value="key0" />
                <Picker.Item label="Build Muscle" value="key1" />
                <Picker.Item label="Lose Weight" value="key2" />
                <Picker.Item label="Manage Type 2 Diabetes" value="key3" />
                <Picker.Item label="Manage Insulin-Dependent Diabetes" value="key4" />
                <Picker.Item label="Normalise Cholesterol" value="key5" />
              </Picker>
            </Item>
          </Form>
        </Card>

        <Content>
        <Card>
          <CardItem header bordered>
            <Text
             style={styles.subTitles}
            >
             My Progress
            </Text>
          </CardItem>
          <Tabs
            renderTabBar={() => <ScrollableTab />}
            tabBarUnderlineStyle={{ backgroundColor: '#FA2133' }}
          >
            <Tab
              heading="Daily"
              activeTextStyle={{ color: '#FA2133' }}
            >
              <CardItem>
              <Image
                style={styles.image}
                source={require('../../components/assets/progress.png')}
              />
              </CardItem>
            </Tab>
            <Tab
              heading="Weekly"
              activeTextStyle={{ color: '#FA2133' }}
            >
            <Image
              style={styles.image}
              source={require('../../components/assets/progress.png')}
            />
            </Tab>
            <Tab
              heading="Monthly"
              activeTextStyle={{ color: '#FA2133' }}
            >
            <Image
              style={styles.image}
              source={require('../../components/assets/progress.png')}
            />
            </Tab>
            <Tab
              heading="Yearly"
              activeTextStyle={{ color: '#FA2133' }}
            >
              <Image
                style={styles.image}
                source={require('../../components/assets/progress.png')}
              />
            </Tab>
          </Tabs>
        </Card>
          <Card>
            <CardItem header bordered>
              <Text
               style={styles.subTitles}
               onPress={() => Actions.searchscreen()}
              >
               Favourited Meals
              </Text>
              <Right style={{ flex: 1, color: '#FA2133' }}>
               <IconFill
                 style={styles.buttonIcon} name="right-circle"
                 onPress={() => Actions.searchscreen()}
               />
              </Right>
            </CardItem>
            <CardItem header bordered>
             <Text style={styles.subTitles}>My Macro Ratios</Text>
            </CardItem>
            <Accordion
              dataArray={dataArray}
              renderContent={this._renderContent}
              headerStyle={{ backgroundColor: '#F4F4F4' }}
              contentStyle={{ backgroundColor: '#FFFFFF' }}
            />
          </Card>

          <Card>
            <CardItem header bordered>
              <Text
               style={styles.subTitles}
              >
               Monitored Nutrients
              </Text>
              <Right style={{ flex: 1, color: '#FA2133' }}>
               <IconFill
                 style={styles.buttonIcon} name="plus-circle"
               />
              </Right>
            </CardItem>
            <CardItem bordered>
              <Button rounded light>
                <IconFill style={styles.checkIcon} name="check-circle" />
                <Text style={styles.tagText}>Iron</Text>
              </Button>
              <Button rounded light>
                <IconFill style={styles.checkIcon} name="check-circle" />
                <Text style={styles.tagText}>Calcium</Text>
              </Button>
            </CardItem>
            <CardItem header bordered>
              <Text
               style={styles.subTitles}
              >
               Dietary Requirements
              </Text>
              <Right style={{ flex: 1, color: '#FA2133' }}>
               <IconFill
                 style={styles.buttonIcon} name="plus-circle"
               />
              </Right>
            </CardItem>
            <CardItem>
            <Button rounded light>
              <IconFill style={styles.checkIcon} name="check-circle" />
              <Text style={styles.tagText}>Vegetarian</Text>
            </Button>
            <Button rounded light>
              <IconFill style={styles.checkIcon} name="check-circle" />
              <Text style={styles.tagText}>Halal</Text>
            </Button>
            </CardItem>
          </Card>

      </Content>
    </Container>
    );
  }
}

const styles = {
  title: {
    color: '#383838',
    fontWeight: 'bold',
    fontSize: 18,
    // textTransform: 'uppercase'

  },
  buttonIcon: {
     fontSize: 24,
     textAlign: 'right',
     color: '#FA2133'
  },
  subTitles: {
    color: '#383838'
  },
  tagText: {
    fontSize: 14,
    color: '#575757'
  },
  checkIcon: {
    fontSize: 24,
    textAlign: 'left',
    color: '#1CD200',
    paddingLeft: 10
  },
  container: {
    backgroundColor: '#e8e8e8'
  },
  image: {
    height: 200,
    width: null,
    flex: 1
  },
};
