import React from 'react'
import { Switch, Route } from 'react-router'
import routes from './constants/routes'
import App from './containers/App'
import HomePage from './containers/HomePage'
import CounterPage from './containers/CounterPage'
import EntryPage from './containers/EntryPage'
import Main from './containers/Main'

export default () => {
  return (
    <App>
    <Switch>
      <Route path={routes.COUNTER} component={CounterPage} />
      <Route path={routes.HOME} component={HomePage} />
      <Route path={routes.ENTRY} component={EntryPage} />
      <Route path={routes.main} component={Main} />
    </Switch>
  </App>)
}
