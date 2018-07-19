import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { getDecks } from "../utils/api";
import { connect } from 'react-redux'
import {receiveDecks} from "../actions";

class ListDecks extends Component {
    state = {
    }

    componentDidMount() {
        const { dispatch } = this.props
        getDecks()
            .then((decks) => dispatch(receiveDecks(decks)))
    }

    render() {
        const { decks } = this.props
        return (
            <ScrollView style={styles.container}>
                {
                    Object.keys(decks).map(deck => {
                        return (
                            <View key={decks[deck].title}>
                                <TouchableOpacity>
                                    <View style={styles.box}>
                                        <Text style={styles.text}>{decks[deck].title}</Text>
                                        <Text style={styles.length}>{decks[deck].questions.length} cards</Text>
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
    },
    length: {

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