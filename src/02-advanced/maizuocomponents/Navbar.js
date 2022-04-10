import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
      <div style={{backgroundColor:'yellow',textAlign:'center',lineHeight:'50px'}}>
          <button style={{float: 'left'}} >返回</button>
          <span>卖座电影</span>
          <button style={{float: 'right'}} onClick={
              ()=>{
                  this.props.event(2)
              }
          }>我的</button>
      </div>
    )
  }
}
