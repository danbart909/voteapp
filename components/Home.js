import React, { Component } from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import axios from 'react-native-axios'
import Context from '../context/Context.js'
import styles from '../styles.js'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  static contextType = Context

  UNSAFE_componentWillMount() {
    this.context.getData()
  }

  performGET = () => {
    let mainURL = '192.168.137.1:8000'
    // let mainURL = '10.0.0.144:8000'
    // let mainURL = '10.28.18.7:8000'
    axios.get(`http://${mainURL}/Governor/CO/2021-03-19/2021-03-19`)
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }
   
  render() {

    // this.props.navigation.navigate('Data')

    return (
      <ScrollView style={styles.scrollHome}>
        <View style={styles.homeBody1}>
        
          <TouchableOpacity
            style={styles.homeClogButton} 
            onPress={() => console.log(this.context, this.context.dataPage)}
          >
            <Text style={styles.homeWhiteText}>c.log(this.state)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.homeClogButton} 
            onPress={() => this.performGET()}
          >
            <Text style={styles.homeWhiteText}>GET</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.homeRepsButton}
            onPress={() => this.props.navigation.navigate('Reps')}
          >
            <Text style={styles.homeWhiteText}>Reps</Text>
          </TouchableOpacity>
          
          <TouchableOpacity
            style={styles.homeElectionsButton}
            onPress={() => this.props.navigation.navigate('Elections')}
          >
            <Text style={styles.homeWhiteText}>Election Polls</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.homeDataButton}
            onPress={() => this.props.navigation.navigate('Data')}
          >
            <Text style={styles.homeWhiteText}>Data Page</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    )
  }
}


// <TouchableOpacity
//   style={styles.homeAsync1Button}
//   onPress={() => this.context.cLogAsync()}
// >
//   <Text style={styles.homeWhiteText}>c.log(AsyncStorage)</Text>
// </TouchableOpacity>
// <TouchableOpacity
//   style={styles.homeAsync2Button}
//   onPress={() => this.context.clearData()}
// >
//   <Text style={styles.homeWhiteText}>Clear AsyncStorage</Text>
// </TouchableOpacity>
// <TouchableOpacity
//   style={styles.homePollsButton}
//   onPress={() => this.props.navigation.navigate('Polls')}
// >
//   <Text style={styles.homeWhiteText}>Polls</Text>
// </TouchableOpacity>