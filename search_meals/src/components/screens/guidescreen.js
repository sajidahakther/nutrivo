import React, { } from 'react';
import {
  View,
  Text
} from 'react-native';
import { Container, Button, Segment, Content } from 'native-base';

const GuideScreen = () => {
  return (
    <View style={styles.container}>
    <Container>
      <Segment>
          <Button first>
            <Text>Puppies</Text>
          </Button>
          <Button>
            <Text>Kittens</Text>
          </Button>
          <Button last active>
            <Text>Cubs</Text>
          </Button>
        </Segment>
        <Content padder>
          <Text>Awesome segment</Text>
        </Content>
    </Container>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
  }
};

export default GuideScreen;
