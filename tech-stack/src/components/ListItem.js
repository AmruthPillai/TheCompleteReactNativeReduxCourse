import React, { Component } from 'react'
import { View, Text, TouchableWithoutFeedback, NativeModules, LayoutAnimation, StyleSheet } from 'react-native'

import { connect } from 'react-redux'

import { CardSection } from './common'
import * as actions from '../actions'

const { UIManager } = NativeModules
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);


class ListItem extends Component {
  componentWillUpdate() {
    LayoutAnimation.spring()
  }

  _renderDescription() {
    const { expanded } = this.props
    const { description } = this.props.library.item

    if (expanded) {
      return (
        <Text style={styles.description}>
          {description}
        </Text>
      )
    }
  }

  render() {
    const { id, title } = this.props.library.item
    const { selectLibrary, expanded } = this.props

    return (
      <TouchableWithoutFeedback
        onPress={() => selectLibrary(id)}>
        <View>
          <CardSection>
            <View style={styles.container}>
              <Text style={[styles.title, expanded ? styles.fontWeightBold : null]}>
                {title}
              </Text>
              {this._renderDescription()}
            </View>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    )
  }
}

const styles = StyleSheet.create({
  fontWeightBold: { fontWeight: 'bold' },
  container: {
    flexDirection: 'column',
    paddingVertical: 8,
    paddingLeft: 12
  },
  title: {
    fontSize: 16
  },
  description: {
    marginTop: 6
  }
})

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;

  return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem)