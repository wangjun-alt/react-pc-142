import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
// 导入antd样式文件
import 'antd/dist/antd.min.js'
// 引入index.scss文件
import './index.scss'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

