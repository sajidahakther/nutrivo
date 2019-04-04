import React, { Component } from 'react';
import {
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutAnimation,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;
    const { nutrientDescription } = styles;

    if (expanded) {
      return (
        <CardSection>
          <Text style={nutrientDescription}>
            {library.description}
          </Text>
        </CardSection>
      );
    }
  }

  render() {
    const { nutrientName, nutrientImage } = styles;
    const { id, nutrient, image } = this.props.library;

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

          <Image
            style={nutrientImage}
            source={{ uri: image }}
          />
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

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.id;

  return { expanded };
};


/* using connect to modify what data is show in the listitem
returned actions will be dispatched to the redux store
passes all the actions to my custom components as props */
export default connect(mapStateToProps, actions)(ListItem);