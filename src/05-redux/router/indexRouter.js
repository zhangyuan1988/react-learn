import React, { Component } from 'react'

// 导入两个组件
// BrowserRouter 历史路由 需要后端支持
// 历史路由好看，是浏览器真正朝后端发请求要页面，后端没有对应的处理路径，就会404
// 后端处理：如果没有路径，需要重新渲染到 index.html页面
import { HashRouter as Router, Route, Redirect, Switch } from 'react-router-dom'
import Cinemas from '../views/Cinemas'
import Films from '../views/Films'
import Center from '../views/Center'
import NotFound from '../views/NotFound'
import Detail from '../views/Detail'
import Login from '../views/Login'
import City from '../views/City'
import Search from '../views/Search'
// 路由组件

function isAuth() {
    // 判断本地存储是否有token
    console.log(localStorage.getItem('token'));
    return localStorage.getItem('token')
}
export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    {/* 加switch 只渲染匹配的第一个 */}
                    <Switch>
                        {/* 匹配路径 加载对应组件 */}
                        {/* 嵌套路由不能使用精确匹配 */}
                        <Route path='/films' component={Films} />
                        <Route exact path='/cinemas' component={Cinemas} />
                        <Route path='/cinemas/search' component={Search} />

                        {/* <Route path='/center' component={Center} /> */}
                        {/* 路由守卫 */}
                        {/* 不使用component  换用render 有一个函数 可以判断是否登录 返回不同的组件 */}
                        <Route path='/center' render={(props) => {
                            // 注意，这种拦截会使center组件的props丢失 在push的时候就会有问题
                            // 提示找不到props 原因是 其独立实例化 没有在Route下 不是Route的子组件，不会给其props属性 
                            // 但props属性可以在render中拿到 作为属性传给组件
                            // 在组件中使用withRouter
                            return isAuth() ? <Center /> : <Redirect to='/login' />
                        }} />

                        <Route path='/login' component={Login} />

                        {/* 动态路由 通过后面加：参数名 和vue相似 */}
                        {/* <Route path='/detail/:id' component={Detail} /> */}

                        {/* 普通路由传参 */}
                        <Route path='/detail' component={Detail} />

                        <Route path='/city' component={City} />


                        {/* 路由重定向 */}
                        {/* 都匹配不上走这里 */}
                        {/* 默认是模糊匹配， 每次刷新都会去films，要加switch */}
                        {/* 如果匹配不到会到这里来 */}
                        {/* 加 exact 精准匹配 没有匹配到才会到404 */}
                        <Redirect exact from='/' to='/films' />

                        {/* switch 起作用，如果上面满足 就break 不会走到这里 */}
                        {/* 都不满足 走这里 404 */}
                        <Route path='*' component={NotFound} />
                    </Switch>

                    {/* 提供navlink占位符 */}
                    {this.props.children}
                </Router>
            </div>
        )
    }
}

// class Route extends Component {

// ....
//     render() {
//         const myComponent = this.props.component
//         return <div>

//             <myComponent></myComponent>
//         </div>
//     }
// }