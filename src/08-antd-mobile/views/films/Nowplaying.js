import React, { useEffect, useState, useRef } from 'react'
import { Image, List, InfiniteScroll } from 'antd-mobile'
import axios from 'axios'
import { NavLink, useHistory, withRouter } from 'react-router-dom'

// 接收Route 组件传来的方法
export default function Nowplaying(props) {
    const [list, setlist] = useState([]);
    const [hasMore, sethasMore] = useState(true);

    const count = useRef(0)


    const getList = async () => {
        sethasMore(false)
        const res = await axios({
            url: `https://m.maizuo.com/gateway?cityId=440300&pageNum=${count.current}&pageSize=10&type=1&k=8275221`,
            method: 'GET',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"164864080277695958384641"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        })
        setlist([...list, ...res.data.data.films])
        sethasMore(res.data.data.films.length > 0)
    }

    useEffect(() => {
        // getList()
    }, [])

    const history = useHistory()
    const handleChangePage = (id) => {
        console.log(id);
        // window.location.href = '#/detail/' + id
        // 编程式导航

        console.log(props);
        // props.history.push('/detail/' + id);

        // 使用hooks  动态路由传参
        history.push('/detail/' + id);

        // 传递query 对象 刷新后就没了
        // props.history.push({ pathname: '/detail', query: { id } });

        // 传递state 对象 刷新后就没了
        // props.history.push({ pathname: '/detail', state: { id } })

    }

    // 默认空数据会先触发一次，所以可以将状态改为0 从0开始即可 页面初始化时不触发，在这里触发
    const loadMore = () => {
        // setquery()
        count.current++
        // add({ pageNum: query.pageNum++ })
        getList()
    }
    return (
        <div>
            <List>
                {list.map((item) => (
                    <List.Item
                    onClick={
                        ()=>{
                            handleChangePage(item.filmId)
                        }
                    }
                        key={item.filmId}
                        prefix={
                            <Image
                                src={item.poster}
                                // style={{ borderRadius: 20 }}
                                // fit='cover'
                                width={80}
                            // height={40}
                            />
                        }
                        description={<div>
                            {
                                item.grade ? <div>评分：{item.grade}</div> : <div style={{ visibility: 'hidden' }}>评分</div>
                            }
                            {/* <div>
                                主演：{
                                    item.actors.map((actor,index) => (
                                        <span key={index} style={{ marginRight: "10px" }}>
                                            {actor.name}
                                        </span>
                                    ))
                                }
                            </div> */}
                            <div>{item.nation}|{item.runtime}分钟</div>
                            <div>{item.synopsis}</div>
                        </div>}
                    >
                        {item.name}
                    </List.Item>
                ))}
            </List>
            <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
        </div>
    )
}


