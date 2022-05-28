import React, { useEffect, useState } from 'react'
// import store from '../redux/store'
import { connect } from 'react-redux'
function City(props) {
    const [list, setlist] = useState(['北京', '上海', '广州', '深圳']);

    return (
        <div>city

            <ul>
                {list.map((item, index) => (
                    <li key={index} onClick={() => {
                        props.change(item)
                        // store.dispatch({ type: 'changeCity', value: item })
                        props.history.goBack()
                    }}>
                        {item}
                    </li>
                ))
                }
            </ul>
        </div>
    )
}

// 返回一个action
const mapDispatchToProps = {
    change(item) {
        return {
            type: 'changeCity', value: item
        }
    }
}

export default connect(null,mapDispatchToProps)(City)