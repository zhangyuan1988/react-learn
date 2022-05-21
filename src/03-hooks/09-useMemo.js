import React, {  useMemo, useState, useEffect } from 'react'
import axios from 'axios'

export default function Cinema() {
    const [mytext, setmytext] = useState('');
    const [cinemaList, setcinemaList] = useState([]);

    // 请求数据
    useEffect(() => {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=8851606',
            method: 'GET',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"164864080277695958384641","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        }).then((res) => {
            console.log(res);
            setcinemaList(res.data.data.cinemas)
        })

    }, [])// 不传入依赖，防止重复请求

    // 把回调函数执行 并将结果返回出去 
    // 相当于计算属性，依赖更改了才会触发返回数据
    const getCinemaList = useMemo(() => (
        cinemaList.filter(item => {
            return item.name.toUpperCase().includes(mytext) || item.address.toUpperCase().includes(mytext)
        })
    ), [mytext,cinemaList])// 需要传入依赖，防止被缓存进而不触发，如果不传cinemaList页面是空的，因为第一次是空的数组，请求后才有数据
    // mytext不传导致输入的数据不被影响到，所以无法筛选

    return (
        <>
            <div>
                <input type="text" value={mytext} onChange={
                    (event) => {
                        setmytext(event.target.value)
                    }
                }></input>
            </div>

            {
                // 改为函数表达式
                // 因为受控组件每次调用setState 会引起render渲染，所以可以在这里放函数表达式也会重新执行，将筛选后的数据作为返回值进行渲染
                getCinemaList.map((item) =>
                    <dl key={item.cinemaId}>
                        <dt>
                            {item.name}
                        </dt>
                        <dd>
                            {item.address}
                        </dd>
                    </dl>
                )
            }
        </>
    )
}