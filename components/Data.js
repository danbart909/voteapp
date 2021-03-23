import React, { Component } from 'react'
import { Dimensions, Modal, ScrollView, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import { LineChart, BarChart, PieChart, ProgressChart, ContributionGraph, StackedBarChart } from "react-native-chart-kit"
import DropDownPicker from 'react-native-dropdown-picker'
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
    let { name, state, office, date1, date2, view1, view2, state2, office2 } = this.context.dataPage
    let urlName = name.replace(/[ ,.]/g, '')
    let newDate = new Date()
    let today = newDate.toISOString().slice(0, 10)

    // console.log('query', this.state)

    this.context.setResultsView()

    if (view1 === 'stateOffice' && (office2 === '' || state2 === '')) {
      alert('Please pick both a State and an Office when "State/Office" is selected.')
    } else if (view1 === 'name') {
      if (date1 !== '') {
        if (date2 !== '') {
          axios.get(`http://localhost:8000/${urlName}/${date1}/${date2}`)
            // .then(x => this.setState({ response: x.data }))
            .then(x => this.context.setDataPageResponse(x.data), console.log('urlName/date1/date2', urlName, date1, date2))
            .catch(err => console.log(36, 'bad', err))
        } else {
          axios.get(`http://localhost:8000/${urlName}/${date1}`)
            // .then(x => this.setState({ response: x.data }))
            .then(x => this.context.setDataPageResponse(x.data), console.log('urlName/date1', urlName, date1))
            .catch(err => console.log(40, 'bad', err))
        }
      } else {
        axios.get(`http://localhost:8000/${urlName}/${today}`)
          // .then(x => this.setState({ response: x.data }))
          .then(x => this.context.setDataPageResponse(x.data), console.log('urlName/today', urlName, today))
          .catch(err => console.log(45, 'bad', err))
      }
    } else if (view1 === 'state') {
      if (date1 !== '') {
        if (date2 !== '') {
          axios.get(`http://localhost:8000/${state}/${date1}/${date2}`)
            // .then(x => this.setState({ response: x.data }))
            .then(x => this.context.setDataPageResponse(x.data), console.log('state/date1/date2', state, date1, date2))
            .catch(err => console.log(52, 'bad', err))
        } else {
          axios.get(`http://localhost:8000/${state}/${date1}`)
            // .then(x => this.setState({ response: x.data }))
            .then(x => this.context.setDataPageResponse(x.data), console.log('state/date1', state, date1))
            .catch(err => console.log(56, 'bad', err))
        }
      } else {
        axios.get(`http://localhost:8000/${state}/${today}`)
          // .then(x => this.setState({ response: x.data }))
          .then(x => this.context.setDataPageResponse(x.data), console.log('state/today', state, today))
          .catch(err => console.log(61, 'bad', err))
      }
    } else if (view1 === 'office') {
      if (date1 !== '') {
        if (date2 !== '') {
          axios.get(`http://localhost:8000/${office}/${date1}/${date2}`)
            // .then(x => this.setState({ response: x.data }))
            .then(x => this.context.setDataPageResponse(x.data), console.log('office/date1/date2', office, date1, date2))
            .catch(err => console.log(68, 'bad', err))
        } else {
          axios.get(`http://localhost:8000/${office}/${date1}`)
            // .then(x => this.setState({ response: x.data }))
            .then(x => this.context.setDataPageResponse(x.data), console.log('office/date1', office, date1))
            .catch(err => console.log(72, 'bad', err))
        }
      } else {
        axios.get(`http://localhost:8000/${office}/${today}`)
          // .then(x => this.setState({ response: x.data }))
          .then(x => this.context.setDataPageResponse(x.data), console.log('office/today', office, today))
          .catch(err => console.log(77, 'bad', err))
      }
    } else if (view1 === 'stateOffice') {
      if (date1 !== '') {
        if (date2 !== '') {
          axios.get(`http://localhost:8000/${office2}/${state2}/${date1}/${date2}`)
            // .then(x => this.setState({ response: x.data }))
            .then(x => this.context.setDataPageResponse(x.data), console.log('office2/state2/date1/date2', office2, date1, date2))
            .catch(err => console.log(86, 'bad', err))
        } else {
          axios.get(`http://localhost:8000/${office2}/${state2}/${date1}`)
            // .then(x => this.setState({ response: x.data }))
            .then(x => this.context.setDataPageResponse(x.data), console.log('office2/state2/date1', office2, date1))
            .catch(err => console.log(90, 'bad', err))
        }
      } else {
        axios.get(`http://localhost:8000/${office2}/${state2}/${today}`)
            // .then(x => this.setState({ response: x.data }))
            .then(x => this.context.setDataPageResponse(x.data), console.log('office2/state2/today', office, today))
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
    let html = []
    let screenWidth = Dimensions.get("window").width
    let chartConfig = {
      backgroundGradientFrom: "#1E2923",
      backgroundGradientFromOpacity: 0,
      backgroundGradientTo: "#08130D",
      backgroundGradientToOpacity: 0.5,
      color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
      strokeWidth: 2, // optional, default 3
      barPercentage: 0.5,
      useShadowColorFromDataset: false // optional
    }
    let data = {
      labels: [`1: (${res.one})`, `2: (${res.two})`, , `3: (${res.three})`, `4: (${res.four})`, `5: (${res.five})`, `6: (${res.six})`, `7: (${res.seven})`, `8: (${res.eight})`, `9: (${res.nine})`, `10: (${res.ten})`],
      datasets: [
        {
          data: [res.one, res.two, res.three, res.four, res.five, res.six, res.seven, res.eight, res.nine, res.ten],
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
          strokeWidth: 2 // optional
        }
      ],
      // legend: [`Votes for ${res.name || res.state || res.office}`]
      legend: this.graphLabel(res)
    }

    console.log(res)

    for (let key of Object.keys(res)) {
      html.push(<Text style={styles.dataTx}>{key}: {res[key]}</Text>)
    }

    return (
      <LineChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
      />
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
      SoO1 = 'Error?'
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

    let { name, state, office, date1, date2, view1, view2, state2, office2, response } = this.context.dataPage

    let dropDownData = [
      { label: 'President', value: 'President' },
      { label: 'US Senator', value: 'USSenator' },
      { label: 'US Representative', value: 'USRepresentative' },
      { label: 'Governor', value: 'Governor' },
      { label: 'State Senator', value: 'StateSenator' },
      { label: 'State Representative', value: 'StateRepresentative' }
    ]

    return (
      <ScrollView style={styles.dataScrollHome}>

        <View style={styles.dataTopV}>

          <View style={styles.dataHeaderV}>
            <TouchableOpacity
              style={view1 === 'name' ? styles.dataHeaderFirstActive : styles.dataHeaderFirst}
              onPress={() => this.context.setDataPage(name, state, office, date1, date2, 'name', view2, state2, office2, response)}
            >
              <Text style={view1 === 'name' ? styles.dataHeaderFirstTx : styles.dataTx}>Name</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={view1 === 'state' ? styles.dataHeaderSecondActive : styles.dataHeaderSecond}
              onPress={() => this.context.setDataPage(name, state, office, date1, date2, 'state', view2, state2, office2, response)}
            >
              <Text style={view1 === 'state' ? styles.dataHeaderSecondTx : styles.dataTx}>State</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={view1 === 'office' ? styles.dataHeaderThirdActive : styles.dataHeaderThird}
              onPress={() => this.context.setDataPage(name, state, office, date1, date2, 'office', view2, state2, office2, response)}
            >
              <Text style={view1 === 'office' ? styles.dataHeaderThirdTx : styles.dataTx}>Office</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={view1 === 'stateOffice' ? styles.dataHeaderFourthActive : styles.dataHeaderFourth}
              onPress={() => this.context.setDataPage(name, state, office, date1, date2, 'stateOffice', view2, state2, office2, response)}
            >
              <Text style={view1 === 'stateOffice' ? styles.dataHeaderFourthTx : styles.dataTx}>State/Office</Text>
            </TouchableOpacity>
          </View>

          { view1 === 'name' && <View style={styles.dataNameV}>
            <Text style={styles.dataTx}>Search by Name</Text>
            <TextInput
              style={styles.dataNameInput}
              onChangeText={(x) => this.context.setDataPage(x, state, office, date1, date2, view1, view2, state2, office2, response)}
              value={name}
              placeholder='Mary Frances Williams'
              placeholderTextColor='silver'
            />
          </View> }

          { view1 === 'state' && <View style={styles.dataStateV}>
            <Text style={styles.dataTx}>Search by State</Text>
            <TextInput
              style={styles.dataStateInput}
              onChangeText={(x) => this.context.setDataPage(name, x, office, date1, date2, view1, view2, state2, office2, response)}
              value={state}
              placeholder='GA'
              placeholderTextColor='silver'
            />
          </View> }

          { view1 === 'office' && <View style={styles.dataOfficeV}>
            <Text style={styles.dataTx}>Search by Office</Text>
            <DropDownPicker
              items={dropDownData}
              defaultValue={office}
              style={styles.dataOfficeInput}
              dropDownMaxHeight={225}
              onChangeItem={ x => this.context.setDataPage(name, state, x.value, date1, date2, view1, view2, state2, office2, response) }
            />
          </View> }

          { view1 === 'stateOffice' && <View style={styles.dataOfficeStateV}>
            <View style={styles.dataOfficeStateLeft}>
              <Text style={styles.dataTx}>State</Text>
              <TextInput
                style={styles.dataOfficeState1Input}
                onChangeText={(x) => this.context.setDataPage(name, state, office, date1, date2, view1, view2, x, office2, response)}
                value={state2}
                placeholder='GA'
                placeholderTextColor='silver'
              />
            </View>
            <View style={styles.dataOfficeStateRight}>
              <Text style={styles.dataTx}>Office</Text>
              <DropDownPicker
                items={dropDownData}
                defaultValue={office2}
                style={styles.dataOfficeState2Input}
                dropDownMaxHeight={225}
                onChangeItem={x => this.context.setDataPage(name, state, office, date1, date2, view1, view2, state2, x.value, response) }
              />
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
          {this.context.dataResultsView && this.renderResults()}
        </View>

      </ScrollView>
    )
  }
}