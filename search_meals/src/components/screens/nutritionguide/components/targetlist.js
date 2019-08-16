import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import TargetItem from './targetitem';

class TargetList extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(this.props.data);
  }

  renderRow(library) {
    return <TargetItem library={library} />;
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

export default connect(mapStateToProps)(TargetList);
