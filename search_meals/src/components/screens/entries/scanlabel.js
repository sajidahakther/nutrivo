import React, { Component } from 'react';
import { View, Image, Button } from 'react-native';
import { Container, Content, Card, CardItem } from 'native-base';
import ImagePicker from 'react-native-image-picker';

class ScanLabel extends Component {
  state = {
    pickedImaged: null
  }

  pickImageHandler = () => {
    ImagePicker.showImagePicker({ title: 'Pick an Image' }, res => {
      if (res.didCancel) {
        console.log('User cancelled!');
      } else if (res.error) {
        console.log('Error', res.error);
      } else {
        this.setState({
          pickedImaged: { uri: res.uri }
        });
      }
    });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Card style={styles.adjust}>
            <CardItem>
              <View style={styles.placeholder}>
                <Image source={this.state.pickedImaged} style={styles.previewImage} />
              </View>
            </CardItem>
            <CardItem>
              <Button title="Select An Image" onPress={this.pickImageHandler} color='#FA2133' />
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = {
    container: {
      backgroundColor: '#E8E8E8'
    },
    adjust: {
        width: '100%',
        alignItems: 'center'
    },
    placeholder: {
      marginTop: 25,
      borderWidth: 1,
      borderColor: '#f5f5f5',
      backgroundColor: '#f1f1f1',
      width: '90%',
      height: 250
    },
    previewImage: {
        width: '100%',
        height: '100%'
    }
};

export default ScanLabel;
