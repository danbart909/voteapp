import React from 'react';

export default React.createContext({
  address: '',
  dataResultsView: false,
  gov: {},
  data: {},
  throwError: false,
  vote: {},
  dataPage: {},
  setDataPage: () => {},
  setDataPageDates: () => {},
  setDataPageResponse: () => {},
  setNameFromRepCard: () => {},
  setResultsView: () => {},
  setTimer: () => {},
  cLogAsync: () => {},
  getData: () => {},
  clearData: () => {},
  handleAddressFormChange : () => {},
  makeGETrequest : () => {},
})