import React from 'react'
import Layout from './components/Layout'
import { BrowserRouter as Router } from 'react-router-dom'
import Content from './components/Content'
import Store from './Store'

import './scss/App.scss'
import 'antd/dist/antd.css'

const App = ({ children }) => {

  return (
    <Store>
      <Router>
        <Layout>
          <Content />
        </Layout>
      </Router>
    </Store>
  )
}

export default App
