import React, { } from 'react';
import { Image } from 'react-native';
import { Container, Content, Text, Grid, Col, Card, CardItem, Body, Right } from 'native-base';
import { IconFill } from '@ant-design/icons-react-native';
import { Actions } from 'react-native-router-flux';

const GuideScreen = () => {
  const { colStyle, container, optionTitles, image } = styles;
  return (
    <Container style={container}>
    <Content>
    <CardItem cardBody>
       <Image
        source={{ uri: 'http://crossfitpyro.com/wp-content/uploads/2019/01/HealthyFood.jpg' }}
        style={image}
       />
     </CardItem>
       <Card>
         <CardItem header bordered>
           <Text
            style={optionTitles}
            onPress={() => Actions.macros()}
           >
            Macronutrients
           </Text>
           <Right style={{ flex: 1 }}>
            <IconFill
              style={styles.buttonIcon} name="right-circle"
              onPress={() => Actions.macros()}
            />
           </Right>
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
       <Card>
         <CardItem header bordered>
           <Text
            style={optionTitles}
            onPress={() => Actions.monitor()}
           >
            Nutrients To Monitor
            </Text>
            <Right style={{ flex: 1 }}>
             <IconFill
               style={styles.buttonIcon} name="right-circle"
               onPress={() => Actions.monitor()}
             />
            </Right>
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
          <Grid>
             <Col style={colStyle}>
               <Card>
                 <CardItem header bordered>
                   <Text
                    style={optionTitles}
                    onPress={() => Actions.smartfoods()}
                   >
                    Smart Foods
                  </Text>
                  <Right style={{ flex: 1 }}>
                   <IconFill
                     style={styles.buttonIcon} name="right-circle"
                     onPress={() => Actions.smartfoods()}
                   />
                  </Right>
                </CardItem>
                <CardItem>
                 <Body>
                   <Text style={{ color: '#707070' }}>
                      Suggested foods to help you reach your goals,
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
                   <Right style={{ flex: 1 }}>
                    <IconFill
                      style={styles.buttonIcon} name="right-circle"
                      onPress={() => Actions.portionsizes()}
                    />
                   </Right>
                 </CardItem>
                 <CardItem>
                  <Body>
                    <Text style={{ color: '#707070' }}>
                       View common serving size equivalents to
                       determine the right amount of portion.
                    </Text>
                  </Body>
                 </CardItem>
               </Card>
             </Col>
          </Grid>
        </Content>
    </Container>
  );
};

const styles = {
  container: {
    backgroundColor: '#F8F8F8',
  },
  optionTitles: {
    color: '#FA2133'
  },
  colStyle: {
    backgroundColor: '#F4F4F4',
    height: 200,
    width: null,
  },
  image: {
    height: 200,
    width: null,
    flex: 1
  },
  buttonIcon: {
     fontSize: 24,
     textAlign: 'right',
     color: '#FA2133'
  }
};

export default GuideScreen;
