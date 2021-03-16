import React, { Component } from 'react'
import { Modal, ScrollView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import axios from 'react-native-axios'
import Context from '../context/Context.js'
import styles from '../styles.js'

export default class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: 0
    }
  }

  static contextType = Context

  vote = () => {
    let rating = this.state.rating
    if (rating === 0) {
      alert('please pick a rating')
    } else {
      let { name, office } = this.props.state
      let district1 = parseInt(this.context.gov.districts[1].replace( /\D+/g, '' ))
      let district2 = parseInt(this.context.gov.districts[2].replace( /\D+/g, '' ))
      let district3 = parseInt(this.context.gov.districts[3].replace( /\D+/g, '' ))
      let stateABR = this.context.gov.offices[5].slice(0, 2).trim()
      let officeGov = office.slice(0, 8)
      let officeSenRep = office.slice(2)

      this.offModal()
      this.props.setVote(rating)

      if (office === 'PresidentoftheUnitedStates') {
        axios
        .post('http://localhost:8000/post/pres', {
          name: name,
          state: stateABR,
          rating: rating,
          district1: district1,
          district2: district2,
          district3: district3
        })
        .then((response) => {
          console.log(`ranking of ${rating} submitted for ${name}`, response)
        })
        .catch((err) => {
          console.log(err)
        })
      } else if (office === 'USSenator') {
        axios
        .post('http://localhost:8000/post/sen', {
          name: name,
          state: stateABR,
          rating: rating,
          district1: district1,
          district2: district2,
          district3: district3
        })
        .then((response) => {
          console.log(`ranking of ${rating} submitted for ${name}`, response)
        })
        .catch((err) => {
          console.log(err)
        })
      } else if (office === 'USRepresentative') {
        axios
        .post('http://localhost:8000/post/rep', {
          name: name,
          state: stateABR,
          rating: rating,
          district1: district1,
          district2: district2,
          district3: district3
        })
        .then((response) => {
          console.log(`ranking of ${rating} submitted for ${name}`, response)
        })
        .catch((err) => {
          console.log(err)
        })
      } else if (officeGov === 'Governor') {
        axios
        .post('http://localhost:8000/post/gov', {
          name: name,
          state: stateABR,
          rating: rating,
          district1: district1,
          district2: district2,
          district3: district3
        })
        .then((response) => {
          console.log(`ranking of ${rating} submitted for ${name}`, response)
        })
        .catch((err) => {
          console.log(err)
        })
      } else if (officeSenRep === 'StateSenator') {
        axios
        .post('http://localhost:8000/post/stsen', {
          name: name,
          state: stateABR,
          rating: rating,
          district1: district1,
          district2: district2,
          district3: district3
        })
        .then((response) => {
          console.log(`ranking of ${rating} submitted for ${name}`, response)
        })
        .catch((err) => {
          console.log(err)
        })
      } else if (officeSenRep === 'StateRepresentative') {
        axios
        .post('http://localhost:8000/post/strep', {
          name: name,
          state: stateABR,
          rating: rating,
          district1: district1,
          district2: district2,
          district3: district3
        })
        .then((response) => {
          console.log(`ranking of ${rating} submitted for ${name}`, response)
        })
        .catch((err) => {
          console.log(err)
        })
      }
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