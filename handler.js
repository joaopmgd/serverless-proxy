'use strict';

const axios = require('axios');

module.exports.handle = async event => {
  const data = await axios.get('https://api.binance.com/api/v3/ticker/24hr')
  return data.data
};