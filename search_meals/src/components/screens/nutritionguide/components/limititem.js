import React, { Component } from 'react';
import {
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  Image
} from 'react-native';
import { CardItem, Body, Text } from 'native-base';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;
    const { image2 } = this.props.library;
    const { nutrientDescription, nutrientImage } = styles;

    if (expanded) {
      return (
        <View>
        <CardItem>
          <Image
            style={nutrientImage}
            source={{ uri: image2 }}
          />
          </CardItem>
          <CardItem>
            <Body>
              <Text style={nutrientDescription}>
                {library.description2}
              </Text>
            </Body>
          </CardItem>
        </View>
      );
    }
  }

  render() {
    const { nutrientName, background } = styles;
    const { id, name } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardItem header bordered style={background}>
            <Text style={nutrientName}>
              {name}
            </Text>
          </CardItem>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  nutrientName: {
    color: '#383838'
  },
  nutrientImage: {
    flex: 1,
    height: 200,
  },
  nutrientDescription: {
    flex: 1,
    paddingLeft: 12,
    paddingRight: 12,
    color: '#707070'
  },
  background: {
    backgroundColor: '#F3F3F3'
  }
};

/* whenever application state changes the mapStateToProps function
will re-run, and pass in a new set of props or component which causes
the component to render */
const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};


/* using connect to modify what data is show in the listitem
returned actions will be dispatched to the redux store
passes all the actions to my custom components as props */
export default connect(mapStateToProps, actions)(ListItem);
