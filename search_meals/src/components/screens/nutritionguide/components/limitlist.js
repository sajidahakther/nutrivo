import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import LimitItem from './limititem';

class LimitList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.data);
  }

  renderRow(library) {
    return <LimitItem library={library} />;
  }

  render() {
    return (
      <ListView
        dataSource={this.dataSource}
        renderRow={this.renderRow}
      />
    );
  }
}

const mapStateToProps = state => {
  return { data: state.libraries };
};

// 'connect' forges a connection with react and redux
export default connect(mapStateToProps)(LimitList);
