import React, { Component } from 'react'
import { View, Text, StyleSheet, KeyboardAvoidingView } from 'react-native'

export default class NewDeck extends Component {
    render() {
        return (
            <KeyboardAvoidingView  behavior="padding" >
                <Text>What is the title of your new deck?</Text>
            </KeyboardAvoidingView>
        )
    }
}