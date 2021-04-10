import React, { Component } from 'react'
import { Dimensions, Modal, ScrollView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import { VictoryBar, VictoryChart, VictoryLabel, VictoryTheme } from './Victory.js'
// import { VictoryBar, VictoryChart, VictoryLabel, VictoryTheme } from 'victory'
// import { VictoryBar, VictoryChart, VictoryLabel, VictoryTheme } from 'victory-native'
// import DropDownPicker from 'react-native-dropdown-picker'
import ModalSelector from 'react-native-modal-selector'
import axios from 'react-native-axios'
import Context from '../context/Context.js'
import styles from '../styles.js'

export default class Data extends Component {
  constructor(props) {
    super(props)
    this.state = { }

  }

  static contextType = Context

  submitQuery = () => {
    let { name, state, office, officeLabel, date1, date2, view1, view2, state2, office2, office2Label } = this.context.dataPage
    let urlName = name.replace(/[ ,.]/g, '')
    let newDate = new Date()
    let today = newDate.toISOString().slice(0, 10)
    let mainURL = '192.168.137.1:8000'
    // let mainURL = '10.0.0.144:8000'
    // let mainURL = '10.28.18.7:8000'
    // let mainURL = 'localhost:8000'

    // console.log(this.context.dataPage)
    // console.log(this.state.response)

    this.context.setResultsView()

    if (view1 === 'stateOffice' && (office2 === '' || state2 === '')) {
      alert('Please pick both a State and an Office when "State/Office" is selected.')
    } else if (view1 === 'name') {
      if (date1 !== '') {
        if (date2 !== '') {
          axios.get(`http://${mainURL}/${urlName}/${date1}/${date2}`)
            .then(x => {
              this.context.setDataPageResponse(x.data)
              this.setState({response: x.data})
              console.log('urlName/date1/date2', urlName, date1, date2, x.data)
            })
            .catch(err => console.log(36, 'bad', err))
        } else {
          axios.get(`http://${mainURL}/${urlName}/${date1}`)
            .then(x => {
              this.context.setDataPageResponse(x.data)
              this.setState({response: x.data})
              console.log('urlName/date1', urlName, date1, x.data)
            })
            .catch(err => console.log(40, 'bad', err))
        }
      } else {
        axios.get(`http://${mainURL}/${urlName}/${today}`)
          .then(x => {
            this.context.setDataPageResponse(x.data)
            this.setState({response: x.data})
            console.log('urlName/today', urlName, today, x.data)
          })
          .catch(err => console.log(45, 'bad', err))
      }
    } else if (view1 === 'state') {
      if (date1 !== '') {
        if (date2 !== '') {
          axios.get(`http://${mainURL}/${state}/${date1}/${date2}`)
            .then(x => {
              this.context.setDataPageResponse(x.data)
              this.setState({response: x.data})
              console.log('state/date1/date2', state, date1, date2, x)
            })
            .catch(err => console.log(52, 'bad', err))
        } else {
          axios.get(`http://${mainURL}/${state}/${date1}`)
            .then(x => {
              this.context.setDataPageResponse(x.data)
              this.setState({response: x.data})
              console.log('state/date1', state, date1, x)
            })
            .catch(err => console.log(56, 'bad', err))
        }
      } else {
        axios.get(`http://${mainURL}/${state}/${today}`)
          .then(x => {
            this.context.setDataPageResponse(x.data)
            this.setState({response: x.data})
            console.log('state/today', state, today, x)
          })
          .catch(err => console.log(61, 'bad', err))
      }
    } else if (view1 === 'office') {
      if (date1 !== '') {
        if (date2 !== '') {
          console.log(mainURL, '!')
          axios.get(`http://${mainURL}/${office}/${date1}/${date2}`)
            .then(x => {
              this.context.setDataPageResponse(x.data)
              this.setState({response: x.data})
              console.log('office/date1/date2', office, date1, date2, x)
            })
            .catch(err => console.log(68, 'bad', err))
        } else {
          axios.get(`http://${mainURL}/${office}/${date1}`)
            .then(x => {
              this.context.setDataPageResponse(x.data)
              this.setState({response: x.data})
              console.log('office/date1', office, date1, x)
            })
            .catch(err => console.log(72, 'bad', err))
        }
      } else {
        axios.get(`http://${mainURL}/${office}/${today}`)
          .then(x => {
            this.context.setDataPageResponse(x.data)
            this.setState({response: x.data})
            console.log('office/today', office, today, x)
          })
          .catch(err => console.log(77, 'bad', err))
      }
    } else if (view1 === 'stateOffice') {
      if (date1 !== '') {
        if (date2 !== '') {
          axios.get(`http://${mainURL}/${office2}/${state2}/${date1}/${date2}`)
            .then(x => {
              this.context.setDataPageResponse(x.data)
              this.setState({response: x.data})
              console.log('office2/state2/date1/date2', office2, date1, date2, x)
            })
            .catch(err => console.log(86, 'bad', err))
        } else {
          axios.get(`http://${mainURL}/${office2}/${state2}/${date1}`)
            .then(x => {
              this.context.setDataPageResponse(x.data)
              this.setState({response: x.data})
              console.log('office2/state2/date1', office2, date1, x)
            })
            .catch(err => console.log(90, 'bad', err))
        }
      } else {
        axios.get(`http://${mainURL}/${office2}/${state2}/${today}`)
          .then(x => {
            this.context.setDataPageResponse(x.data)
            this.setState({response: x.data})
            console.log('office2/state2/today', office, today, x)
          })
          .catch(err => console.log(95, 'bad', err))
      }
    }
  }

  today = () => {
    let freshDate = new Date()
    let today = freshDate.toISOString().slice(0, 10)
    this.context.setDataPageDates('', today, 'today')
  }

  lastWeek = () => {
    let freshDate = new Date()
    let today = freshDate.toISOString().slice(0, 10)
    let lastWeekRaw1 = freshDate.setDate(freshDate.getDate() - 7)
    let lastWeekRaw2 = new Date(lastWeekRaw1)
    let lastWeek = lastWeekRaw2.toISOString().slice(0, 10)
    this.context.setDataPageDates(lastWeek, today, 'week')
  }

  lastMonth = () => {
    let freshDate = new Date()
    let today = freshDate.toISOString().slice(0, 10)
    let lastMonthRaw1 = freshDate.setDate(freshDate.getDate() - 30)
    let lastMonthRaw2 = new Date(lastMonthRaw1)
    let lastMonth = lastMonthRaw2.toISOString().slice(0, 10)
    this.context.setDataPageDates(lastMonth, today, 'month')
  }

  range = () => {
    // let freshDate = new Date()
    // let today = freshDate.toISOString().slice(0, 10)
    this.context.setDataPageDates('', '', 'range')
  }

  renderResults = () => {
    let res = this.context.dataPage.response
    // let res = {
    //   name: 'Mayor McGooeyStickyPooPooPants Jr',
    //   from: '2021-02-24',
    //   to: '2021-03-26',
    //   one: 3,
    //   two: 4,
    //   three: 9,
    //   four: 13,
    //   five: 7,
    //   six: 10,
    //   seven: 19,
    //   eight: 5,
    //   nine: 7,
    //   ten: 8
    // }
    let data = [
      {x: 1, y: res.one, label: res.one},
      {x: 2, y: res.two, label: res.two},
      {x: 3, y: res.three, label: res.three},
      {x: 4, y: res.four, label: res.four},
      {x: 5, y: res.five, label: res.five},
      {x: 6, y: res.six, label: res.six},
      {x: 7, y: res.seven, label: res.seven},
      {x: 8, y: res.eight, label: res.eight},
      {x: 9, y: res.nine, label: res.nine},
      {x: 10, y: res.ten, label: res.ten},
    ]

    // console.log('Data.js -> renderResults()', res, data)

    // let html = []
    // for (let key of Object.keys(res)) {
    //   html.push(<Text style={styles.dataTx}>{key}: {res[key]}</Text>)
    // }

    return (
      <>
        <View style={styles.dataGraphLabelV}>
          <Text style={styles.dataGraphLabelTx}>{this.graphLabel(res)}</Text>
        </View>
        <VictoryChart
          domainPadding={{ x: [10, 10], y: [0, 25] }}
          padding={{ top: 0, bottom: 40, left: 40, right: 40 }}
        >
          <VictoryBar
            barRatio={0.8}
            style={{
              data: {
                fill: 'black'
              }
            }}
            data={data}
            labelComponent={
              <VictoryLabel
                dy={-10}
                style={{
                  fill: 'black',
                  alignmentBaseline: 'central'
                }}
              />
            }
          />
        </VictoryChart>
      </>
    )
  }

  graphLabel = (x) => {
    let SoO1 = '', SoO2 = '', html = '', html2 = ''

    if (x.name) {
      SoO1 = x.name
    } else if (x.state && !x.office) {
      SoO1 = x.state
    } else if (x.state && x.office) {
      SoO1 = x.state
      SoO2 = x.office
    } else if (x.office && !x.state) {
      SoO1 = x.office
    }

    (SoO1 !== '' && SoO2 === '') ? (html = `Ratings for ${SoO1}`) : (html = `Ratings for ${SoO1} and ${SoO2}`)

    if (x.date) {
      html2 = ` for ${x.date}`
    } else if (!x.date && x.from && x.to) {
      html2 = ` from ${x.from} to ${x.to}`
    } else {
      html2 = ``
    }

    return [html+html2]
  }
  
  render() {

    let { name, state, office, officeLabel, date1, date2, view1, view2, state2, office2, office2Label, response } = this.context.dataPage

    let dropDownData = [
      { key: 0, label: 'President', value: 'President' },
      { key: 1, label: 'US Senator', value: 'USSenator' },
      { key: 2, label: 'US Representative', value: 'USRepresentative' },
      { key: 3, label: 'Governor', value: 'Governor' },
      { key: 4, label: 'State Senator', value: 'StateSenator' },
      { key: 5, label: 'State Representative', value: 'StateRepresentative' }
    ]

    return (
      <ScrollView style={styles.dataScrollHome}>

        <View style={styles.dataTopV}>

          <View style={styles.dataHeaderV}>
            <TouchableOpacity
              style={view1 === 'name' ? styles.dataHeaderFirstActive : styles.dataHeaderFirst}
              onPress={() => this.context.setDataPage(name, state, office, officeLabel, date1, date2, 'name', view2, state2, office2, office2Label, response)}
            >
              <Text style={view1 === 'name' ? styles.dataHeaderFirstTx : styles.dataTx}>Name</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={view1 === 'state' ? styles.dataHeaderSecondActive : styles.dataHeaderSecond}
              onPress={() => this.context.setDataPage(name, state, office, officeLabel, date1, date2, 'state', view2, state2, office2, office2Label, response)}
            >
              <Text style={view1 === 'state' ? styles.dataHeaderSecondTx : styles.dataTx}>State</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={view1 === 'office' ? styles.dataHeaderThirdActive : styles.dataHeaderThird}
              onPress={() => {
                this.context.setDataPage(name, state, office, officeLabel, date1, date2, 'office', view2, state2, office2, office2Label, response)
              }}
            >
              <Text style={view1 === 'office' ? styles.dataHeaderThirdTx : styles.dataTx}>Office</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={view1 === 'stateOffice' ? styles.dataHeaderFourthActive : styles.dataHeaderFourth}
              onPress={() => this.context.setDataPage(name, state, office, officeLabel, date1, date2, 'stateOffice', view2, state2, office2, office2Label, response)}
            >
              <Text style={view1 === 'stateOffice' ? styles.dataHeaderFourthTx : styles.dataTx}>State/Office</Text>
            </TouchableOpacity>
          </View>

          { view1 === 'name' && <View style={styles.dataNameV}>
            <Text style={styles.dataTx}>Search by Name</Text>
            <TextInput
              style={styles.dataNameInput}
              onChangeText={(x) => this.context.setDataPage(x, state, office, officeLabel, date1, date2, view1, view2, state2, office2, office2Label, response)}
              value={name}
              placeholder='Mary Frances Williams'
              placeholderTextColor='silver'
            />
          </View> }

          { view1 === 'state' && <View style={styles.dataStateV}>
            <Text style={styles.dataTx}>Search by State</Text>
            <TextInput
              style={styles.dataStateInput}
              onChangeText={(x) => this.context.setDataPage(name, x, office, officeLabel, date1, date2, view1, view2, state2, office2, office2Label, response)}
              value={state}
              placeholder='GA'
              placeholderTextColor='silver'
            />
          </View> }

          { view1 === 'office' && <View style={styles.dataOfficeV}>
            <Text style={styles.dataTx}>Search by Office</Text>
            <ModalSelector
              // keyExtractor={ x => x.label }
              // labelExtractor={ x => x.label }
              data={dropDownData}
              initValue='Touch to Select'
              onChange={ x => this.context.setDataPage(name, state, x.value, x.label, date1, date2, view1, view2, state2, office2, office2Label, response) }
            >
              <TextInput
                style={styles.dataOfficeInput}
                editable={false}
                placeholder='Touch to Select'
                value={this.context.dataPage.officeLabel}
              />
            </ModalSelector>
          </View> }

          { view1 === 'stateOffice' && <View style={styles.dataOfficeStateV}>
            <View style={styles.dataOfficeStateLeft}>
              <Text style={styles.dataTx}>State</Text>
              <TextInput
                style={styles.dataOfficeState1Input}
                onChangeText={ x => this.context.setDataPage(name, state, office, officeLabel, date1, date2, view1, view2, x, office2, office2Label, response) }
                value={state2}
                placeholder='GA'
                placeholderTextColor='silver'
              />
            </View>
            <View style={styles.dataOfficeStateRight}>
              <Text style={styles.dataTx}>Office</Text>
              <ModalSelector
                data={dropDownData}
                initValue='Touch to Select'
                onChange={ x => this.context.setDataPage(name, state, office, officeLabel, date1, date2, view1, view2, state2, x.value, x.label, response) }
              >
                <TextInput
                  style={styles.dataOfficeState2Input}
                  editable={false}
                  placeholder='Touch to Select'
                  value={this.context.dataPage.office2Label}
                />
              </ModalSelector>
            </View>
          </View> }

          <View style={styles.dataDatePickV}>
            <TouchableOpacity
              style={view2 === 'today' ? styles.dataDatePickFirstActive : styles.dataDatePickFirst}
              onPress={() => this.today()}
            >
              <Text style={view2 === 'today' ? styles.dataFirstActiveTx : styles.dataTx}>Today</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={view2 === 'week' ? styles.dataDatePickSecondActive : styles.dataDatePickSecond}
              onPress={() => this.lastWeek()}
            >
              <Text style={view2 === 'week' ? styles.dataSecondActiveTx : styles.dataTx}>Last 7 Days</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={view2 === 'month' ? styles.dataDatePickThirdActive : styles.dataDatePickThird}
              onPress={() => this.lastMonth()}
            >
              <Text style={view2 === 'month' ? styles.dataThirdActiveTx : styles.dataTx}>Last 30 Days</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={view2 === 'range' ? styles.dataDatePickFourthActive : styles.dataDatePickFourth}
              onPress={() => this.range()}
            >
              <Text style={view2 === 'range' ? styles.dataFourthActiveTx : styles.dataTx}>Custom Range</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.dataDateV}>
            <View style={styles.dataDateLeft}>
              <Text style={styles.dataTx}>From Date</Text>
              <TextInput
                style={styles.dataDate1Input}
                onChangeText={(x) => this.context.setDataPageDates(x, date2, 'range')}
                value={date1}
                placeholder='YYYY-MM-DD'
                placeholderTextColor='silver'
              />
            </View>
            <View style={styles.dataDateRight}>
              <Text style={styles.dataTx}>To Date</Text>
              <TextInput
                style={styles.dataDate2Input}
                onChangeText={(x) => this.context.setDataPageDates(date1, x, 'range')}
                value={date2}
                placeholder='YYYY-MM-DD'
                placeholderTextColor='silver'
              />
            </View>
          </View>

          <View style={styles.dataButtonV}>
            <TouchableOpacity
              style={styles.dataButton}
              onPress={() => this.submitQuery()}
            >
              <Text style={styles.dataTx}>Search</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.dataBotV}>
          {/* {this.context.dataPage.response.one && this.renderResults()} */}
          {this.context.dataResultsView && this.renderResults()}
          {/* {this.renderResults()} */}
        </View>

      </ScrollView>
    )
  }
}



