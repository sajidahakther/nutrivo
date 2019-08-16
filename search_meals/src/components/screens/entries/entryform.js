import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { Card, CardItem, Text, Icon, Item, Form, Picker } from 'native-base';
import { connect } from 'react-redux';
import { entryupdate } from '../../../actions';
import { Input } from '../../common';

class EntryForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }
  render() {
    return (
      <ScrollView style={styles.container}>

      <Card>
      <CardItem header bordered>
       <Text style={styles.textColour}>Select a Meal</Text>
      </CardItem>
      <Form>
          <Item picker>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              style={{ width: undefined }}
              placeholder="Select a Meal"
              placeholderStyle={{ color: '#bfc6ea' }}
              placeholderIconColor='#007aff'
              selectedValue={this.props.duration}
              onValueChange={value => this.props.entryupdate({ prop: 'duration', value })}
            >
              <Picker.Item label="Breakfast" value="Breakfast" />
              <Picker.Item label="Lunch" value="Lunch" />
              <Picker.Item label="Dinner" value="Snack" />
              <Picker.Item label="Snack" value="Dinner" />
            </Picker>
          </Item>
        </Form>
      </Card>

        <Card style={{ flexDirection: 'column' }}>
            <CardItem
              searchBar
              rounded
            >
          <Item>
            <Input
              style={{ paddingLeft: 15 }}
              placeholder="Search Food"
            />
            <Icon style={styles.searchicon} name="search" />
          </Item>
          </CardItem>
        </Card>

        <Card>
          <CardItem header bordered>
           <Text style={styles.textColour}>Manually Enter Food</Text>
          </CardItem>
          <CardItem>
            <Input
              placeholder="Enter food (vegetable pasta)"
              value={this.props.food}
              onChangeText={value => this.props.entryupdate({ prop: 'food', value })}
            />
          </CardItem>
          <CardItem>
            <Input
              placeholder="Enter calorie amount (100 kcal)"
              value={this.props.serving}
              onChangeText={value => this.props.entryupdate({ prop: 'serving', value })}
            />
          </CardItem>
        </Card>
      </ScrollView>
    );
  }
}

const styles = {
  textColour: {
    color: '#383838'
  },
  searchicon: {
    fontWeight: 'bold',
    color: '#FA2133',
    fontSize: 20,
  }
};

const mapStateToProps = (state) => {
  const { food, serving, duration } = state.entry;
  return { food, serving, duration };
};

export default connect(mapStateToProps, { entryupdate })(EntryForm);
