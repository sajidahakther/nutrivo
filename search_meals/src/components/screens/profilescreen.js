import React, { Component } from 'react';
import {
  Card,
  CardItem,
  Container,
  Content,
  ListItem,
  Text,
  Icon,
  Left,
  Body,
  Right,
  Switch,
  Button
} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class ProfileScreen extends Component {
  render() {
    return (
      <Container>
        <Content padder>
          <Card>
            <CardItem header bordered>
            <Text
              style={styles.welcome}
              onPress={() => Actions.overviewscreen()}
            >
            Profile imag here and a bio
            </Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Type of diet or dietary requirements
                  List of allergens or intolerances.
                  Dietary goals etc.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>Edit Profile</Text>
            </CardItem>
          </Card>

          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: '#007AFF' }}>
                <Icon active name="airplane" />
              </Button>
            </Left>
            <Body>
              <Text>Airplane Mode</Text>
            </Body>
            <Right>
              <Switch value={false} />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: '#007AFF' }}>
                <Icon active name="wifi" />
              </Button>
            </Left>
            <Body>
              <Text>Wi-Fi</Text>
            </Body>
            <Right>
              <Text>GeekyAnts</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: '#007AFF' }}>
                <Icon active name="bluetooth" />
              </Button>
            </Left>
            <Body>
              <Text>Bluetooth</Text>
            </Body>
            <Right>
              <Text>On</Text>
              <Icon active name="arrow-forward" />
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

const styles = {
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#000000',
  }
};
