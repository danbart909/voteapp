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
  homeGeneralsButton: {
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
  },
  rButtonV: {
    flexDirection: 'row',
    padding: 10,
  },
  rButton: {
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: 'midnightblue',
    padding: 10,
  },
  rButtonTx: {
    justifyContent: 'center',
    color: 'white',
    fontSize: 16,
  },



  /*******************************************/
  /*************** Reps Body 2 ***************/
  /*******************************************/



  rBot: {
    backgroundColor: 'black',
    minHeight: '85%',
  },
  rDistricts: {
    backgroundColor: '#251459',
    padding: 10,
    alignItems: 'center',
    marginTop: 15,
    marginBottom: 15
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
    // backgroundColor: "black",
  },
  mV: {
    width: 250,
    height: 400,
    backgroundColor: "black",
    borderRadius: 5,
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
  // mButton: {
  //   borderRadius: 5,
  //   padding: 5,
  //   elevation: 2,
  //   width: 50,
  //   alignSelf: 'center',
  //   marginTop: 10,
  //   marginBottom: 10
  // },
  mtxtBlack: {
    textAlign: "center",
    fontSize: 12
  },
  mtxtWhite: {
    textAlign: 'center',
    color: 'white',
    fontSize: 12
  },
  mButtonClose: {
    borderRadius: 5,
    padding: 5,
    elevation: 2,
    width: 50,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    backgroundColor: "#2196F3"
  },
  mButtonText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
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
    backgroundColor: 'black',
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
    backgroundColor: 'indigo',
    justifyContent: 'center'
  },
  mURLV: {
    flex: 2,
    padding: 10,
    backgroundColor: 'indigo',
    justifyContent: 'center'
  },
  mPhonesV: {
    flex: 2,
    padding: 10,
    backgroundColor: 'indigo',
    justifyContent: 'center'
  },
  mSocialV: {
    flex: 3,
    padding: 10,
    backgroundColor: 'indigo',
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
    width: 330,
    height: 210,
    backgroundColor: "white",
    borderRadius: 5,
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
    backgroundColor: 'black'
  },
  m2txtWhite: {
    color: 'white',
    textAlign: 'center'
  },
  m2ButtonClose: {
    backgroundColor: "#2196F3",
    borderRadius: 5,
    padding: 5,
    elevation: 2,
    width: 50,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  m2ButtonVote: {
    backgroundColor: "#961f0b",
    borderRadius: 5,
    padding: 5,
    elevation: 2,
    width: 50,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  m2ButtonCloseTxt: {
    color: 'white',
    textAlign: 'center'
  },
  m2ButtonVoteTxt: {
    color: 'white',
    textAlign: 'center'
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



  /****************************************/
  /*************** xxxxxxxx ***************/
  /****************************************/



  xScrollHome: {
    backgroundColor: '#072b36'
  },
  xBodyV: {
    borderWidth: 1,
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center'
  },


});