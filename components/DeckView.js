import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import TextButton from "./TextButton"

class DeckView extends Component {
    static navigationOptions = ({ navigation }) => {
        const { title } = navigation.state.params;
        return {
            title
        }
    }
    render(){
        const { title } = this.props.navigation.state.params;
        let { decks } = this.props

        let deck = decks[title];
        
        return (
            <View style={styles.container}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.length}>{deck.questions.length} cards</Text>
                <TextButton
                    style={styles.add}
                    onPress={() => ( this.props.navigation.navigate('AddCard', { title }) )}
                >Add Card</TextButton>
                {
                    deck.questions.length > 0 &&
                        (<TextButton
                            style={styles.start}
                            onPress={() => ( this.props.navigation.navigate('QuizView', { title }) )}
                        >Start Quiz</TextButton>)
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 40,
    },
    length: {
        fontSize: 25,
        color: "gray",
    },
    add: {
        paddingTop: 75
    },
    start: {
        paddingTop: 40
    }
})

function mapStateToProps (decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckView)