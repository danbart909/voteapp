import React from 'react';

export default React.createContext({
  address: '',
  districts: [],
  gov: {},
  data: {},
  throwError: false,
  vote: {},
  setTimer: () => {},
  cLogAsync: () => {},
  getData: () => {},
  clearData: () => {},
  handleAddressFormChange : () => {},
  makeGETrequest : () => {},
})