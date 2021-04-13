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
      // address: '1820 Tree Top Way Marietta GA 30062',
      address: '1822 Tree Top Way Marietta GA 30062',
      // address: '',
      // name: '',
      // date1: '',
      // date2: '',
      dataResultsView: false,
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
      },
      dataPage: {
        name: '',
        state: '',
        office: '',
        officeLabel: '',
        date1: '',
        date2: '',
        view1: 'office',
        view2: 'month',
        state2: '',
        office2: '',
        office2Label: ''
      },
      dataPageResponse: {
        name: '',
        office: '',
        state: '',
        from: '',
        to: '',
        one: 0,
        two: 0,
        three: 0,
        four: 0,
        five: 0,
        six: 0,
        seven: 0,
        eight: 0,
        nine: 0,
        ten: 0
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

  setDataPage = (name, state, office, officeLabel, date1, date2, view1, view2, state2, office2, office2Label) => {
    this.setState({
      dataPage: {
        name: name,
        state: state,
        office: office,
        officeLabel: officeLabel,
        date1: date1,
        date2: date2,
        view1: view1,
        view2: view2,
        state2: state2,
        office2: office2,
        office2Label: office2Label
      }
    }, () => console.log(this.state))
    // })
  }

  setDataState = (x) => {
    this.setState({ dataPage: { state: x } })
  }

  setDataPageDates = (date1, date2, view) => {
    this.setState({
      dataPage: {
        ...this.state.dataPage,
        date1: date1,
        date2: date2,
        view2: view
      }
    // }, () => console.log(this.state))
    })
  }

  setDataPageResponse = (x) => {
    this.setState({ dataPageResponse: x }, () => console.log('GlobalState - 117 - setDataPageResponse', x, this.state.dataPageResponse))
  }

  setNameFromRepCard = (name) => {
    let freshDate = new Date()
    let today = freshDate.toISOString().slice(0, 10)
    let lastWeekRaw1 = freshDate.setDate(freshDate.getDate() - 7)
    let lastWeekRaw2 = new Date(lastWeekRaw1)
    let lastWeek = lastWeekRaw2.toISOString().slice(0, 10)
    this.setState({
      dataPage: {
        ...this.state.dataPage,
        name: name,
        date1: lastWeek,
        date2: today,
        view1: 'name',
        view2: 'week'
      }
    // }, () => console.log(this.state))
    })
  }

  setResultsView = () => {
    this.setState({ dataResultsView: true })
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
      // console.log(res.data)
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
      // This is for adding the party letter before rendering, making the array 'Party' unnecessary, but saving this render for later seems to be more prudent at the moment.
      // officials.push(x.name + (x.party === 'Democratic Party' ? ' (D)' : x.party === 'Republican Party' ? ' (R)' : ' (I)'))
      officials.push(x.name)
      party.push(x.party)
    })

    // 'Offices' will always be shorter than 'Officers' because of an additional senator.

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
          dataResultsView: this.state.dataResultsView,
          gov: this.state.gov,
          data: this.state.data,
          throwError: this.state.throwError,
          vote: this.state.vote,
          dataPage: this.state.dataPage,
          dataPageResponse: this.state.dataPageResponse,
          setDataPage: this.setDataPage,
          setDataPageDates: this.setDataPageDates,
          setDataPageResponse: this.setDataPageResponse,
          setNameFromRepCard: this.setNameFromRepCard,
          setResultsView: this.setResultsView,
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