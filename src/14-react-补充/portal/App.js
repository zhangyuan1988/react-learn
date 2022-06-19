import React, { useState } from 'react'
import './App.css'
// import Dialog from './components/Dialog'
import PortalDialog from './components/PortalDialog'
export default function App() {
    const [isShow, setIsShow] = useState(false)
    return (
        // 冒泡是正常的
        <div className="box" onClick={()=>{
            console.log('box');
        }}>

            <div className="left">

            </div>
            <div className="right">
                <button onClick={()=>{
                    setIsShow(true);
                }}>
                    click
                </button>
                {
                    isShow && <PortalDialog onClose={()=>{
                        setIsShow(false);
                    }}>1111111111</PortalDialog>
                }
            </div>
        </div>
    )
}

