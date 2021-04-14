import React, { Component } from 'react'
import { Modal, ScrollView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import styles from '../styles.js'

export default class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {  }
  }

  renderSocial = () => {
    let social = this.props.state.data.channels
    if (social) {
    let html = []
    let i = 0
    social.forEach(x => {
      html.push(<View key={i++} style={styles.mSocialV2}>
        <Text key={i++} style={styles.mtxtWhite}>{x.type}</Text>
        <Text key={i++} style={styles.mtxtWhite}>{x.id}</Text>
      </View>)
    })
    return (<>
      <View style={styles.mSocialV}>
        {html}
      </View>
    </>)
    }
  }

  // renderAddress = () => {
  //   return <Text style={styles.mtxtBlack}>{this.props.state.data.address}</Text>
  // }
  
  render() {
    let { name, party } = this.props.state.data
    return (
      <View style={styles.mCenteredV}>
        <Modal
          animationType='none'
          transparent={true}
          visible={this.props.state.modal}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.")
            this.props.offModal()
          }}
        >
          <View style={styles.mCenteredV}>
            <View style={styles.mV}>

              <View style={styles.mTop}>
                <View style={styles.mOfficeV}>
                  <Text style={styles.mtxtWhite}>{this.props.state.office}</Text>
                </View>
  
                <View style={party === 'Democratic Party' ? styles.mDV : party === 'Republican Party' ? styles.mRV : styles.mIV}>
                  <Text style={styles.mtxtWhite}>{name} {party === 'Democratic Party' ? '(D)' : party === 'Republican Party' ? '(R)' : '(I)'}</Text>
                </View>
              </View>

              <View style={styles.mBottom}>
                <View style={styles.mURLV}>
                  <Text style={styles.mtxtWhite}>{this.props.state.data.urls}</Text>
                </View>
  
                <View style={styles.mPhonesV}>
                  <Text style={styles.mtxtWhite}>{this.props.state.data.phones}</Text>
                </View>

                {this.renderSocial()}
                {/* {this.renderAddress()} */}
              </View>
              <View style={styles.mButtonV}>
                <TouchableOpacity
                  // style={[styles.mButton, styles.mButtonClose]}
                  style={styles.mButtonClose}
                  onPress={() => this.props.offModal()}
                >
                  <Text style={styles.mButtonText}>Close</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  // style={[styles.mButton, styles.mButtonClose]}
                  style={styles.mButtonData}
                  onPress={() => this.props.offModalNavToData()}
                >
                  <Text style={styles.mButtonText}>Data</Text>
                </TouchableOpacity>
              </View>

            </View>
          </View>
        </Modal>
      </View>
    )
  }
}