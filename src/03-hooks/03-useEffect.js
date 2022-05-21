import React, { useEffect ,useState} from 'react'
import axios from 'axios'

export default function App() {
    // 触发setlist 整个函数组件会执行一次
    const [list, setlist] = useState([])
    // 接收两个参数 第一个回调函数 第二个是数组
    useEffect(() => {
        console.log(11);
        axios.get('/test.json').then(res=>{
            console.log(res.data.data.films);
            setlist(res.data.data.films)
        })
    }, [])// 传空数组，副作用函数不依赖于任何东西，所以只执行一次
   
    return (
        <div>
            <ul>
                {
                    list.map((item)=>(
                        <li key={item.filmId}>
                            {item.name}
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}
