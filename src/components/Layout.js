import React from 'react'
import { Link } from "react-router-dom"
import { Layout, Menu } from 'antd'

import logo from '../logo.svg'
import NavigationHorizontal from './NavigationHorizontal'
import NavigationVertical from './NavigationVertical'
import '../scss/Layout.scss'

const { Header, Content, Sider } = Layout;

export default ({ children }) => (
        <Layout breakpoint={{ xs: '480px' }}>
          <Header
          style={{
            paddingLeft: '24px',
            paddingRight: '24px',
            height: '80px',
            display: 'flex',
            backgroundColor: 'black'
          }}>
          <div className='header'>
            <div id='logo-container'>
              <Link to="#">
                <img
                  src={logo}
                  alt='logo'
                  width='180px'
                  height='60px'
                />
              </Link>
            </div>
            <NavigationHorizontal />
          </div>
        </Header>
        <Layout>
          <Sider
            width={100}
            style={{ backgroundColor: '#000' }}
          >
          <NavigationVertical />
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}>
              { children }
            </Content>
          </Layout>
        </Layout>
      </Layout>
  )
