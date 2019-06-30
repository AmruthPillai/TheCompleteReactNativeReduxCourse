import React from 'react'
import { View, Text, Modal, StyleSheet } from 'react-native'
import { CardSection } from './CardSection'
import { Button } from './Button'

const ConfirmModal = ({ children, visible, onAccept, onDecline }) => {
  const { container, cardSection, text, button } = styles

  return (
    <Modal
      transparent
      visible={visible}
      animationType='slide'
      onRequestClose={() => { }}>
      <View style={container}>
        <CardSection style={cardSection}>
          <Text style={text}>{children}</Text>
        </CardSection>

        <CardSection>
          <Button style={button} onPress={onAccept}>Yes</Button>
          <Button style={button} onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  },
  cardSection: {
    justifyContent: 'center'
  },
  text: {
    flex: 1,
    textAlign: 'center',
    paddingVertical: 10,
    lineHeight: 40
  },
  button: {
    borderRadius: 4,
    margin: 10
  }
})


export { ConfirmModal }
