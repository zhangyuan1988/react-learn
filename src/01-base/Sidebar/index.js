import React from 'react'
import PropTypes from 'prop-types'

export default function Sidebar(props) {
    const { bg, position } = props
    console.log(props);

    const obj1 = { left: 0 }
    const obj2 = { right: 0 }
    const style = {
        backgroundColor: bg,
        width: '200px',
        position: 'fixed',
    }

    const styleObj = position === 'right' ? { ...style, ...obj2 } : { ...style, ...obj1 }

    return (
        <div style={styleObj}>
            <ul>
                <li>
                    111111
                </li>
                <li>
                    222222
                </li>
                <li>
                    333333
                </li>
                <li>
                    111111
                </li>
                <li>
                    222222
                </li>
                <li>
                    333333
                </li>
                <li>
                    111111
                </li>
                <li>
                    222222
                </li>
                <li>
                    333333
                </li>
                <li>
                    111111
                </li>
                <li>
                    222222
                </li>
                <li>
                    333333
                </li>
            </ul>
        </div>
    )
}

Sidebar.propTypes = {
    bg: PropTypes.string.isRequired,
    position: PropTypes.string,
}