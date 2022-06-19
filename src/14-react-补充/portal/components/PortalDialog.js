import React from 'react'
import { createPortal } from 'react-dom'

export default function Dialog(props) {
    // 第一个参数是dom，第二个是传送到的节点
    return createPortal(
        <div style={{
            width: '100%',
            height: '100%',
            position: 'fixed',
            left: '0',
            top: '0',
            background: 'rgba(0,0,0,.5)',
            zIndex: '99999',
            color: 'white'
        }}
        >
            <div>正在加载中......</div>
            {props.children}
            <button onClick={() => {
                props.onClose()
            }}>close</button>
        </div>
        ,
        document.body
    )
}
