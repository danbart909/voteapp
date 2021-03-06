import { StyleSheet } from 'react-native';


export default StyleSheet.create({



  /*******************************************/
  /*************** Home Body 1 ***************/
  /*******************************************/



  scrollHome: {
    backgroundColor: 'darkslategray'
  },
  homeBody1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  homeClogButton: {
    backgroundColor: 'darkblue',
    width: 150,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  homeAsync1Button: {
    backgroundColor: 'orangered',
    width: 150,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  homeAsync2Button: {
    backgroundColor: 'indigo',
    width: 150,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  homeRepsButton: {
    backgroundColor: 'darkred',
    width: 150,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  homePollsButton: {
    backgroundColor: 'black',
    width: 150,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  homeElectionsButton: {
    backgroundColor: '#87510b',
    width: 150,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  homeDataButton: {
    backgroundColor: 'indigo',
    width: 150,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  homeWhiteText: {
    color: 'white'
  },



  /*******************************************/
  /*************** Reps Body 1 ***************/
  /*******************************************/



  rTop: {
    backgroundColor: 'darkslategray',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingTop: 10,
  },
  addressInput: {
    backgroundColor: 'white',
    color: 'black',
    padding: 5,
    marginBottom: 10,
    width: 250
  },
  formBot: {
    flexDirection: 'row'
  },
  addressInputState: {
    backgroundColor: 'white',
    color: 'black',
    padding: 5,
    marginBottom: 10,
    marginRight: 10,
    width: 120
  },
  addressInputZip: {
    backgroundColor: 'white',
    color: 'black',
    padding: 5,
    marginBottom: 10,
    width: 120
  },
  rButtonV: {
    flexDirection: 'row',
    paddingBottom: 10,
  },
  rButton: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'midnightblue',
    padding: 10,
  },
  rButton2: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'midnightblue',
    padding: 8,
    marginLeft: 10
  },
  rButtonTx: {
    justifyContent: 'center',
    color: 'white',
    fontSize: 16,
  },
  rButton2Tx: {
    justifyContent: 'center',
    color: 'white',
    fontSize: 12,
  },
  rTopDrawer: {
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  rTopDrawerButton: {
    // flex: 1,
    borderRightWidth: 1,
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'black',
    width: 200,
    height: 30,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'midnightblue'
  },
  rTopDrawerButtonTx: {
    color: 'white',
    alignSelf: 'center'
  },



  /*******************************************/
  /*************** Reps Body 2 ***************/
  /*******************************************/



  rBot: {
    backgroundColor: 'black',
    minHeight: '85%',
  },
  rAddress: {
    backgroundColor: '#251459',
    padding: 10,
    alignItems: 'center',
    marginTop: 15
  },
  rDistricts: {
    backgroundColor: '#251459',
    padding: 10,
    alignItems: 'center',
    marginTop: 15
  },
  rDistrictsTx: {
    color: 'white',
    fontSize: 12,
    paddingBottom: 5,
  },
  rInfoV: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: 15,
  },

  rInfoLeft: {
    // borderWidth: 1,
    // borderColor: 'white',
    flex: 1,
    height: 80,
    // width: 150,
    // justifyContent: 'space-between',
    // alignItems: 'center',
  },

  rInfoRight: {
    // borderWidth: 1,
    // borderColor: 'white',
    height: 80
  },

  rOffices: {
    borderWidth: 1,
    borderColor: 'green',
    backgroundColor: '#0b3d32',
    flex: 4,
    // width: 300,
    alignItems: 'flex-start',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'flex-start',
  },
  rOfficesTx: {
    color: 'white',
    fontSize: 12,
    paddingRight: 10,
    paddingLeft: 10,
  },

  rOfficialsD: {
    borderWidth: 1,
    borderColor: 'blue',
    backgroundColor: '#0b203d',
    flex: 6,
    alignItems: 'flex-start',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  rOfficialsR: {
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: '#400a13',
    flex: 6,
    alignItems: 'flex-start',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  rOfficialsI: {
    borderWidth: 1,
    borderColor: 'orange',
    backgroundColor: '#3b2a0a',
    flex: 6,
    alignItems: 'flex-start',
    justifyContent: 'center',
    textAlign: 'center',
    alignSelf: 'stretch',
  },
  rOfficialsTx: {
    color: 'white',
    fontSize: 14,
    paddingRight: 10,
    paddingLeft: 10,
  },

  rVote: {
    borderWidth: 1,
    borderColor: 'indigo',
    flex: 1,
    width: 100,
    backgroundColor: '#250040',
    justifyContent: 'center'
  },
  rVote2: {
    // borderWidth: 1,
    // borderColor: 'gold',
    flex: 1,
    width: 100,
    backgroundColor: '#4a0081',
    // flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  rVote2Top: {
    flexDirection: 'row'
  },
  rVote2Bot: {
    flexDirection: 'row'
  },
  rVoteTx: {
    color: 'white',
    justifyContent: 'center',
    textAlign: 'center',
    paddingRight: 10,
    paddingLeft: 10,
    fontSize: 12
  },
  // rVoteTx1: {
  //   color: 'white',
  //   justifyContent: 'center',
  //   textAlign: 'center',
  //   paddingRight: 10,
  //   paddingLeft: 10,
  //   fontSize: 12
  // },
  // rVoteTx2: {
  //   color: 'white',
  //   justifyContent: 'center',
  //   textAlign: 'center',
  //   paddingRight: 10,
  //   paddingLeft: 10,
  // },



  /******************************************/
  /*************** Info Modal ***************/
  /******************************************/



  mCenteredV: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mV: {
    width: 320,
    height: 400,
    backgroundColor: "black",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'indigo',
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  mButtonV: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: 'indigo',
  },
  mButtonClose: {
    borderRadius: 5,
    padding: 5,
    elevation: 2,
    width: 60,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#ed4a4f"
  },
  mButtonData: {
    borderRadius: 5,
    padding: 5,
    elevation: 2,
    width: 50,
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: '#0af52d'
  },
  mButtonText: {
    color: "black",
    alignSelf: 'center',
    textAlign: "center"
  },
  mtxtBlack: {
    fontSize: 12
  },
  mtxtWhite: {
    textAlign: 'center',
    color: 'white',
    fontSize: 12
  },
  mTop: {
    flex: 4,
  },
  mBottom: {
    flex: 6,
  },
  mOfficeV: {
    flex: 1,
    padding: 10,
    justifyContent: 'center'
  },
  mDV: {
    flex: 4,
    padding: 10,
    backgroundColor: 'navy',
    justifyContent: 'center'
  },
  mRV: {
    flex: 4,
    padding: 10,
    backgroundColor: 'darkred',
    justifyContent: 'center'
  },
  mIV: {
    flex: 4,
    padding: 10,
    backgroundColor: '#ceb011',
    justifyContent: 'center'
  },
  mNV: {
    flex: 4,
    padding: 10,
    justifyContent: 'center'
  },
  mURLV: {
    flex: 2,
    padding: 10,
    justifyContent: 'center'
  },
  mPhonesV: {
    flex: 2,
    padding: 10,
    justifyContent: 'center'
  },
  mSocialV: {
    flex: 3,
    padding: 10,
    justifyContent: 'space-around'
  },
  mSocialV2: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },



  /******************************************/
  /*************** Vote Modal ***************/
  /******************************************/



  m2CenteredV: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  m2V: {
    width: 400,
    height: 210,
    backgroundColor: "black",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'indigo',
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  m2Top: {
    flex: 1,
  },
  m2HeaderD: {
    backgroundColor: 'navy',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  m2HeaderR: {
    backgroundColor: 'darkred',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  m2HeaderI: {
    backgroundColor: '#ceb011',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  m2Header: {},
  m2Mid: {
    flex: 1,
  },
  m2Stars: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'row',
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  m2RadioUnchecked: {
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'black',
    height: 40,
    width: 30,
    justifyContent: 'center'
  },
  m2RadioChecked: {
    backgroundColor: 'white',
    height: 40,
    width: 30,
    justifyContent: 'center'
  },
  m2RadioTxt: {
    color: 'black',
    textAlign: 'center'
  },
  m2RadioTxt2: {
    color: 'white',
    textAlign: 'center'
  },
  m2Bot: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderTopWidth: 1,
    borderColor: 'indigo',
  },
  m2txtWhite: {
    color: 'white',
    textAlign: 'center'
  },
  m2ButtonClose: {
    backgroundColor: "#ed4a4f",
    borderRadius: 5,
    padding: 5,
    elevation: 2,
    width: 60,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  m2ButtonVote: {
    backgroundColor: '#0af52d',
    borderRadius: 5,
    padding: 5,
    elevation: 2,
    width: 50,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  m2ButtonCloseTxt: {
    color: "black",
    alignSelf: 'center',
    textAlign: "center"
  },
  m2ButtonVoteTxt: {
    color: "black",
    alignSelf: 'center',
    textAlign: "center"
  },



  /*****************************************/
  /*************** Elections ***************/
  /*****************************************/



  eScrollHome: {
    backgroundColor: '#082a20',
  },
  eBodyV: {
    flex: 1,
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },
  eBodyTx: {
    color: 'white'
  },



  /************************************/
  /*************** Data ***************/
  /************************************/



  dataTx: {
    color: 'white'
  },
  dataScrollHome: {
    backgroundColor: '#072b36',
  },

  dataHeaderV: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 15,
    paddingBottom: 8
  },

  dataHeaderFirst: {
    borderWidth: 1,
    borderColor: 'darkred',
    padding: 5
  },
  dataHeaderFirstActive: {
    backgroundColor: 'darkred',
    padding: 5
  },
  dataHeaderFirstTx: {
    color: 'white'
  },

  dataHeaderSecond: {
    borderWidth: 1,
    borderColor: 'teal',
    padding: 5
  },
  dataHeaderSecondActive: {
    backgroundColor: 'teal',
    padding: 5
  },
  dataHeaderSecondTx: {
    color: 'white'
  },

  dataHeaderThird: {
    borderWidth: 1,
    borderColor: 'gold',
    padding: 5
  },
  dataHeaderThirdActive: {
    backgroundColor: 'gold',
    padding: 5
  },
  dataHeaderThirdTx: {
    color: 'black'
  },

  dataHeaderFourth: {
    borderWidth: 1,
    borderColor: 'magenta',
    padding: 5
  },
  dataHeaderFourthActive: {
    backgroundColor: 'magenta',
    padding: 5
  },
  dataHeaderFourthTx: {
    color: 'black'
  },

  dataTopV: {
    // flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
  },

  dropDown: {
    height: 300
  },

  dataNameV: {
    // borderWidth: 1,
    // borderColor: 'red',
    backgroundColor: 'black',
    paddingTop: 5,
    paddingBottom: 5,
    alignItems: 'center'
  },
  dataNameInput: {
    backgroundColor: 'white',
    color: 'black',
    padding: 8.8,
    marginTop: 8,
    borderRadius: 5,
    width: 250
  },

  dataStateV: {
    backgroundColor: 'black',
    paddingVertical: 5,
    alignItems: 'center'
  },
  dataStateInput: {
    backgroundColor: 'white',
    color: 'black',
    padding: 8.8,
    marginTop: 8,
    borderRadius: 5,
    width: 250
  },

  dataOfficeV: { 
    backgroundColor: 'black',
    paddingVertical: 5,
    alignItems: 'center'
  },
  dataOfficeInput: {
    color: 'black',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    padding: 8.8,
    marginTop: 6,
    borderRadius: 5,
    width: 250,
    // zIndex: 5,
    // elevation: 5
  },

  dataOfficeStateV: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    // elevation: -1,
    // zIndex: -1,
    paddingTop: 5,
    paddingBottom: 5,
  },

  dataOfficeStateLeft: {
    // borderWidth: 1,
    // borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  dataOfficeStateRight: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  dataOfficeState1Input: {
    // borderWidth: 1,
    // borderColor: 'white',
    backgroundColor: 'white',
    color: 'black',
    // alignSelf: 'stretch',
    // flex: 1,
    width: 170,
    // paddingTop: 5,
    // paddingBottom: 5,
    // paddingLeft: 5,
    // paddingRight: 5,
    borderRadius: 5,
    // marginTop: 10,
    // marginRight: 2,
    // marginBottom: 3,
    padding: 8.8,
    marginTop: 8,
    borderRadius: 5,
  },

  dataOfficeState2Input: {
    color: 'black',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    padding: 8.8,
    marginTop: 6,
    borderRadius: 5,
    width: 170,
  },

  dataDatePickV: {
    // flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
    // justifyContent: 'stretch',
    justifyContent: 'space-evenly',
    // alignItems: '',
    zIndex: -1,
    elevation: -1,
    paddingTop: 15,
    paddingBottom: 15
  },

  dataDatePickFirst: {
    borderWidth: 1,
    borderColor: 'gold',
    padding: 5
  },
  dataDatePickFirstActive: {
    backgroundColor: 'gold',
    padding: 5
  },
  dataFirstActiveTx: {
    color: 'black'
  },

  dataDatePickSecond: {
    borderWidth: 1,
    borderColor: 'teal',
    padding: 5
  },
  dataDatePickSecondActive: {
    backgroundColor: 'teal',
    padding: 5
  },
  dataSecondActiveTx: {
    color: 'white'
  },

  dataDatePickThird: {
    borderWidth: 1,
    borderColor: 'orange',
    padding: 5
  },
  dataDatePickThirdActive: {
    backgroundColor: 'orange',
    padding: 5
  },
  dataThirdActiveTx: {
    color: 'black'
  },

  dataDatePickFourth: {
    borderWidth: 1,
    borderColor: 'darkred',
    padding: 5
  },
  dataDatePickFourthActive: {
    backgroundColor: 'darkred',
    padding: 5
  },
  dataFourthActiveTx: {
    color: 'white'
  },

  dataDateV: {
    flex: 1,
    backgroundColor: 'black',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    elevation: -1,
    zIndex: -1
  },

  dataDateLeft: {
    alignItems: 'center',
  },
  dataDateRight: {
    alignItems: 'center',
  },

  dataDate1Input: {
    backgroundColor: 'white',
    color: 'black',
    paddingTop: 12.5,
    paddingBottom: 12.5,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginTop: 7,
    marginRight: 2
  },

  dataDate2Input: {
    backgroundColor: 'white',
    color: 'black',
    paddingTop: 12.5,
    paddingBottom: 12.5,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
    marginTop: 7,
    marginLeft: 2
  },

  dataButtonV: {
    backgroundColor: 'black',
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    elevation: -1,
    zIndex: -1
  },
  dataButton: {
    borderWidth: 1,
    borderColor: 'white',
    alignItems: 'center',
    padding: 5,
    width: 80
  },

  dataBotV: {
    flex: 1,
    // backgroundColor: '#2b0000',
    // borderWidth: 1,
    // borderColor: 'magenta',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",
    elevation: -1,
    zIndex: -1
  },
  dataGraphLabelV: {
    backgroundColor: '#f5fcff',
  },
  dataGraphLabelTx: {
    color: 'black',
    padding: 10,
    textAlign: 'center'
  },




});