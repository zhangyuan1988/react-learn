import React, { Component } from 'react'

import { Route, Redirect, Switch } from 'react-router-dom'

import Nowplaying from './films/Nowplaying'
import Comingsoon from './films/Comingsoon'
import { NavLink } from 'react-router-dom'

import { Button, Space, Swiper, Toast, Tabs } from 'antd-mobile'
import axios from 'axios'
const colors = ['#ace0ff', '#bcffbd', '#e4fabd', '#ffcfac']

const items = colors.map((color, index) => (
  <Swiper.Item key={index}>
    <div
      style={{ background: color }}
      onClick={() => {
        Toast.show(`你点击了卡片 ${index + 1}`)
      }}
    >
      {index + 1}
    </div>
  </Swiper.Item>
))

export default class Films extends Component {

  state = {
    list: []
  }

  async componentDidMount() {
    const res = await axios({
      url: 'https://m.maizuo.com/gateway?cityId=110100&type=2&k=5032824',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"164864080277695958384641","bc":"110100"}',
        'X-Host': 'mall.cfg.common-banner'
      }
    })

    console.log(res);
  }
  render() {
    return (
      <div>
        <div style={{ backgroundColor: 'yellow', height: '200px' }}>
          <Swiper autoplay loop>
            <Swiper.Item >111</Swiper.Item>
            <Swiper.Item >1221</Swiper.Item>
            <Swiper.Item >13331</Swiper.Item>
          </Swiper>
        </div>
        <div style={{ position: 'sticky', top: '0', backgroundColor: 'white' }}>
          <Tabs activeKey={this.props.location.pathname} onChange={
            (e) => {
              console.log(this.props);
              this.props.history.push(e)
            }
          }>
            <Tabs.Tab title='正在热映' key='/films/nowplaying'>
            </Tabs.Tab>
            <Tabs.Tab title='即将上映' key='/films/Comingsoon'>
            </Tabs.Tab>
          </Tabs>
        </div>

        {/* 和父级路由写法相似  */}
        <Switch>
          {/* 路由配置嵌套路由 */}
          <Route path="/films/nowplaying" component={Nowplaying} />
          <Route path="/films/comingsoon" component={Comingsoon} />
          {/* 这里如果需要 也要做重定向 */}
          <Redirect from='/films' to='/films/nowplaying'></Redirect>
        </Switch>
      </div>
    )
  }
}
