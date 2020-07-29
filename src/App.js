import React from 'react'
import Layout from './components/Layout'
import { BrowserRouter as Router } from 'react-router-dom'
import './scss/App.scss'
import 'antd/dist/antd.css'

const App = ({ children }) => {
  return (
    <Router>
      <Layout>
        {children}
      </Layout>
    </Router>
  )
}

export default App
