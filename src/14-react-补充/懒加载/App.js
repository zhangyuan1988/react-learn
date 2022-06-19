import React, { useState, Suspense } from 'react'
// import Nowplaying from './components/Nowplaying'
// import Comingsoon from './components/Comingsoon'

// 使用lazy 方式导入
const Nowplaying = React.lazy(() => import('./components/Nowplaying'))
const Comingsoon = React.lazy(() => import('./components/Comingsoon'))

export default function App() {

    const [type, setType] = useState(1)

    return (
        <div>

            <button onClick={() => { setType(1) }}>正在热映</button>
            <button onClick={() => { setType(2) }}>即将上映</button>

            {/* 动态加载需要配个suspense */}
            {/* fallback是加载前的提示 */}
            <Suspense fallback={
                <div>正在加载中。。。</div>
            }>

                {
                    type === 1 ? <Nowplaying /> : <Comingsoon />
                }
            </Suspense>

        </div>
    )
}
