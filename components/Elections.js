import React, { Component } from 'react'
import { Modal, ScrollView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import Context from '../context/Context.js'
import styles from '../styles.js'

export default class Generals extends Component {
  constructor(props) {
    super(props)
    this.state = { }
  }

  static contextType = Context
 
  render() {
    return (
      <ScrollView style={styles.eScrollHome}>
        <View style={styles.eBodyV}>
          <Text style={styles.eBodyTx}>Election Polls Go Here</Text>
        </View>
      </ScrollView>
    )
  }
}