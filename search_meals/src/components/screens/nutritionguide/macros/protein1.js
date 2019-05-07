import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Card, CardItem, Body, Text, Accordion } from 'native-base';

const dataArray = [
  {
    title: 'Meats',
    content: 'Beef, Lamb, Venison and Bison',
  },
  {
    title: 'Poultry',
    content: 'Chicken, Turkey and Duck'
  },
  {
    title: 'Dairy',
    content: 'Reduced-fat milk, cheese and yoghurt'
  },
  {
    title: 'Beans',
    content: 'Chickpeas, Lentils, Peas, Kidney Beans, Black Beans, Soybeans, Pinto Beans, Navy Beans.'
  }
];

export default class Tab1 extends Component {
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
              1g protein = 4 calories
            </Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text style={styles.textColour}>
              Protein is important for muscle
              development and repair.
              It plays a vital role in a wide
              variety of bodily functions,
              such as regulating hormones
              and metabolism.
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem header bordered>
           <Text style={styles.headerColour}>Sources of Protein</Text>
          </CardItem>
          <CardItem cardBody>
             <Image source={{ uri: 'https://cdn1.medicalnewstoday.com/content/images/hero/196/196279/196279_1100.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
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
