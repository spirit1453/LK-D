/* eslint-disable import/no-dynamic-require, global-require */

const path = require('path')
const fs = require('fs')
const _ = require('lodash')

const unversionedPath = path.resolve(__dirname, 'unversioned.js')

const index = {
  dev: {
    maxmization: false,
    openDevtools: false,
    devToolsMode: 'bottom',
    fullscreen: false,
    waitToShow: 1000, // ms
  }
}
if (fs.existsSync(unversionedPath)) {
  _.merge(index, require(unversionedPath))
}
Object.freeze(index)
module.exports = index
