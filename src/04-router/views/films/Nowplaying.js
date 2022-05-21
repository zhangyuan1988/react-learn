import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink, useHistory, withRouter } from 'react-router-dom'

// 接收Route 组件传来的方法
export default function Nowplaying(props) {
    const [list, setlist] = useState([]);
    useEffect(() => {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=8275221',
            method: 'GET',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"164864080277695958384641"}',
                'X-Host': 'mall.film-ticket.film.list'
            }
        }).then((res) => {
            console.log(res.data.data.films);
            setlist(res.data.data.films)
        })
    }, [])

    const history = useHistory()
    const handleChangePage = (id) => {
        console.log(id);
        // window.location.href = '#/detail/' + id
        // 编程式导航

        console.log(props);
        // props.history.push('/detail/' + id);

        // 使用hooks  动态路由传参
        // history.push('/detail/' + id);

        // 传递query 对象 刷新后就没了
        // props.history.push({ pathname: '/detail', query: { id } });

        // 传递state 对象 刷新后就没了
        props.history.push({ pathname: '/detail', state: { id } })

    }
    return (
        <div>Nowplaying

            {
                list.map((item) => {
                    return (
                        // 需要将父组件的props也传递过来 这样才能拿到路由数据
                        // <FilmItem key={item.filmId} {...item} {...props} />

                        // 可以使用withRouter高阶组件进行包裹 使用包裹后的组件
                        // 增强组件，并且可以跨级使用
                        <WithFilmItem key={item.filmId} {...item}  />
                    )
                })
            }
        </div>
    )
}

const WithFilmItem = withRouter(FilmItem)

function FilmItem(props) {
    console.log(props);
    const { name, filmId, poster } = props
    // 子组件因为不是被Route包裹，所以默认没有history
    // 需要将父组件的props也传递过来
    return (
        <li onClick={() => {
            console.log(filmId);
            props.history.push(`/detail/${filmId}`)
        }}>
            {/* <NavLink to={'/detail/' + item.filmId}>{item.name}</NavLink> */}
            <img src={poster} alt="" style={{ width: '100px' }} />
            {name}
        </li>
    )
}

