import { AsyncStorage } from 'react-native'

let storageKey = "UdaciCards:decks"


export const getDecks = () => {
    let data = {
        React: {
            title: 'React',
            questions: [
                {
                    question: 'What is React?',
                    answer: 'A library for managing user interfaces'
                },
                {
                    question: 'Where do you make Ajax requests in React?',
                    answer: 'The componentDidMount lifecycle event'
                }
            ]
        },
        JavaScript: {
            title: 'JavaScript',
            questions: [
                {
                    question: 'What is a closure? ',
                    answer: 'The combination of a function and the lexical environment within which that function was declared.'
                }
            ]
        }
    }
    return AsyncStorage.getItem(storageKey).then(results => {
        return (results) ? JSON.parse(results) : data
    })
}

export function submitDeck (title) {
    return getDecks().then((decks) => {
        if (!decks[title]) {
            decks[title] = {
                title,
                questions: []
            }
            AsyncStorage.setItem(storageKey, JSON.stringify(decks))
        }
    })
}

export function addCardDB(title, question) {
    return getDecks().then((decks) => {
        decks[title].questions.push(question)
        AsyncStorage.setItem(storageKey, JSON.stringify(decks))
        return decks
    })
}