import React, { Component } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default class App extends Component {
    state = {
        list: []
    }

    componentDidMount() {

        setTimeout(() => {
            const list = ['111', '22', '33', '111', '22', '33', '111', '22', '33', '111', '22']
            this.setState({ list })

            // setState 在异步函数中 是同步执行的 所以可以直接使用dom
            new Swiper('.swiper', {
                modules: [Navigation, Pagination],
                loop: true, // 循环模式选项

                // 如果需要前进后退按钮
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                // 如果需要分页器
                pagination: {
                    el: '.swiper-pagination',
                }
            })
        }, 1000)


    }

    componentDidUpdate(prevProps, prevState) {
        // new Swiper('.swiper', {
        //     modules: [ Pagination],
        //     loop: true, // 循环模式选项

        //     // 如果需要分页器
        //     pagination: {
        //         el: '.swiper-pagination',
        //     }
        // })
    }

    render() {
        return (
            <div>
                <div className="swiper" style={{ height: '200px', backgroundColor: 'yellow' }}>
                    <div className="swiper-wrapper">
                        {
                            this.state.list.map((item, index) => (
                                <div className="swiper-slide" key={index}>{item}</div>
                            ))
                        }

                    </div>
                    <div className="swiper-pagination"></div>

                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                </div>
            </div>
        )
    }
}
