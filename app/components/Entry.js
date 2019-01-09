// @flow
import React, { Component } from 'react'

import db from '../store/ElecSqlite'

const {engine} = require('@lk/LK-C')

const LKApplication = engine.getApplication()
LKApplication.getCurrentApp().start(db,LKApplication.PLATFORM_ELECTRON)
type Props = {};

export default class Entry extends Component<Props> {
  props: Props;

  onClick = () => {
    this.props.history.push('/main')
  }

  render() {
    return <div style={{color: 'red'}}>
      <button onClick={this.onClick}>dosth</button>
    </div>
  }
}
