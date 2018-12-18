const path = require('path')
const rootDir = path.resolve(__dirname, '../')
const {ElectronUtil} = require('@ys/collection')
const {installSqlite} = ElectronUtil

const option = {
  rootDir
}
installSqlite(option)
