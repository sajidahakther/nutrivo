import React, { Component } from 'react';
import axios from 'axios';
import { Item, Icon, Input, Container, Content, Card, CardItem } from 'native-base';
import SearchBody from './search/searchbody';
import DefaultMealList from './search/defaultmeallist';

class SearchScreen extends Component {
  state = {
    mealSearcher: '',
    onCall: true,
    data: []
  }

  searchMeals = () => {
    this.setState({ onCall: true });
    const self = this;
    axios.get('https://pokeapi.co/api/v2/pokemon/'+this.state.mealSearcher.toLowerCase())
      .then((response) => {
        console.log(response.data);
        self.setState({ data: response.data });
        self.setState({ onCall: false });
      })
      .catch((error) => {
        console.log(error);
        self.setState({ data: undefined });
        self.setState({ onCall: false });
      });
  }

  renderBody = () => {
    if (this.state.onCall) {
      return (
        <DefaultMealList />
      );
    }
      return (
        <SearchBody data={this.state.data} />
      );
  }

  render() {
    return (
      <Container style={styles.container}>
        <Card>
          <CardItem
            searchBar
            rounded
          >
        <Item>
          <Input
            style={{ paddingLeft: 15 }}
            value={this.state.searchMeals}
            placeholder="Search Meals"
            onChangeText={(searchMeals) => this.setState({ searchMeals })}
          />
          <Icon style={styles.searchicon} name="search" onPress={this.searchMeals} />
        </Item>
        </CardItem>
      </Card>
        <Content>
          {this.renderBody()}
        </Content>
      </Container>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#E8E8E8'
  },
  searchicon: {
    fontWeight: 'bold',
    color: '#FA2133',
    fontSize: 20
  }
};

export default SearchScreen;
