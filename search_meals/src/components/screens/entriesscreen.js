import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import { Container, Content, Card, CardItem, Left, Right, Text, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { entriesFetch } from '../../actions';
import EntryListItem from './entries/entrylistitem';
import ScanLabel from './entries/scanlabel';

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
                  <Icon style={styles.icon} name="plus" />
                  <Text style={styles.buttonText}>Enter Meal</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
          <Card>
            <CardItem>
            <ListView
              enableEmptySections
              dataSource={this.dataSource}
              renderRow={this.renderRow} // renders all the entry items in a row
            />
            </CardItem>
          </Card>
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
    fontSize: 15,
    color: '#383838'
  },
  icon: {
    fontSize: 17
  }
};

export default connect(mapStateToProps, { entriesFetch })(EntriesScreen);
