import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Badge, TabBar } from 'antd-mobile'
import {
    AppOutline,
    MessageOutline,
    MessageFill,
    UnorderedListOutline,
    UserOutline,
} from 'antd-mobile-icons'
import style from './Tabbar.module.css'

function TabbarApp(props) {
    const tabs = [
        {
            key: '/films',
            title: '电影',
            icon: <AppOutline />,
            badge: Badge.dot,
        },
        {
            key: '/cinemas',
            title: '影院',
            icon: <UnorderedListOutline />,
            badge: '5',
        },
        {
            key: '/center',
            title: '我的',
            icon: <UserOutline />,
        },
    ]

    const [activeKey, setActiveKey] = useState('todo')
    return (
        <div className={style.tabbar}>
            <TabBar activeKey={`/${props.location.pathname.split('/')[1]}`} safeArea onChange={(e) => {
                console.log(props);
                props.history.push(e)
            }}>
                {tabs.map(item => (
                    <TabBar.Item
                        key={item.key}
                        icon={item.icon}
                        title={item.title}
                        badge={item.badge}
                    />
                ))}
            </TabBar>
        </div>
    )
}

export default withRouter(TabbarApp)
