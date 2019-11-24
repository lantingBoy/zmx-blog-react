import React, { Component } from 'react'
import Nav from '../nav/nav'
import './index.less'
import { Layout, BackTop } from 'antd'
const { Content, Footer } = Layout
class Layouts extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Layout className="layout">
          <Content>
            <Layout style={{ padding: '92px 0', background: '#fff' }}>
              <Content style={{ padding: '0 24px 0 0', minHeight: 280 }}>
                {this.props.children}
              </Content>
            </Layout>
          </Content>
        </Layout>
        <Footer style={{ textAlign: 'center', background: '#fff' }}>
          进击的小前端 ©2019 Created by 烟雨任平生
        </Footer>
      </div>
    )
  }
}
export default Layouts
