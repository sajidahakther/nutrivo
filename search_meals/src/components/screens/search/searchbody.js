import React from 'react';
import { ScrollView, Text, View } from 'react-native';

class SearchBody extends React.Component {
  render() {
    const recipe = this.props.data;
    if (!recipe) {
      return <View />;
    }
    console.log(recipe.name);
    return (
      <ScrollView style={{ flex: 1 }}>
        <Text style={styles.header}> #{recipe.id} - {recipe.name}</Text>
      </ScrollView>
    );
  }
}

const styles = {
  header: {
    fontSize: 30,
    color: 'red',
    textAlign: 'center'
  }
};

export default SearchBody;
