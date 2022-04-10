import React, { Component } from 'react'
import axios from 'axios'

export default class Cinema extends Component {

    // constructor() {
    //   super()
    //   axios({
    //     url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=7330731',
    //     method: 'GET',
    //     headers: {
    //       'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"164864080277695958384641","bc":"110100"}',
    //       'X-Host': 'mall.film-ticket.film.list'
    //     }
    //   }).then((res) => {
    //     console.log(res);
    //   })
    // }

    state = {
        cinemaList: [],
        // backCinemaList: [],
        mytext: 'a',
        count: 1
    }

    componentDidMount = async () => {
        const res = await axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=8851606',
            method: 'GET',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"164864080277695958384641","bc":"110100"}',
                'X-Host': 'mall.film-ticket.cinema.list'
            }
        })
        console.log(res);
        this.setState({
            cinemaList: res.data.data.cinemas,
            // 备份一份数剧
            //   backCinemaList: res.data.data.cinemas,
            count: 2
        })
        // 使用async时，这个函数是promise函数，是异步微任务，所以setState是同步执行的
        console.log(this.state.count);
    }

    //   handleInput = (event) => {
    //     // 筛选数据 都转成大写
    //     const str = event.target.value.toUpperCase()
    //     // 只检索备份数据
    //     const res = this.state.backCinemaList.filter(item => {
    //       return item.name.toUpperCase().includes(str) || item.address.toUpperCase().includes(str)
    //     })

    //     this.setState({
    //       cinemaList: res
    //     })
    //     // 同步检索无法直接访问到实时的数据，做dom操作的时候需要注意
    //     console.log(this.state.cinemaList);
    //   }


    getCinemaList(){
        const str = this.state.mytext.toUpperCase()
        const res = this.state.cinemaList.filter(item => {
          return item.name.toUpperCase().includes(str) || item.address.toUpperCase().includes(str)
        })
        return res
    }


    render() {
        // const list = this.state.filterList.length>0 ? this.state.filterList:this.state.cinemaList
        return (
            <>
                <div>
                    {/* <input type="text" onInput={(event) => {
            this.handleInput(event)
          }}></input> */}
                    {/* <input type="text" onInput={this.handleInput}></input> */}
                    <input type="text" value={this.state.mytext} onChange={
                        (event) => {
                            this.setState({ mytext: event.target.value })
                        }
                    }></input>
                </div>

                {
                    // 改为函数表达式
                    // 因为受控组件每次调用setState 会引起render渲染，所以可以在这里放函数表达式也会重新执行，将筛选后的数据作为返回值进行渲染
                    this.getCinemaList().map((item) =>
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
}
