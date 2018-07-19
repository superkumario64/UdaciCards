import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ListDecks from './components/ListDecks'
import NewDeck from './components/NewDeck'
import { createBottomTabNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

const Tabs = createBottomTabNavigator(
    {
        ListDecks: {
            screen: ListDecks,
            navigationOptions: {
                tabBarLabel: "LIST DECKS"
            }
        },
        NewDeck: {
            screen: NewDeck,
            navigationOptions: {
                tabBarLabel: "NEW DECK"
            }
        }
    },
    {
        navigationOptions: {
            header: null
        },
        tabBarOptions: {
            activeTintColor: "black",
            style: {
                height: 56,
                backgroundColor: "white",
                shadowColor: 'rgba(0, 0, 0, 0.24)',
                shadowOffset: {
                    width: 0,
                    height: 3
                },
                shadowRadius: 6,
                shadowOpacity: 1
            }
        }
    }


);

export default class App extends React.Component {
  render() {
    return (
        <Provider store={createStore(reducer)}>
            <Tabs />
        </Provider>
    )
  }
}

const styles = StyleSheet.create({

})
