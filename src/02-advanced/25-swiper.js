import React, { Component } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default class App extends Component {
    state = {
        list: ['111', '22', '33', '111', '22', '33', '111', '22', '33', '111', '22']
    }

    componentDidMount() {
        new Swiper('.swiper', {
            modules: [Navigation, Pagination],
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }
        })
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
