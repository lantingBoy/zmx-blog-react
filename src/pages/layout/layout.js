import React, { Component } from 'react'
import Nav from '../nav/nav'
import SliderRight from '../../components/slider/index.js'
import './index.less'
import { Layout, BackTop } from 'antd'
const { Content, Footer, Sider } = Layout

class Layouts extends Component {
  render() {
    let isShowSlider = false
    let pathName = this.props.location.pathname
    if (pathName !== '/articleDetail' && pathName !== '/about') {
      isShowSlider = true
    }
    return (
      <div className="Layouts">
        <div>
          <Nav pathname={this.props.location.pathname} />
          <Layout className="layout">
            <Content>
              <Layout style={{ padding: '24px 0', background: '#fff' }}>
                <Content style={{ padding: '0 24px 0 0', minHeight: 280 }}>
                  {this.props.children}
                </Content>
                {!isShowSlider ? (
                  ''
                ) : (
                  <Sider width={350} style={{ background: '#fff' }}>
                    <SliderRight />
                  </Sider>
                )}
              </Layout>
            </Content>
          </Layout>
          <Footer style={{ textAlign: 'center', background: '#fff' }}>
            进击的小前端 ©2019 Created by 烟雨任平生
          </Footer>
          <BackTop />
        </div>
      </div>
    )
  }
}
export default Layouts
