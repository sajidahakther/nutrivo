import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection, SubSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;
    const { image } = this.props.library;
    const { nutrientDescription, nutrientImage } = styles;

    if (expanded) {
      return (
        <View>
        <SubSection>
          <Image
            style={nutrientImage}
            source={{ uri: image }}
          />
          </SubSection>
          <CardSection>
            <Text style={nutrientDescription}>
              {library.description}
            </Text>
          </CardSection>
        </View>
      );
    }
  }

  render() {
    const { nutrientName } = styles;
    const { id, nutrient } = this.props.library;

    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.selectLibrary(id)}
      >
        <View>
          <CardSection>
            <Text style={nutrientName}>
              {nutrient}
            </Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  nutrientName: {
    fontSize: 18,
    paddingLeft: 15
  },
  nutrientImage: {
    flex: 1,
    height: 200,
    paddingLeft: 18,
    paddingRight: 18
  },
  nutrientDescription: {
    flex: 1,
    textAlign: 'justify',
    paddingLeft: 18,
    paddingRight: 18
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
