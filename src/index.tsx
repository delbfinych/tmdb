import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { Provider } from 'react-redux'
import { store } from './store'
import { HashRouter } from 'react-router-dom'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
