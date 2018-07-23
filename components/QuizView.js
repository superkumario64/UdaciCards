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

    handleAnswerClick = () => {
        let { show_answer } = this.state
        show_answer = !show_answer
        this.setState(() => ({
            show_answer
        }))
    }

    render(){
        const { title } = this.props.navigation.state.params
        let { decks } = this.props
        const { question_number, answered_correctly, show_answer } = this.state

        let deck = decks[title];
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
                    <TextButton onPress={() => {this.handleAnswerClick()}}>
                        {
                            show_answer ?
                                "Answer"
                                :
                                "Hide Answer"
                        }

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
    }
})

function mapStateToProps (decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(QuizView)