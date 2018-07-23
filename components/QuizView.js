import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'
import TextButton from "./TextButton";

class QuizView extends Component {
    state = {
        question_number: 0,
        answered_correctly: 0,
        show_answer: true
    }
    static navigationOptions = {
        title: "Quiz"
    }

    handleAnswerPress = () => {
        let { show_answer } = this.state
        show_answer = !show_answer
        this.setState(() => ({
            show_answer
        }))
    }

    handleCorrectPress = () => {
        let { answered_correctly, question_number } = this.state
        answered_correctly++
        question_number++
        this.setState(() => ({
            answered_correctly,
            question_number
        }))
    }

    handleIncorrectPress = () => {
        let { question_number} = this.state
        question_number++
        this.setState(() => ({
            question_number
        }))
    }

    handleRestartPress = () => {
        this.setState(() => ({
            question_number: 0,
            answered_correctly: 0,
            show_answer: true
        }))
    }

    handleBackPress = () => {
        this.props.navigation.goBack()
    }

    render(){
        const { title } = this.props.navigation.state.params
        let { decks } = this.props
        const { question_number, answered_correctly, show_answer } = this.state

        let deck = decks[title];

        if (question_number === deck.questions.length) {
            return (
                <View style={styles.container}>
                    <Text style={[styles.center, styles.complete]}>Complete</Text>
                    <Text style={styles.results}>{answered_correctly} of {deck.questions.length} answered correctly</Text>
                    <TextButton style={styles.restart} onPress={() => {this.handleRestartPress()}}>Restart</TextButton>
                    <TextButton style={styles.back}  onPress={() => {this.props.navigation.goBack()}}>Back</TextButton>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                <Text style={styles.current_question}>{ question_number + 1 }/{ deck.questions.length }</Text>

                <View style={styles.center}>
                    <Text style={styles.question}>
                        {
                            show_answer ?
                                deck.questions[question_number].question
                                :
                                deck.questions[question_number].answer
                        }
                    </Text>
                    <TextButton onPress={() => {this.handleAnswerPress()}}>
                        {
                            show_answer ?
                                "Answer"
                                :
                                "Hide Answer"
                        }

                    </TextButton>
                    <TextButton
                        style={styles.correct}
                        onPress={() => {this.handleCorrectPress()}}
                    >
                        Correct
                    </TextButton>
                    <TextButton
                        style={styles.incorrect}
                        onPress={() => {this.handleIncorrectPress()}}
                    >
                        Incorrect
                    </TextButton>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    current_question: {
        fontSize: 25
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    question: {
        paddingTop: 75,
        fontSize: 50,
        textAlign: 'center',
    },
    correct: {
        paddingTop: 100,
        color: 'green'
    },
    incorrect: {
        paddingTop: 50,
        color: 'red'
    },
    complete: {
        textAlign: 'center',
        paddingTop: 50,
        fontSize: 45
    },
    results: {
        textAlign: 'center',
        paddingTop: 20,
        fontSize: 25
    },
    restart: {
        paddingTop: 20
    },
    back: {
        paddingTop: 10
    }
})

function mapStateToProps (decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(QuizView)