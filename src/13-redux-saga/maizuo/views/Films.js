import React, { Component } from 'react'

import { Route, Redirect, Switch } from 'react-router-dom'

import Nowplaying from './films/Nowplaying'
import Comingsoon from './films/Comingsoon'
import { NavLink } from 'react-router-dom'

export default class Films extends Component {
  render() {
    return (
      <div>
        <div style={{ backgroundColor: 'yellow', height: '200px' }}>
          轮播
        </div>
        <ul>
          <li>
            <NavLink to='/films/Nowplaying'>正在热映</NavLink>
          </li>
          <li>
            <NavLink to='/films/Comingsoon'>即将上映</NavLink>
          </li>
        </ul>

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
