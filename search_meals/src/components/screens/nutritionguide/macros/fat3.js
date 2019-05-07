import React, { Component } from 'react';
import { Container, Card, CardItem, Body, Text, Accordion } from 'native-base';

const dataArray = [
  {
    title: 'Unsaturated Fat',
    content: 'Unsaturated Fats are “healthy” fats. They help you absorb fat-soluble vitamins, provide insulation that protects your organs from injury and keep you feeling full for longer. Polyunsaturated Fats lower bad cholesterol levels: Salmon, Walnuts, Flaxseed and Eggs. Monounsaturated Fats increase good cholesterol levels: Nuts, Seeds, Avocados and Vegetable Oils.',
  },
  {
    title: 'Saturated Fat',
    content: 'Saturated fats should be limited, as eating too much can increase bad cholesterol levels, which increases the risk for heart disease and stroke.',
  },
  {
    title: 'Trans Fat',
    content: 'Trans Fats should be avoided entirely, they are produced by turning liquid oil into solid fat. Eating foods high in trans fat such as Margarine and Shortening can lower good cholesterol levels and increase the risk for heart disease.'
  }
];

export default class Tab3 extends Component {
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
              1g fat = 9 calories
            </Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text style={styles.textColour}>
              Fats are important for our bodies,
              but it is important to distinguish
              between good and bad fats.
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Card>
          <CardItem header bordered>
           <Text style={styles.headerColour}>The Different Types</Text>
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
