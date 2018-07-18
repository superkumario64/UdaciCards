import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ListDecks from './components/ListDecks'
import NewDeck from './components/NewDeck'

export default class App extends React.Component {
  render() {
    return (
      <View>
        <NewDeck />
      </View>
    )
  }
}

const styles = StyleSheet.create({

})
