import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Card, CardItem, Body, Text, Accordion } from 'native-base';

const dataArray = [
  {
    title: 'Fibre',
    content: 'Eating fibre helps you feel full for longer and promotes bowel health. There are two forms of fibre: soluble and insoluble. Good sources of fibre include: Whole Grains, Beans, Bran, Broccoli.',
  },
  {
    title: 'Starch',
    content: 'Your body digests starch to make glucose, which is a vital energy source for every cell. Starch is found in foods such as Grains, Rice and Potatoes.'
  },
  {
    title: 'Sugar',
    content: 'Sugars are found naturally in most foods, but are also refined into what is called Added Sugar. Added Sugars provide no nutritional value and carry lots of empty calories, limiting these in your diet is always encouraged. Some names to look out for: Fructose, Lactose, Barley Malt, Fruit Juice Concentrate.'
  }
];

export default class Tab2 extends Component {
    _renderContent(item) {
     return (
       <Text
         style={{
           color: '#707070',
           padding: 12,
         }}
       >
         {item.content}
       </Text>
     );
   }
  render() {
    return (
      <Container style={styles.container}>
        <Card>
          <CardItem>
            <Text style={styles.measurement}>
              1g carbs = 4 calories
            </Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text style={styles.textColour}>
                Carbs provide the body with glucose,
                which is converted to energy used to
                support bodily functions and physical
                activity.
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem header bordered>
           <Text style={styles.headerColour}>Most Common Forms</Text>
          </CardItem>
          <CardItem cardBody>
             <Image source={{ uri: 'https://cdn1.medicalnewstoday.com/content/images/articles/320/320959/foods-rich-in-carbohydrates.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
           </CardItem>
          <Accordion
            dataArray={dataArray}
            renderContent={this._renderContent}
            headerStyle={{ backgroundColor: '#F4F4F4' }}
            contentStyle={{ backgroundColor: '#FFFFFF' }}
          />
        </Card>
      </Container>
    );
  }
}

const styles = {
  headerColour: {
    color: '#383838'
  },
  textColour: {
    color: '#707070',
  },
  measurement: {
    color: '#383838',
    fontWeight: 'bold'
  },
  container: {
    backgroundColor: '#E8E8E8'
  }
};
