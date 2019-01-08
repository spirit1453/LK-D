const path = require('path')
const {ElectronUtil} = require('@ys/collection')

const rootDir = path.resolve(__dirname, '../')
const {installSqlite} = ElectronUtil

const option = {
  rootDir
}
installSqlite(option)