// let data = [
//   {x: 1, y: (res.one || 0), label: (res.one || 0)},
//   {x: 2, y: (res.two || 0), label: (res.two || 0)},
//   {x: 3, y: (res.three || 0), label: (res.three || 0)},
//   {x: 4, y: (res.four || 0), label: (res.four || 0)},
//   {x: 5, y: (res.five || 0), label: (res.five || 0)},
//   {x: 6, y: (res.six || 0), label: (res.six || 0)},
//   {x: 7, y: (res.seven || 0), label: (res.seven || 0)},
//   {x: 8, y: (res.eight || 0), label: (res.eight || 0)},
//   {x: 9, y: (res.nine || 0), label: (res.nine || 0)},
//   {x: 10, y: (res.ten || 0), label: (res.ten || 0)},
// ]


// <DropDownPicker
//   items={dropDownData}
//   defaultValue={office}
//   containerStyle={styles.dataOfficeInput}
//   style={styles.dataOfficeInputPicker}
//   dropDownStyle={styles.dataOfficeInputDropdown}
//   dropDownMaxHeight={225}
//   onChangeItem={ x => this.context.setDataPage(name, state, x.value, date1, date2, view1, view2, state2, office2, response) }
// />

// <DropDownPicker
//   items={dropDownData}
//   defaultValue={office2}
//   containerStyle={styles.dataOfficeState2Input}
//   style={styles.dataOfficeState2Picker}
//   dropDownStyle={styles.dataOfficeState2InputDropdown}
//   dropDownMaxHeight={225}
//   onChangeItem={x => this.context.setDataPage(name, state, office, date1, date2, view1, view2, state2, x.value, response) }
// />