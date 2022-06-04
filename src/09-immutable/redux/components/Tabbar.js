import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './Tabbar.module.css'

export default function Tabbar() {
    return (
            <ul className={style.tabbar}>
                <li className={style.item}>
                    {/* 声明式导航 */}
                    {/* 默认会有active类名  也可以用activeClassName重命名选中的属性名 */}
                    <NavLink to="/films" activeClassName="active">电影</NavLink>

                </li>
                <li className={style.item}>
                    <NavLink to="/cinemas" activeClassName="active">电影</NavLink>
                    影院
                </li>
                <li className={style.item}>
                    <NavLink to="/center" activeClassName="active">我的</NavLink>
                    我的
                </li>
            </ul>
    )
}
