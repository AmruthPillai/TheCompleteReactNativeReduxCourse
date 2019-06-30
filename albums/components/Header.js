import React from 'react'
import { View, Text } from 'react-native'

const Header = (props) => {
  const { viewStyle, textStyle } = styles

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.title}</Text>
    </View>
  )
}

const styles = {
  viewStyle: {
    position: 'relative',
    backgroundColor: '#1e88e5',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    elevation: 4,
    shadowColor: '#000',
  },
  textStyle: {
    fontSize: 20,
    color: '#FFF',
    fontWeight: 'bold'
  }
}

export default Header