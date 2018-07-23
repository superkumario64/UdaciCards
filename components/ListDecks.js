import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Animated } from 'react-native'
import { getDecks } from "../utils/api";
import { connect } from 'react-redux'
import {receiveDecks} from "../actions";

class ListDecks extends Component {
    state = {
        bounceValue: new Animated.Value(1)
    }

    componentDidMount() {
        const { dispatch } = this.props
        getDecks()
            .then((decks) => dispatch(receiveDecks(decks)))
    }

    pressAction(deck) {
        const { bounceValue } = this.state
        Animated.sequence([
            Animated.timing(bounceValue, { duration: 100, toValue: 1.4 }),
            Animated.spring(bounceValue, { toValue: 1, friction: 4})
        ]).start(() => {
            this.props.navigation.navigate('DeckView', {title: deck.title})
        })
    }

    render() {
        const { decks } = this.props
        const { bounceValue } = this.state
        return (
            <ScrollView style={styles.container}>
                {
                    Object.keys(decks).map(deck => {
                        return (
                            <View key={decks[deck].title}>
                                <TouchableOpacity onPress={() => {this.pressAction(decks[deck])}}>
                                    <View style={styles.box}>
                                        <Animated.Text style={[styles.text, {transform: [{scale: bounceValue}]}]}>{decks[deck].title}</Animated.Text>
                                        <Animated.Text style={[{transform: [{scale: bounceValue}]}]}>{decks[deck].questions.length} cards</Animated.Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        )
                    })
                }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50
    },
    box: {
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        height: 100,
    },
    text: {
        fontSize: 20
    }
})

function mapStateToProps (decks) {
    return {
        decks
    }
}
export default connect(
    mapStateToProps,
)(ListDecks)