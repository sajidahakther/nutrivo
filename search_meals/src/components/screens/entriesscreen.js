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
  Tab,
  Tabs,
  ScrollableTab,
} from 'native-base';
import { IconFill } from '@ant-design/icons-react-native';
import { Actions } from 'react-native-router-flux';
import { entriesFetch } from '../../actions';
import EntryListItem from './entries/entrylistitem';
import FoodSwiper from './nutritionguide/smartfoods/foodswiper';

class EntriesScreen extends Component {
  state = {
    image: {
      value: null,
      valid: false
    }
  }
  componentWillMount() {
    this.props.entriesFetch(); 
    this.createDataSource(this.props);
    }

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
        <Card>
          <CardItem>
            <Left>
            <Button
              light
              onPress={() => Actions.scanlabel()}
            >
              <IconFill
                style={styles.icon} name="camera"
              />
              <Text style={styles.buttonText}>Scan Label</Text>
            </Button>
            </Left>

            <Right>
              <Button
                light
                onPress={() => Actions.addentry()}
              >
                <IconFill
                  style={styles.icon} name="plus-circle"
                />
                <Text style={styles.buttonText}>Enter Meal</Text>
              </Button>
            </Right>
          </CardItem>
        </Card>
        <Content>
          <Card>
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
                    renderRow={this.renderRow} 
                  />
                </Tab>
                <Tab
                  heading="Lunch"
                  activeTextStyle={{ color: '#FA2133' }}
                >
                  <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow} 
                  />
                </Tab>
                <Tab
                  heading="Dinner"
                  activeTextStyle={{ color: '#FA2133' }}
                >
                  <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow} 
                  />
                </Tab>
                <Tab
                  heading="Snack"
                  activeTextStyle={{ color: '#FA2133' }}
                >
                  <ListView
                    enableEmptySections
                    dataSource={this.dataSource}
                    renderRow={this.renderRow} 
                  />
                </Tab>
              </Tabs>
            <CardItem padder>
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
    fontSize: 18,
    paddingLeft: 15
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
