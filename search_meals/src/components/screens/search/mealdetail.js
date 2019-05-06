import React from 'react';
import { Image, Linking } from 'react-native';
import { Card, CardItem, Text, Button, Icon, Left, Body, Right } from 'native-base';

const MealDetail = ({ meal1 }) => {
  const { title, description, thumbnailimage, tags, url, time } = meal1;
  const { mealTitle, mealDescription } = styles;

  return (
         <Card>
           <CardItem cardBody>
             <Image
               // style={mealThumbnail}
               source={{ uri: thumbnailimage }}
               style={{ height: 200, width: null, flex: 1 }}
             />
           </CardItem>
           <CardItem>
            <Text style={mealTitle}>{title}</Text>
           </CardItem>
           <CardItem>
            <Body>
             <Text style={mealDescription}>{description}</Text>
            </Body>
            </CardItem>
            <CardItem>
              <Left>
               <Button rounded light>
                 <Text style={styles.tagText}>{time}</Text>
               </Button>
              </Left>
              <Body>
               <Button rounded light>
                 <Text style={styles.tagText}>{tags}</Text>
               </Button>
             </Body>
           </CardItem>
           <CardItem>
             <Left>
               <Button transparent>
                 <Icon style={styles.hearticon} active name="heart" />
                 <Text style={styles.buttonText}>Favourite</Text>
               </Button>
             </Left>
             <Right>
               <Button transparent onPress={() => Linking.openURL(url)}>
                  <Icon style={styles.eyeicon} active name="eye" />
                  <Text style={styles.buttonText}>View Recipe</Text>
                </Button>
             </Right>
           </CardItem>
         </Card>
  );
};

const styles = {
  mealTitle: {
    fontWeight: 'bold',
    color: '#383838', // dark grey
    fontSize: 17,
    paddingBottom: 2
  },
  mealDescription: {
    color: '#707070',
    paddingBottom: 2
  },
  buttonText: {
    fontSize: 16,
    color: '#575757'
  },
  tagText: {
    fontSize: 14,
    color: '#575757'
  },
  hearticon: {
    color: '#FA2133',
    fontSize: 17
  },
  eyeicon: {
    color: '#575757',
    fontSize: 18
  },
};

export default MealDetail;
