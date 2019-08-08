import React from 'react'
import ReactDOM from 'react-dom'
import Route from './router/'
import FastClick from 'fastclick'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import store from './store/store'

import * as serviceWorker from './serviceWorker'

// 移动端(快速)响应点击事件
FastClick.attach(document.body)

// const render = Component => {
//   ReactDOM.render(
//     // 绑定redux, 热加载
//     <Provider store={store}>
//       <AppContainer>
//         <Component />
//       </AppContainer>
//     </Provider>,
//     document.getElementById('root')
//   )
// }

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render(Route)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./router/', () => {
    render(Route)
  })
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
