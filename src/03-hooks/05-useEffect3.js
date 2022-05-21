import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'

export default class App extends Component {
    state = {
        type: 1
    }
    render() {
        return (
            <div>
                <ul>
                    <li onClick={() => {
                        this.setState({ type: 1 });
                    }}>正在热映</li>
                    <li onClick={() => {
                        this.setState({ type: 2 });
                    }}>即将上映</li>
                </ul>

                <Filmlist type={this.state.type}></Filmlist>
            </div>
        )
    }
}

function Filmlist(props) {
    const [list, setlist] = useState([]);

    useEffect(() => {
        if (props.type === 1) {
            console.log('正在热映数据');
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=8275221',
                method: 'GET',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"164864080277695958384641"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                setlist(res.data.data.films);
            })

        } else {
            console.log('请求即将上映数据');
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=5366943',
                method: 'GET',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"164864080277695958384641"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                setlist(res.data.data.films);
            })
        }

    }, [props.type])


    return (
        <div>
            <ul>
                {
                    list.map((item) => (
                        <li key={item.filmId}>{item.name}</li>
                    ))
                }
            </ul>
        </div>
    )
}
