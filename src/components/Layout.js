import React, { Fragment } from 'react'
import { Link } from "react-router-dom"

import { Layout, Menu, Row, Col } from 'antd'
import logo from '../logo.svg'
import Navigation from './Navigation'
import '../scss/Layout.scss'

const { Header, Content, Sider, Footer } = Layout;

export default ({ children }) => (
        <Layout breakpoint={{ xs: '480px' }}>
          <Header
          style={{
            paddingLeft: '24px',
            paddingRight: '24px',
            backgroundImage:
            'linear-gradient(116deg, rgb(84, 197, 180) 0%, rgb(31, 138, 158) 100%)',
          }}>
          <Row
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Fragment>
              <Col md={10} xs={14}>
                <Link to="#">
                  <img
                    src={logo}
                    alt='logo'
                    width='90px'
                  />
                </Link>
              </Col>
              <Col md={12} xs={2}>
                <span />
              </Col>
              <Col md={2} xs={8} style={{textAlign: 'right'}}>
                <Navigation />
              </Col>
            </Fragment>
          </Row>
        </Header>
        <Layout>
          <Sider
            width={200}
            style={{ background: '#fff' }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}>
              <Menu.Item key="1">
                {/* <Icon type="book" /> */}
                Icon1
                <Link to="#vertical1" />
              </Menu.Item>
              <Menu.Item key="2">
                {/* <Icon type="book" /> */}
                Icon2
                <Link to="#vertical2" />
              </Menu.Item>
              <Menu.Item key="3">
                {/* <Icon type="bars" /> */}
                Icon3
                <Link to="#vertical3" />
              </Menu.Item>
              <Menu.Item key="4">
                {/* <Icon type="form" /> */}
                Icon4
                <Link to="#vertical4" />
              </Menu.Item>
            </Menu>
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
