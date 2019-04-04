import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { connect } from 'react-redux';
import ListItem from './listitem';

class TargetList extends Component {
  renderItem(library) {
    return <ListItem library={library} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.libraries}
        renderItem={this.renderItem}
        // library.id
        keyExtractor={(library) => library.nutrient}
      />
    );
  }
}

const mapStateToProps = state => ({ libraries: state.libraries });

// 'connect' forges a connection with react and redux
export default connect(mapStateToProps)(TargetList);
