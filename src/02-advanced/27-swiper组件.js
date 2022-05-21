import React, { Component } from 'react'
import FSwiper from './Swiper'
import FSwiperItem from './Swiper/SwiperItem'
import axios from 'axios'

export default class App extends Component {
    state = {
        list: []
    }

    componentDidMount() {
        // 异步情况
        // setTimeout(() => {
        //     this.setState({ list: ['111', '22', '33', '111', '22', '33', '111', '22'] })
        // }, 1000)

        axios({
            url: 'https://m.maizuo.com/gateway?type=2&cityId=110100&k=7398342',
            headers: {
                'X-Client-Info': `{"a":"3000","ch":"1002","v":"5.2.0","e":"164864080277695958384641","bc":"110100"}`,
                'X-Host': ' mall.cfg.film-float.banner'
            }
        }).then(res=>{
            console.log(res.data);
            this.setState({
                list: res.data
            })
        })
    }


    render() {
        return (
            <div>
                <FSwiper loop={true}>
                    {
                        this.state.list.map((swiper) => (
                            <FSwiperItem key={swiper.bannerId}>
                                <img src={swiper.imgUrl} alt=''></img>
                            </FSwiperItem>
                        ))
                    }
                </FSwiper>
            </div>
        )
    }
}
