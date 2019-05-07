import React, { } from 'react';
import { Image } from 'react-native';
import { Container, Content, Text, Grid, Row, Col, Card, CardItem, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';

const GuideScreen = () => {
  const { colStyle, container, optionTitles, image, rowStyle } = styles;
  return (
    <Container style={container}>

    <CardItem cardBody>
       <Image
        source={{ uri: 'http://crossfitpyro.com/wp-content/uploads/2019/01/HealthyFood.jpg' }}
        style={image}
       />
     </CardItem>

      <Grid>
       <Row style={rowStyle}>
         <Card>
           <CardItem header bordered>
             <Text
              style={optionTitles}
              onPress={() => Actions.macros()}
             >
              Macronutrients
             </Text>
           </CardItem>
           <CardItem>
            <Body>
              <Text style={{ color: '#707070' }}>
               There are three Macronutrients required in large amounts:
               Proteins, Carbohydrates and Fats.
               Each of these provides energy in the form of calories.
              </Text>
            </Body>
           </CardItem>
         </Card>
       </Row>
       </Grid>
       
       <Grid>
       <Row style={rowStyle}>
         <Card>
           <CardItem header bordered>
             <Text
              style={optionTitles}
              onPress={() => Actions.monitor()}
             >
              Nutrients To Monitor
              </Text>
              </CardItem>
              <CardItem>
               <Body>
                 <Text style={{ color: '#707070' }}>
                    A guide of nutrients to consider for a healthier diet.
                    View the list of nutrients you want to target eating enough of
                    and the nutrients you want to limit.
                 </Text>
               </Body>
              </CardItem>
            </Card>
          </Row>
        </Grid>
        <Grid>
           <Col style={colStyle}>
             <Card>
               <CardItem header bordered>
                 <Text
                  style={optionTitles}
                  onPress={() => Actions.searchscreen()}
                 >
                  Smart Foods
                </Text>
              </CardItem>
              <CardItem>
               <Body>
                 <Text style={{ color: '#707070' }}>
                    Suggested foods to help to reach your goals,
                    and meet the recommended dietary intake.
                 </Text>
               </Body>
              </CardItem>
            </Card>
          </Col>

          <Col style={colStyle}>
            <Card>
              <CardItem header bordered>
                <Text
                 style={optionTitles}
                 onPress={() => Actions.portionsizes()}
                >
                 Portion Sizes
                 </Text>
               </CardItem>
               <CardItem>
                <Body>
                  <Text style={{ color: '#707070' }}>
                     View common serving size equivalents to help you
                     determine the amount of portion to consume.
                  </Text>
                </Body>
               </CardItem>
             </Card>
           </Col>
       </Grid>
    </Container>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  optionTitles: {
    color: '#FA2133'
  },
  colStyle: {
    backgroundColor: '#F4F4F4',
    height: 200
  },
  rowStyle: {
    backgroundColor: '#F4F4F4',
    // height: 200
    width: 400,
  },
  image: {
    height: 200,
    width: null,
    flex: 1
  }
};

export default GuideScreen;
