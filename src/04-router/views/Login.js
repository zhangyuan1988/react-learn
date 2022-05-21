import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Login(props) {
    const history = useHistory()
    return (
        <div>
            <h1>登录页面</h1>
            <input type="text" />
            <button type="button" onClick={() => {
                // 登陆之后跳转到个人中心
                localStorage.setItem('token', 'abc')
                history.push('center')
            }}>登录</button>
        </div>
    )
}
