// @flow
import React, { Component } from 'react'
import db from '../store/ElecSqlite'

// import { Link } from 'react-router-dom'
// import routes from '../constants/routes'
import styles from './Home.less'

const {engine} = require('@lk/LK-C')

const LKApplication = engine.getApplication()
LKApplication.getCurrentApp().start(db,LKApplication.PLATFORM_ELECTRON)
type Props = {};

export default class Home extends Component<Props> {
  props: Props

  render() {
        // <Link to={routes.COUNTER}>to Counter</Link>

    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
      </div>
    )
  }
}
