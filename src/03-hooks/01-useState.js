import React, { useState } from 'react'

export default function App() {
    const [ name, setName ] = useState('fuzi');
    const [age, setage] = useState(100);
    console.log(name,setName);
    return (
        <div>
            <button onClick={() => {
                setName('xiaoming');
                setage('18')
            }}>
                click
            </button>
            app-{name}-{age}
        </div>
    )
}
