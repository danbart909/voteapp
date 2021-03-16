import React, { Component } from 'react'
import Context from './Context.js'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'react-native-axios'

let baseTimer = 2

export default class GlobalState extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // address: '1510 5th St Limon CO 80828',
      // address: '125 Churchill Ln, Lincoln, IL 62656',
      // address: '170 Goodwin Rd, Thorp, WA 98946',
      address: '1820 Tree Top Way Marietta GA 30062',
      // address: '',
      gov: {
        districts: [],
        offices: {},
        officials: {},
        party: {},
      },
      data: {},
      throwError: false,
      vote: {
        0: { name: '', score: 0, timer: baseTimer },
        1: { name: '', score: 0, timer: baseTimer },
        2: { name: '', score: 0, timer: baseTimer },
        3: { name: '', score: 0, timer: baseTimer },
        4: { name: '', score: 0, timer: baseTimer },
        5: { name: '', score: 0, timer: baseTimer },
        6: { name: '', score: 0, timer: baseTimer }
      }
    }
    this.interval = {
      0: 0,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 0,
      6: 0
    }
  }

  setTimer = (name, rating, i) => {
    // console.log(name, rating, i)
    this.setState({
      vote: {
        ...this.state.vote,
        [i]: {
          ...this.state.vote[i],
          name: name,
          score: rating
        }
      }
    }, () => this.lightFuse(i))
  }

  lightFuse = (i) => {
    this.interval[i] = setInterval(() => this.countDown(i), 1000)
  }

  countDown = (i) => {
    let seconds = this.state.vote[i].timer - 1;
    // console.log(i, seconds)
    if (seconds != 0) {
      this.setState({ vote: { ...this.state.vote, [i]: { ...this.state.vote[i], timer: seconds } } })
    } else if (seconds == 0) { 
      this.setState({ vote: { ...this.state.vote, [i]: { ...this.state.vote[i], score: 0, timer: baseTimer } } })
      clearInterval(this.interval[i])
      console.log('countdown completed')
    }
  }

  // secondsToTime(secs){
  //   let hours = Math.floor(secs / (60 * 60));

  //   let divisor_for_minutes = secs % (60 * 60);
  //   let minutes = Math.floor(divisor_for_minutes / 60);

  //   let divisor_for_seconds = divisor_for_minutes % 60;
  //   let seconds = Math.ceil(divisor_for_seconds);

  //   let obj = {
  //     "h": hours,
  //     "m": minutes,
  //     "s": seconds
  //   };
  //   return obj;
  // }

  cLogAsync = async () => {
    let jsonValue = await AsyncStorage.getItem('@state_Key')
    let value = JSON.parse(jsonValue)
    try {
      (value !== null) ? console.log(value) : console.log('nothing in memory')
    } catch(e) {
      console.log(e)
    }
  }

  storeData = async () => {
    try {
      const jsonState = JSON.stringify(this.state)
      await AsyncStorage.setItem('@state_Key', jsonState)
      console.log('json state stored')
    } catch(e) {
      console.log('storeData: error storing state', e)
    }
  }

  getData = async () => {
    try {
      let jsonValue = await AsyncStorage.getItem('@state_Key')
      let value = JSON.parse(jsonValue)
      if (value !== null) {
        console.log('found data', value)
        this.setState( value )
      } else {
        console.log('no data found')
      }
    } catch(e) {
      console.log('getData: error retrieving data', e)
    }
  }

  clearData = async () => {
    try {
      await AsyncStorage.removeItem('@state_Key')
      await AsyncStorage.clear()
      this.setState({
        address: '',
        gov: {
          districts: [],
          offices: {},
          officials: {},
          party: {},
        },
        data: {},
        throwError: false,
        vote: {
          0: { name: '', score: 0, timer: baseTimer },
          1: { name: '', score: 0, timer: baseTimer },
          2: { name: '', score: 0, timer: baseTimer },
          3: { name: '', score: 0, timer: baseTimer },
          4: { name: '', score: 0, timer: baseTimer },
          5: { name: '', score: 0, timer: baseTimer },
          6: { name: '', score: 0, timer: baseTimer }
        }
      }),
      console.log('memory cleared')
    } catch(e) {
      console.log('clearData: error clearing data', e)
    }
  }

  handleAddressFormChange = (x) => {
    this.setState({address: x})
    // , () => { console.log(this.state.address) }
  }

  makeGETrequest = () => {
    let base = 'https://civicinfo.googleapis.com/civicinfo/v2/representatives?address='
    let address = this.state.address.replace(/\s/g, '%20')
    let suffix = '&includeOffices=true&roles=headOfState&roles=headOfGovernment&roles=legislatorUpperBody&roles=legislatorLowerBody&key=AIzaSyA1czMYsSTRYIHYJxwN3QoC4BcmoqbOUO0&compressed'
    let url = base + address + suffix

    axios.get(url)
    .then((res) => {
      console.log(res.data)
      this.setState({ data: res.data }, () => {this.processData()})
    })
    .catch((e) => {
      console.log(e)
    });
  }

  processData = () => {
    // Sorting the divisions in the response so they're hopefully consistently in the same order with any address, and initializing variables.

    let sortObject = obj => Object.keys(obj).sort().reduce((res, key) => (res[key] = obj[key], res), {})
    let rawDistrictObj = sortObject(this.state.data.divisions)
    let districts = [], offices = [], officials = [], party = []

    // Get Districts, removing Country Name from response because it's redundant.

    for (let x in rawDistrictObj) {
      districts.push(rawDistrictObj[x].name)
    }
    districts.shift()

    // Forming arrays with the relevant information to pass to state so it can be displayed. Offices, Officials, and Party.

    this.state.data.offices.forEach(x => {
      offices.push(x.name)
    })

    this.state.data.officials.forEach(x => {
      // This is for adding the party letter before rendering, making the array 'Party' unnecessary.
      // officials.push(x.name + (x.party === 'Democratic Party' ? ' (D)' : x.party === 'Republican Party' ? ' (R)' : ' (I)'))
      officials.push(x.name)
      party.push(x.party)
    })

    // 'Offices' will always be shorter than 'Officers' because of multiple senators.

    offices.splice(1, 0, 'U.S. Senator')

    // Setting state with 'Districts', 'Offices', 'Officials', and 'Party' in the nested object 'gov' and segue into next function to display data.

    if (this.state.data.officials.length < 7) {
      this.setState({
        gov: {
          districts: districts,
          offices: offices,
          officials: officials,
          party: party
        },
        throwError: true
      }, () => this.storeData())
    } else if (this.state.data.officials.length === 7) {
      this.setState({
        gov: {
          districts: districts,
          offices: offices,
          officials: officials,
          party: party
        }
      }, () => this.storeData())
    } else if (this.state.data.officials.length === 8) {
      // Addresses can sometimes have two state representatives because of district borders - the first option includes the second state rep and the second option excludes them.
      // offices.splice(5, 0, this.state.data.offices[5].name)
      officials.splice(-1, 1)
      this.setState({
        gov: {
          districts: districts,
          offices: offices,
          officials: officials,
          party: party
        }
      }, () => this.storeData())
    } else if (this.state.data.officials.length > 8) {
      this.setState({
        gov: {
          districts: districts,
          offices: offices,
          officials: officials,
          party: party
        },
        throwError: true
      }, () => this.storeData())
    }
    // Note: Addresses registered to business won't return state-level officials.
  }
  
  render() {
    return (
      <Context.Provider
        value={{
          address: this.state.address,
          gov: this.state.gov,
          data: this.state.data,
          throwError: this.state.throwError,
          vote: this.state.vote,
          setTimer: this.setTimer,
          cLogAsync: this.cLogAsync,
          getData: this.getData,
          clearData: this.clearData,
          handleAddressFormChange: this.handleAddressFormChange,
          makeGETrequest: this.makeGETrequest
        }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}