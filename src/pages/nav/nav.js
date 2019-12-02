import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import './index.less'
import { Menu, Icon, Layout, Row, Col, Button, Avatar, Drawer } from 'antd'
import Login from '../login/login'
import Register from '../register/register'
import logo from '@/assets/img/user.gif'
const { SubMenu } = Menu
const { Header } = Layout
const MenuItemGroup = Menu.ItemGroup
class Nav extends Component {
  constructor(props) {
    super(props)
    this.state = {
      current: null,
      menuCurrent: '',
      navTitle: '首页',
      register: false,
      login: false
    }
  }
  componentDidMount() {
    // 初始化菜单显示
    this.initMenu(this.props.location.pathname)
  }
  handleLoginCancel = () => {
    this.setState({
      login: false
    })
  }
  handleRegisterCancel = () => {
    this.setState({
      register: false
    })
  }
  handleLogoutClick = e => {
    console.log(e)
    this.setState({
      current: e.key
    })
    window.sessionStorage.userInfo = ''
  }
  handleMenu = e => {
    this.setState({
      menuCurrent: e.key
    })
  }
  showLoginModal = () => {
    this.setState({
      login: true
    })
  }
  showRegisterModal = () => {
    this.setState({
      register: true
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
      navTitle: navTitle,
      menuCurrent: key
    })
  }
  render() {
    let userInfo = ''
    if (window.sessionStorage.userInfo) {
      userInfo = JSON.parse(window.sessionStorage.userInfo)
    }
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
            <Col style={{ width: '700px', float: 'left' }}>
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
            <Col style={{ textAlign: 'right', width: '260px', float: 'left' }}>
              {userInfo ? (
                <Menu
                  onClick={this.handleLogout}
                  style={{
                    width: 220,
                    lineHeight: '64px',
                    display: 'inline-block'
                  }}
                  selectedKeys={[this.state.current]}
                  mode="horizontal"
                >
                  <SubMenu
                    title={
                      <span className="submenu-title-wrapper">
                        <Avatar
                          onClick={this.showDrawer}
                          icon="user"
                          src={userInfo.avatar}
                          style={{
                            backgroundColor: '#87d068',
                            marginRight: 5
                          }}
                        />
                        {userInfo.name}
                      </span>
                    }
                  >
                    <MenuItemGroup>
                      <Menu.Item
                        key="logout"
                        onClick={this.handleLogoutClick.bind(this)}
                      >
                        退出
                      </Menu.Item>
                    </MenuItemGroup>
                  </SubMenu>
                </Menu>
              ) : (
                <div>
                  <Button
                    type="primary"
                    icon="login"
                    style={{ marginRight: '15px' }}
                    onClick={this.showLoginModal.bind(this)}
                  >
                    登 录
                  </Button>
                  <Button
                    type="danger"
                    icon="logout"
                    style={{ marginRight: '15px' }}
                    onClick={this.showRegisterModal.bind(this)}
                  >
                    注 册
                  </Button>
                </div>
              )}
            </Col>
          </Row>
        </Header>

        <Login
          visible={this.state.login}
          handleCancel={this.handleLoginCancel.bind(this)}
        />
        <Register
          visible={this.state.register}
          handleCancel={this.handleRegisterCancel.bind(this)}
        />
      </div>
    )
  }
}

export default withRouter(Nav)
