import React, { useEffect, useState } from 'react'
import store from '../redux/store'

export default function City(props) {
    const [list, setlist] = useState(['北京', '上海', '广州', '深圳']);

    return (
        <div>city

            <ul>
                {list.map((item, index) => (
                    <li key={index} onClick={() => {
                        store.dispatch({ type: 'changeCity', value: item })
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
