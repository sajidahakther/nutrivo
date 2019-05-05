import React, { Component } from 'react';
import { Container, Content, Card, CardItem, Text, Body } from 'native-base';
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
                  Type of diet or dietary requirements.
                  List of allergens or intolerances.
                  Dietary goals etc.
                </Text>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Text>Edit Profile</Text>
            </CardItem>
          </Card>
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
