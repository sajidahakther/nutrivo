import React, { } from 'react';
import {
  Text
} from 'react-native';
import { Container, Button, Segment, Content } from 'native-base';

const GuideScreen = () => {
  return (
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
  );
};

// const styles = {
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F8F8F8',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//     color: '#000000',
//   }
// };

export default GuideScreen;
