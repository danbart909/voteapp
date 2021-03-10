import React, { Component } from 'react'
import { Modal, ScrollView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import styles from '../styles.js'

export default class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: 0
    }
  }

  vote = () => {
    if (this.state.rating === 0) {
      alert('please pick a rating')
    } else {
      console.log(`ranking of ${this.state.rating} submitted for ${this.props.state.name}`)
      // console.log(this.state.rating, this.props.state)
      this.offModal()
      this.props.setVote(this.state.rating)
    }
  }

  radioClick = (x) => {
    this.setState({ rating: x })
  }

  renderRadios = () => {
    let data = [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 10 }]
    return (
      data.map((x) => {
        return (
          <TouchableOpacity
            key={x.id}
            style={this.state.rating === x.id ? styles.m2RadioChecked : styles.m2RadioUnchecked}
            onPress={this.radioClick.bind(this, x.id)}
          >
            <Text style={this.state.rating === x.id ? styles.m2RadioTxt : styles.m2RadioTxt2}>{x.id}</Text>
          </TouchableOpacity>
        )
      })
    )
  }

  offModal = () => {
    this.setState({ rating: 0 })
    this.props.offModal2()
  }
  
  render() {
    let { name, party } = this.props.state.data
    return (
      <View style={styles.m2CenteredV}>
        <Modal
          animationType='fade'
          transparent={true}
          visible={this.props.state.modal2}
          onRequestClose={() => {
            Alert.alert("Modal 2 has been closed.")
            this.offModal()
          }}
        >
          <View style={styles.m2CenteredV}>
            <View style={styles.m2V}>

              <View style={styles.m2Top}>
                <View style={party === 'Democratic Party' ? styles.m2HeaderD : party === 'Republican Party' ? styles.m2HeaderR : styles.m2HeaderI}>
                  <Text style={styles.m2txtWhite}>{name}</Text>
                </View>
              </View>

              <View style={styles.m2Mid}>
                <View style={styles.m2Stars}>
                  {this.renderRadios()}
                </View>
              </View>

              <View style={styles.m2Bot}>
                <TouchableOpacity
                  style={styles.m2ButtonClose}
                  onPress={() => this.offModal()}
                >
                  <Text styles={styles.m2ButtonCloseTxt}>Close</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.m2ButtonVote}
                  onPress={() => this.vote()}
                >
                  <Text styles={styles.m2ButtonVoteTxt}>Vote</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    )
  }
}