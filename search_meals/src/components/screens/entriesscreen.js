import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Left,
  Right,
  Text,
  Button,
  Icon,
  Tab,
  Tabs,
  ScrollableTab,
} from 'native-base';
import { Actions } from 'react-native-router-flux';
import { entriesFetch } from '../../actions';
import EntryListItem from './entries/entrylistitem';
import ScanLabel from './entries/scanlabel';
import FoodSwiper from './nutritionguide/smartfoods/foodswiper';

class EntriesScreen extends Component {
  componentWillMount() {
    this.props.entriesFetch(); // loads up list of entries
    this.createDataSource(this.props);
    }

  // nextProps is the next set of props that the component is rendered with
  componentWillReceiveProps(nextProps) {
    this.createDataSource(nextProps);
  }

  createDataSource({ entries }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(entries);
  }

  renderRow(entry) {
    return <EntryListItem entry={entry} />;
  }

  render() {
    console.log(this.props);
    return (
      <Container style={styles.container}>
        <Content>
          <Card>
            <CardItem>
              <Left>
              <ScanLabel />
              </Left>

              <Right>
                <Button
                  light
                  onPress={() => Actions.addentry()}
                >
                  <Icon style={styles.icon} name="add" />
                  <Text style={styles.buttonText}>Enter Meal</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
              <Tabs
                renderTabBar={() => <ScrollableTab />}
                tabBarUnderlineStyle={{ backgroundColor: '#FA2133' }}
              >
                <Tab
                  heading="Breakfast"
                  activeTextStyle={{ color: '#FA2133' }}
                >
                  <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow} // renders all the entry items in a row
                  />
                </Tab>
                <Tab
                  heading="Lunch"
                  activeTextStyle={{ color: '#FA2133' }}
                >
                  <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow} // renders all the entry items in a row
                  />
                </Tab>
                <Tab
                  heading="Dinner"
                  activeTextStyle={{ color: '#FA2133' }}
                >
                  <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow} // renders all the entry items in a row
                  />
                </Tab>
                <Tab
                  heading="Snack"
                  activeTextStyle={{ color: '#FA2133' }}
                >
                  <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow} // renders all the entry items in a row
                  />
                </Tab>
              </Tabs>
            </CardItem>
            <CardItem>
              <Text style={styles.instructions}>Tap on a food to edit entry</Text>
            </CardItem>
          </Card>
          <CardItem header bordered>
           <Text style={styles.subheaderText}>Smart Food Suggestions</Text>
          </CardItem>
          <FoodSwiper />
        </Content>
      </Container>
    );
  }
}

/* state.entries is an object that has many key value pairs
for each key value pair '_.map' run the function. Takes all
the returned objects (entries) and put it in an array */
const mapStateToProps = state => {
  const entries = _.map(state.entries, (val, uid) => {
      return { ...val, uid };
  });
  return { entries };
};

const styles = {
  container: {
      backgroundColor: '#E8E8E8'
  },
  buttonText: {
    fontSize: 16,
    color: '#383838'
  },
  icon: {
    fontSize: 18
  },
  instructions: {
    fontStyle: 'italic',
    color: '#7E7E7E',
  },
  subheaderText: {
    color: '#383838'
  },
};

export default connect(mapStateToProps, { entriesFetch })(EntriesScreen);
