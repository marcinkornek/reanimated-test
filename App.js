import React, { Component } from 'react';
import { Button, StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import DroppedArea from './app/components/DroppedArea'
import ClickedSquare from './app/components/ClickedSquare'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  closeButton: {
    position: 'absolute',
    top: 50,
    left: 20
  },
  buttonsContainer: {
    marginTop: 50
  }
})

class App extends Component {
  state = {
    component: undefined
  }

  renderCloseButton = () => (
    <TouchableOpacity
      onPress={() => this.setState({ component: undefined })}
      style={styles.closeButton}
    >
      <Text>X</Text>
    </TouchableOpacity>
  )

  renderButtons = () => (
    <View style={styles.buttonsContainer}>
      <Button
        onPress={() => this.setState({ component: 'droppedArea' })}
        title="Dropped Area"
        color="red"
      />
      <Button
        onPress={() => this.setState({ component: 'clickedSquare' })}
        title="Clicked Square"
        color="blue"
      />
    </View>
  )

  renderDroppedArea = () => {
    return (
      <View style={styles.container}>
        <DroppedArea />
        {this.renderCloseButton()}
      </View>
    )
  }

  renderClickedSquare = () => {
    return (
      <View style={styles.container}>
        <ClickedSquare />
        {this.renderCloseButton()}
      </View>
    )
  }

  render() {
    const { component } = this.state

    switch (component) {
      case 'droppedArea':
        return this.renderDroppedArea()
      case 'clickedSquare':
        return this.renderClickedSquare()
      default:
        return this.renderButtons()
    }
  }
}

export default App
