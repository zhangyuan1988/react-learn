import React from 'react';

const Tabbar = (props) => {

    // const changeActive = (index) => {
    //     // this.setState({ current: index })
    //     // 通知父组件 传递新的current
    //     console.log(index);
    //     props.event(index)
    // }

    return (
        <div>
            <ul className="tab">
                {
                    props.list.map((item, index) =>
                        // 直接调用回调函数
                        <li onClick={() => props.event(index)} className={index === props.current ? 'active' : ''} key={item.id}>
                            {item.text}
                        </li>
                    )
                }
            </ul>
        </div>
    );
}

export default Tabbar;
