import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  View,
  DeckSwiper,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Button,
} from 'native-base';
import { IconFill } from '@ant-design/icons-react-native';

const cards = [
  {
    text: 'Avocado',
    description: 'Avocado is a superfood containing many nutrients and antioxidants, such as folic acid, Omega 3, magnesium, potassium, lutein and fibre.',
    image: require('../../../assets/avocado.jpg'),
    tag: 'high nutrient density'
  },
  {
    text: 'Salmon',
    description: 'Salmon is packed with omega-3 fatty acids, potassium, selenium and vitamin B12 which are linked to improved brain function and cognition',
    image: require('../../../assets/salmon.jpg'),
    tag: 'high-quality protein'
  },
  {
    text: 'Beans and Legumes',
    description: 'Excellent sources of dietary fiber, protein, B vitamins and others. Can help maintain a healthy gut, reduce blood sugar and improve cholesterol levels.',
    image: require('../../../assets/beans.jpg'),
    tag: 'fibre-rich foods'
  },
];

export default class FoodSwiper extends Component {
  render() {
    return (
      <Container>
        <View>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem cardBody>
                  <Image style={styles.foodImage} source={item.image} />
                </CardItem>
                <CardItem header bordered>
                  <Text style={styles.foodName}>{item.text}</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text style={styles.instructions}>Swipe left or right to view more</Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text style={styles.mealDescription}>{item.description}</Text>
                  </Body>
                </CardItem>
                <CardItem>
                  <Left>
                   <IconFill style={styles.checkIcon} name="check-circle" />
                  </Left>
                    <Body>
                     <Button rounded light>
                       <Text style={styles.tagText}>{item.tag}</Text>
                     </Button>
                   </Body>
               </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}

const styles = {
  icon: {
    color: '#FA2133',
    fontSize: 17
  },
  foodName: {
    color: '#383838'
  },
  foodImage: {
    height: 300,
    flex: 1
  },
  mealDescription: {
    color: '#707070'
  },
  tagText: {
    fontSize: 14,
    color: '#575757'
  },
  checkIcon: {
    fontSize: 24,
    textAlign: 'left',
    color: '#1CD200'
  },
  instructions: {
      fontStyle: 'italic',
      color: '#7E7E7E',
    }
};
