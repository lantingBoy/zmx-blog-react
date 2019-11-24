import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './index.less'
import { Menu, Icon, Layout, Row, Col } from 'antd'

import logo from '@/assets/img/user.gif'
const { SubMenu } = Menu
const { Header } = Layout
class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuCurrent: '',
      navTitle: '首页'
    }
  }
  componentDidMount() {
    this.initMenu(this.props.pathname)
  }
  handleMenu = e => {
    this.setState({
      menuCurrent: e.key
    })
  }

  initMenu(name) {
    let key = '9'
    let navTitle = ''
    if (name === '/') {
      key = '9'
      navTitle = '首页'
    } else if (name === '/articles') {
      key = '1'
      navTitle = '文章'
    } else if (name === '/hot') {
      key = '2'
      navTitle = '热门'
    } else if (name === '/timeLine') {
      key = '3'
      navTitle = '历程'
    } else if (name === '/message') {
      key = '4'
      navTitle = '留言'
    } else if (name === '/about') {
      key = '5'
      navTitle = '关于我'
    } else if (name === '/articleDetail') {
      key = '6'
      navTitle = '文章详情'
    } else if (name === '/project') {
      key = '7'
      navTitle = '项目'
    } else if (name === '/archive') {
      key = '8'
      navTitle = '归档'
    }
    this.setState({
      navTitle,
      menuCurrent: key
    })
  }
  render() {
    return (
      <div>
        <Header
          className="header"
          style={{
            position: 'fixed',
            zIndex: 1,
            top: 0,
            width: '100%',
            minWidth: '1200px',
            height: '66px',
            float: 'left',
            backgroundColor: 'white',
            borderBottom: '1px solid #eee'
          }}
        >
          <Row className="container">
            <Col style={{ width: '120px', float: 'left' }}>
              <a href="http://zhoumengxiang.xujielisc.wang/main.html">
                <div>
                  <img
                    src={logo}
                    alt=""
                    style={{ width: '55px', borderRadius: '50%' }}
                  />
                </div>
              </a>
            </Col>
            <Col style={{ width: '780px', float: 'left' }}>
              <Menu
                theme="light"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                onClick={this.handleMenu.bind(this)}
                selectedKeys={[this.state.menuCurrent]}
                style={{ lineHeight: '64px', borderBottom: 'none' }}
              >
                <Menu.Item key="9">
                  <Link to="/">
                    <Icon type="home" theme="outlined" />
                    首页
                  </Link>
                </Menu.Item>
                <Menu.Item key="1">
                  <Link to="/articles">
                    <Icon type="ordered-list" theme="outlined" />
                    文章
                  </Link>
                </Menu.Item>
                <Menu.Item key="2">
                  <Link to="/hot">
                    <Icon type="fire" theme="outlined" />
                    热门
                  </Link>
                </Menu.Item>
                <Menu.Item key="8">
                  <Link to="/archive">
                    <Icon type="project" theme="outlined" />
                    归档
                  </Link>
                </Menu.Item>
                <Menu.Item key="7">
                  <Link to="/project">
                    <Icon type="database" theme="outlined" />
                    项目
                  </Link>
                </Menu.Item>
                <Menu.Item key="3">
                  <Link to="/timeLine">
                    <Icon type="hourglass" theme="outlined" />
                    历程
                  </Link>
                </Menu.Item>
                <Menu.Item key="4">
                  <Link to="/message">
                    <Icon type="message" theme="outlined" />
                    留言
                  </Link>
                </Menu.Item>
                <Menu.Item key="5">
                  <Link to="/about">
                    <Icon type="user" theme="outlined" />
                    关于
                  </Link>
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Header>
      </div>
    )
  }
}

export default Nav
