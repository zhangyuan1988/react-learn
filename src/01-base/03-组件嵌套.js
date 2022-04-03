

import React, { Component } from 'react';

class Child extends Component {
    render() {
        return <div>123</div>
    }
}

class Navbar extends Component {
    render() {
        return (
            <div>Navbar
                <Child></Child>
            </div>
        )
    }
}

function Swiper() {
    return (
        <div>Swiper</div>
    )
}


const Tabbar = () => <div>Tabbar</div>

export default class App extends Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Swiper></Swiper>
                <Tabbar></Tabbar>
            </div>
        )
    }
}