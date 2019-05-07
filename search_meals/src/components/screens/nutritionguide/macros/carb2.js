import React, { Component } from 'react';
import { Container, Card, CardItem, Body, Text, Accordion } from 'native-base';

const dataArray = [
  {
    title: 'Fibre',
    content: 'Eating fibre helps you feel full for longer and promotes bowel health. There are two forms of fibre: soluble and insoluble. Good sources of fibre include: whole grains, beans, bran, broccoli',
    image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/01/15/13/fibre-foods.jpg?w968h681'
  },
  {
    title: 'Starch',
    content: 'Lorem ipsum dolor sit amet'
  },
  {
    title: 'Sugar',
    content: 'Lorem ipsum dolor sit amet'
  }
];

export default class Tab2 extends Component {
    _renderContent(item) {
     return (
       <Text
         style={{
           color: '#707070',
           padding: 10,
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
    color: '#707070'
  },
  measurement: {
    color: '#383838',
    fontWeight: 'bold'
  },
  container: {
    backgroundColor: '#E8E8E8'
  }
};
