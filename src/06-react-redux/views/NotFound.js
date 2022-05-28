import React, { useEffect } from 'react'

function NotFound(props) {

  useEffect(() => {

    console.log(props);

  }, [props])

  return (
    <div>NotFound</div>
  )
}


// 高阶组件接收一个函数
// 第二个参数是一个对象，对象中就是action
function fuziconnext(cb, obj) {

  // 接收传来的值，然后执行 得到结果
  const vaule = cb()

  // 返回一个函数 函数中接一个组件
  return (MyComponent) => {

    // 再返回一个函数式组件 中包含的是已经包装过的 组件
    // 一下返回的是一个函数式组件 组件中包裹的是原来的组件
    // 再将vaule作为props传给已经包装过的组件
    // 在这里可以做渲染劫持, props属性也被传递来了，需要一并接收
    return (props) => {
      return <div style={{ color: 'pink' }}>
        <MyComponent {...vaule} {...props} {...obj} />
      </div>
    }
  }
}


export default fuziconnext(() => {
  return {
    a: 1,
    b: 2
  }
}, {
  aa() { }, bb() { }
})(NotFound)