import React from 'react'
import { withRouter } from 'react-router-dom'

function Center(props) {
  console.log(props);
  return (
    <div>Center

      <div onClick={() => {
        console.log(props);
        props.history.push('/filmsorder')
      }}>电影订单</div>
    </div>
  )
}

// 导出路由 并使用withRouter包裹组件
export default withRouter(Center)