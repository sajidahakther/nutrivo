import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { entryupdate } from '../../../actions';
import { CardSection, Input, Button, SubSection } from '../../common';


class EntryForm extends Component {

  onCameraButtonPress() {
    console.log('launch camera!');
  }

  render() {
    return (
      <View style={styles.container}>

      {/* Select meal duration */}
      <CardSection style={{ flexDirection: 'column' }}>
        <Text style={styles.pickerTitle}>
          Select a Meal
        </Text>

        <Picker
          selectedValue={this.props.duration}
          onValueChange={value => this.props.entryupdate({ prop: 'duration', value })}
        >
          <Picker.Item label="Breakfast" value="Breakfast" />
          <Picker.Item label="Lunch" value="Lunch" />
          <Picker.Item label="Snack" value="Snack" />
          <Picker.Item label="Dinner" value="Dinner" />
        </Picker>
      </CardSection>

        <SubSection>
          <Button onPress={this.onCameraButtonPress.bind(this)}>
            Scan Food Label
          </Button>
        </SubSection>

        <CardSection style={styles.manualSection}>
      <Text style={styles.manualEntry}> Manually Enter Food </Text>
      </CardSection>

      <CardSection>
        <Input
          placeholder="Food (Vegetable pasta)"
          value={this.props.food}
          onChangeText={value => this.props.entryupdate({ prop: 'food', value })}
        />
      </CardSection>

      {/* Enter serving size */}
      <CardSection>
        <Input
          placeholder="Serving size (230 g)"
          value={this.props.serving}
          onChangeText={value => this.props.entryupdate({ prop: 'serving', value })}
        />
      </CardSection>

      </View>
    );
  }
}

const styles = {
  pickerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#303030',
    alignSelf: 'center',
    paddingTop: 9,
    letterSpacing: 1
  },
  pickerText: {
    fontSize: 16,
    color: '#303030'
  },
  manualEntry: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#303030',
    letterSpacing: 1,
    paddingTop: 50,
    paddingBottom: 15,
    paddingLeft: 80

  },
  manualSection: {
    textAlign: 'center',
  },
  container: {
    paddingTop: 20,
  }
};

const mapStateToProps = (state) => {
  const { food, serving, duration } = state.entry;
  return { food, serving, duration };
};

export default connect(mapStateToProps, { entryupdate })(EntryForm);
