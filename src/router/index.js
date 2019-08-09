import React, { Component } from 'react'
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom'
import asyncComponent from '../utils/asyncComponent'
import home from '../pages/home/home'

const production = asyncComponent(() => import('../pages/production/index'))

export default class RouterConfig extends Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route path="/" exact component={home} />
          <Route path="/production" component={production} />
        </Switch>
      </HashRouter>
    )
  }
}
