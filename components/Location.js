import React, { Component } from 'react'
import Context from '../context/Context.js'
import axios from 'react-native-axios'
import styles from '../styles.js'
import { Dimensions, FlatList, TouchableOpacity } from 'react-native'
import { Button, List, ListItem, Text, TextArea, TextField, View } from 'react-native-ui-lib';
import { MAP_API_KEY } from '@env'

export default class Location extends Component {
  constructor(props) {
    super(props)
    this.state = {
      entry: '',
      searchResults: [],
      isShowingResults: false
    }
  }

  static contextType = Context

  changeFormEntry = (x) => {
    x.persist()
    this.setState({ entry: x.nativeEvent.text }, () => this.searchLocation())
  }

  searchLocation = async () => {
    axios
      .request({
        method: 'post',
        url: `https://maps.googleapis.com/maps/api/place/autocomplete/json?key=${MAP_API_KEY}&input=${this.state.entry}`,
      })
      .then((res) => {
        this.setState({
          searchResults: res.data.predictions,
          isShowingResults: true,
        }, () => console.log(this.state, res.data))
      })
      .catch((e) => {
        console.log(e.response)
      });
  }
  
  render() {
    return (
      <>
        <View paddingH-15 paddingT-20>
          {/* <Text text70>Enter Your Address:</Text> */}
          <TextField
            placeholder='Search Your Address'
            helperText='example: 170 Goodwin Rd, Thorp, WA 98946'
            floatingPlaceholder
            floatOnFocus
            onChange={(x) => this.changeFormEntry(x)}
            value={this.state.entry}
          />
          { this.state.isShowingResults &&
            <FlatList
              style={styles.loc_dropdownlist}
              data={this.state.searchResults}
              renderItem={({item, index}) => {
                return (
                  <ListItem
                    // style={}
                    onPress={() => {
                      this.setState({
                        entry: item.description,
                        isShowingResults: false,
                      }, () => console.log(this.state))
                    }}
                  >
                    <Text>{item.description}</Text>
                  </ListItem>
                )
              }}
              keyExtractor={(item) => item.id}
            />
           }
        </View>
        <View style={styles.dummmy} />
      </>
    )
  }
}

// query={{
//   key: 'AIzaSyA1czMYsSTRYIHYJxwN3QoC4BcmoqbOUO0',
//   language: 'en',
// }}

// <View flex paddingH-20 paddingT-60>
// <Text blue50 text20 bg-red60>Welcome</Text>
// <TextField text50 placeholder="username" dark10/>
// <TextField text50 placeholder="password" secureTextEntry dark10/>
// <View marginT-100 center>
//   <Button text70 white background-orange30 label="Login"/>
//   <Button link text70 orange30 label="Sign Up" marginT-20/>
// </View>
// </View>