import React, { Component } from 'react'
import PublicHeader from '../../components/header/header'
import { is, fromJS } from 'immutable'
import './index.less'

export default class HelpCenter extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return (
      !is(fromJS(this.props), fromJS(nextProps)) ||
      !is(fromJS(this.state), fromJS(nextState))
    )
  }

  render() {
    return (
      <main>
        <PublicHeader title="帮助中心" record />
        <article className="context-con">
          <h2>介绍</h2>
          <p>本项目是练习react与react-redux</p>
          <p>
            使用的是creat-react-app搭建的项目 运用到的技术有 react redux webpack
            react-router ES6 axios less immutable
          </p>
          <p>
            项目地址{' '}
            <a href="https://github.com/xunloveo/react-redux-demo/">github</a>
          </p>
          <p>
            运行效果{' '}
            <a href="https://xunloveo.github.io/react-redux-demo/#/">demo</a>
          </p>
        </article>
      </main>
    )
  }
}
