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
   
  render() {

    // this.props.navigation.navigate('Data')

    return (
      <ScrollView style={styles.scrollHome}>
        <View style={styles.homeBody1}>
          
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
        
          {/* <TouchableOpacity
            style={styles.homeClogButton} 
            onPress={() => console.log(this.context, this.context.dataPage)}
          >
            <Text style={styles.homeWhiteText}>c.log(this.state)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.homeClogButton} 
            onPress={() => this.context.cLogAsync()}
          >
            <Text style={styles.homeWhiteText}>c.log(async)</Text>
          </TouchableOpacity> */}

          <TouchableOpacity
            style={styles.homeClogButton} 
            onPress={() => this.context.clearData()}
          >
            <Text style={styles.homeWhiteText}>clear memory</Text>
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