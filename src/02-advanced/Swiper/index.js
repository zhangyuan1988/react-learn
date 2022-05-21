import React, { Component } from 'react'
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default class FSwiper extends Component {
    // 在这个生命周期里new
    componentDidUpdate() {
        new Swiper('.swiper', {
            modules: [Pagination, Navigation],
            loop: this.props.loop, // 循环模式选项

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
    }



    render() {
        return (
            <div>
                <div className="swiper" style={{ height: '200px', backgroundColor: 'yellow' }}>
                    <div className="swiper-wrapper">
                     {this.props.children}
                    </div>



                    <div className="swiper-button-prev"></div>
                    <div className="swiper-button-next"></div>
                    <div className="swiper-pagination"></div>
                </div>
            </div>
        )
    }
}
