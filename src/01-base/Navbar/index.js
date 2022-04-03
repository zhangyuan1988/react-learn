import React, { Component } from 'react'
// 属性校验
import PropTypes from 'prop-types'

console.log(PropTypes);

export default class Navbar extends Component {

    // 属性验证
    // 类属性 固定写法
    static propTypes = {
        // 必填
        title: PropTypes.string.isRequired,
        leftshow: PropTypes.bool
    }

    // 属性默认值
    static defaultProps = {
        leftshow: true
    }


    // 属性是父组件传来的， 通过this.props
    render() {


        console.log(this.props);
        const { title, leftshow } = this.props
        return (
            <>
                {
                    leftshow && <button>返回</button>
                }

                <span>Navbar----{title}</span>
                {
                    <button>home</button>
                }
            </>
        )
    }
}

//  类属性 固定写法
// Navbar.propTypes = {
//     title: PropTypes.string,
//     leftshow: PropTypes.bool
// }

// Navbar.defaultProps = {
//     leftshow: true
// }