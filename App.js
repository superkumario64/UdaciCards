import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import ListDecks from './components/ListDecks'
import NewDeck from './components/NewDeck'
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import DeckView from "./components/DeckView"
import AddCard from "./components/AddCard";
import QuizView from "./components/QuizView";
import { setLocalNotification } from "./utils/helpers";

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

const MainNavigator = createStackNavigator({
    Home: {
        screen: Tabs,
        navigationOptions: {
            header: null
        }
    },
    DeckView: {
        screen: DeckView,
        navigationOptions: {
            headerTintColor: "white",
            headerStyle: {
                backgroundColor: "purple",
            },
            showBack: true
        }
    },
    AddCard: {
        screen: AddCard,
        navigationOptions: {
            headerTintColor: "white",
            headerStyle: {
                backgroundColor: "purple",
            },
            showBack: true
        }
    },
    QuizView: {
        screen: QuizView,
        navigationOptions: {
            headerTintColor: "white",
            headerStyle: {
                backgroundColor: "purple",
            },
            showBack: true
        }
    }
})

export default class App extends React.Component {
    componentDidMount () {
        setLocalNotification()
    }
    render() {
        return (
            <Provider store={createStore(reducer)}>
                <MainNavigator />
            </Provider>
        )
    }
}

const styles = StyleSheet.create({

})
