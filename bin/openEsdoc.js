const {CliUtil} = require('@ys/collection')
const path = require('path')
const esdocConfig = require('../.esdoc.json')

const rootDir = path.resolve(__dirname, '../')
const {execSync} = CliUtil

const {destination} = esdocConfig
const indexAbsolutePath = path.resolve(rootDir, destination, 'index.html')
const cmd = `
  open ${indexAbsolutePath}
`
execSync(cmd)
