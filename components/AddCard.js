import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native'
import TextButton from "./TextButton"

class AddCard extends Component {
    state = {
        question: '',
        answer: ''
    }
    static navigationOptions = {
        title: "Add Card"
    }
    handleQuestionChange = (question) => {
        this.setState(() => ({
            question
        }))
    }
    handleAnswerChange = (answer) => {
        this.setState(() => ({
            answer
        }))
    }
    render() {
        const { question, answer } = this.state
        return (
            <View style={styles.container}>
                <TextInput
                    value={ question }
                    onChangeText={this.handleQuestionChange}
                    placeholder={"Question"}
                    style={styles.question}
                />
                <TextInput
                    value={ answer }
                    onChangeText={this.handleAnswerChange}
                    placeholder={"Answer"}
                    style={styles.answer}
                />
                <TextButton>Submit</TextButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    question: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 3,
        padding: 10,
        margin: 10,
    },
    answer: {
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 3,
        padding: 10,
        margin: 10,
    }
})

export default connect()(AddCard)