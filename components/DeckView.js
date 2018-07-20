import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

class DeckView extends Component {
    static navigationOptions = ({ navigation }) => {
        const { title } = navigation.state.params;
        return {
            title
        }
    }
    render(){
        const { title } = this.props.navigation.state.params;
        
        return (
            <View>
                <Text>{title}</Text>
            </View>
        )
    }
}

export default connect()(DeckView)