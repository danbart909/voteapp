import React, { Component } from 'react'
import { Modal, ScrollView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import Context from '../context/Context.js'
import AsyncStorage from '@react-native-async-storage/async-storage'
import styles from '../styles.js'
import Card from './Card.js'
import Card2 from './Card2.js'

export default class Reps extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      modal2: false,
      modal2id: 0,
      data: {
        address: [],
        channels: [],
        name: '',
        party: '',
        phones: [],
        urls: [],
        emails: []
      },
      name: '',
      office: '',
      vote: {
        0: { name: '', score: 0 },
        1: { name: '', score: 0 },
        2: { name: '', score: 0 },
        3: { name: '', score: 0 },
        4: { name: '', score: 0 },
        5: { name: '', score: 0 },
        6: { name: '', score: 0 }
      }
    }
  }

  static contextType = Context

  setVote = (rating) => {
    let i = this.state.modal2id
    let name = this.state.name
    this.setState({ vote: {...this.state.vote, [i]: { name: name, score: rating }}})
    this.context.setTimer(name, rating, i)
  }

  onModal = (modalData, office) => {
    this.setState({
      modal: true,
      data: modalData,
      office: office
    })
  }

  offModal = () => {
    this.setState({ modal: false })
    this.offModalAfterTimeout()
    // this.closeModalDelay = setTimeout(() => {
    //   this.offModalAfterTimeout()
    // }, 250)
  }

  offModalNavToData = () => {
    this.context.setNameFromRepCard(this.state.data.name)
    this.setState({modal: false})
    this.offModalAfterTimeout()
    this.props.navigation.navigate('Data')
  }

  offModalAfterTimeout = () => {
    this.setState({
      data: {
        address: [],
        channels: [],
        name: '',
        party: '',
        phones: [],
        urls: [],
        emails: []
      },
      office: ''
    })
  }

  onModal2 = (modalData, office, i) => {
    this.setState({
      modal2: true,
      data: modalData,
      name: modalData.name.replace(/[ ,.]/g, ''),
      office: office.replace(/[ ,.]/g, ''),
      modal2id: i,
    })
  }

  offModal2 = () => {
    this.setState({ modal2: false })
    this.offModalAfterTimeout2()
    // this.closeModalDelay2 = setTimeout(() => {
    //   this.offModalAfterTimeout2()
    // }, 250)
  }

  offModalAfterTimeout2 = () => {
    this.setState({
      modal2id: 0,
      data: {
        address: [],
        channels: [],
        name: '',
        party: '',
        phones: [],
        urls: [],
        emails: []
      },
      office: ''
    })
  }

  voteOrRating = (modalData, office, i) => {
    if (this.context.vote[i].score === 0) {
      return (
        <TouchableOpacity
          key={i+800}
          style={styles.rVote}
          onPress={() => this.onModal2(modalData, office, i)}
        >
          <Text key={i+900} style={styles.rVoteTx}>
            Ready to Vote!
          </Text>
        </TouchableOpacity>
      )
    } else {
      return (
        <View key={i+1000} style={styles.rVote2}>
          <View key={i+1100} style={styles.rVote2Top}>
            <Text key={i+1200} style={styles.rVoteTx}>
              Timer:
            </Text>
            <Text key={i+1300} style={styles.rVoteTx}>
              {this.context.vote[i].timer}
            </Text>
          </View>
          <View key={i+1400} style={styles.rVote2Bot}>
            <Text key={i+1500} style={styles.rVoteTx}>
              Rating:
            </Text>
            <Text key={i+1600} style={styles.rVoteTx}>
              {this.context.vote[i].score}
            </Text>
          </View>
        </View>
      )
    }
  }

  displayData = () => {
    let gov = this.context.gov
    let arr = []
    for (let i = 0; i < gov.offices.length; i++) {
      let modalData = this.context.data.officials[i]
      let offices = this.context.gov.offices[i]
      arr.push(
        <View key={i+100} style={styles.rInfoV}>
          <View key={i+200} style={styles.rInfoLeft}>

            <View key={i+300} style={styles.rOffices}>
              <Text key={i+400} style={styles.rOfficesTx}>
                {gov.offices[i]}
              </Text>
            </View>

            <TouchableOpacity
              key={i+500} 
              style={gov.party[i] === 'Democratic Party' ? styles.rOfficialsD : gov.party[i] === 'Republican Party' ? styles.rOfficialsR : styles.rOfficialsI}
              onPress={() => this.onModal(modalData, offices)}
            >
              <Text key={i+600} style={styles.rOfficialsTx}>
                {gov.officials[i]} {gov.party[i] === 'Democratic Party' ? '(D)' : gov.party[i] === 'Republican Party' ? '(R)' : '(I)'}
              </Text>
            </TouchableOpacity>
  
          </View>

          <View key={i+700} style={styles.rInfoRight}>
            {this.voteOrRating(modalData, offices, i)}
          </View>
        </View>
      )
    }
    return arr
  }
  
  render() {

    let i = 0

    return (
      <ScrollView>
        <Card
          state={this.state}
          offModal={() => this.offModal()}
          offModalNavToData={() => this.offModalNavToData()}
        />
        <Card2
          state={this.state}
          offModal2={() => this.offModal2()}
          setVote={(rating) => this.setVote(rating)}
        />
        <View style={styles.rTop}>
          <TextInput
            style={styles.addressInput}
            placeholder='Type Address Here'
            onChangeText={this.context.handleAddressFormChange}
            defaultValue={this.context.address}
          />
          <View style={styles.rButtonV}>
            <TouchableOpacity
              onPress={() => this.context.makeGETrequest()}
              style={styles.rButton}
            >
              <Text style={styles.rButtonTx}>
                Search
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.rBot}>
          { this.context.throwError ? <Text style={{color: 'red'}}>unexpected response length recieved</Text> : <></>}
          { this.context.gov && <><View style={styles.rDistricts}>
            {this.context.gov.districts.map(x => {
              return <Text key={i++} style={styles.rDistrictsTx}>{x}</Text>
            })}
          </View>
          {this.displayData()}</> }
        </View>
      </ScrollView>
    )
  }
}