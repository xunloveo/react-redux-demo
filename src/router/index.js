import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from '../utils/asyncComponent'
import home from '../pages/home/home'

const production = asyncComponent(() => import('../pages/production/index'))
const balance = asyncComponent(() => import('../pages/balance'))
const help = asyncComponent(() => import('../pages/help'))

export default class RouterConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/production" component={production} />
          <Route path="/balance" component={balance} />
          <Route path="/helpcenter" component={help} />
          <Redirect to="/" />
        </Switch>
      </HashRouter>
    )
  }
}
