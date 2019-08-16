import React from 'react';
import { ScrollView, Image, Linking } from 'react-native';
import { Card, CardItem, Text, Body, Button, Icon, Left, Right } from 'native-base';
import { IconFill } from '@ant-design/icons-react-native';

const SearchBody = ({ meal1 }) => {
  const { title, description, thumbnailimage, tags, url, time } = meal1;
  const { mealTitle, mealDescription, tagText } = styles;

    return (
      <ScrollView style={{ flex: 1 }}>
      <Card>
        <CardItem cardBody>
          <Image
            source={{ uri: thumbnailimage }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem header bordered>
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
              <Text style={tagText}>{time}</Text>
            </Button>
           </Left>
           <Body>
            <Button rounded light>
              <Text style={tagText}>{tags}</Text>
            </Button>
          </Body>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent>
              <IconFill style={styles.hearticon} name="heart" />
              <Text style={styles.faveButtonText}>Favourited</Text>
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
    </ScrollView>
    );
  };

const styles = {
  mealTitle: {
    color: '#383838',
  },
  mealDescription: {
    color: '#707070',
  },
  buttonText: {
    fontSize: 16,
    color: '#575757'
  },
  faveButtonText: {
    fontSize: 16,
    color: '#575757',
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
    color: '#FA2133',
    fontSize: 18
  },
};

export default SearchBody;
