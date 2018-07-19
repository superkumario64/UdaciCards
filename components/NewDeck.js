import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    KeyboardAvoidingView,
    TextInput
} from 'react-native'
import TextButton from "./TextButton"
import { connect } from "react-redux"
import { addDeck } from "../actions";
import { submitDeck, getDecks } from '../utils/api'

class NewDeck extends Component {
    state = {
        input: ''
    }
    handleInputChange = (input) => {

        this.setState(() => ({
            input
        }))
    }
    submit = () => {
        let input = this.state.input

        submitDeck(input).then(() => {
            this.props.dispatch(addDeck({
                [input]: {
                    title: input,
                    questions: [],
                }
            }))
            this.setState(() => ({
                input: ""
            }))
            this.props.navigation.navigate('ListDecks', {})
        })
    }
    render() {
        const { input } = this.state
        return (
            <KeyboardAvoidingView  behavior="padding" style={styles.container}>
                <Text style={styles.text}>What is the title of your new deck?</Text>
                <TextInput
                    value={input}
                    onChangeText={this.handleInputChange}
                    placeholder={"Deck Title"}
                    style={styles.input}
                />
                <TextButton onPress={this.submit}>Submit</TextButton>
            </KeyboardAvoidingView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {
        fontSize: 50,
        textAlign: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 3,
        padding: 10,
        margin: 10,
    }
})

export default connect()(NewDeck)