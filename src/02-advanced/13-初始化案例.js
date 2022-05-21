import React, { Component } from 'react'
import BetterScroll from 'better-scroll'

export default class App extends Component {
    state = {
        list:['111','22','33','111','22','33','111','22','33','111','22','33','111','22','33','111','22','33','111','22','33']
    }

    componentWillMount() {
        console.log(document.getElementById('wrapper'));
    }

    componentDidMount() {
        console.log(document.getElementById('wrapper'));
        new BetterScroll('#wrapper')
    }
  render() {
    return (
      <div>
          <div id='wrapper' style={{backgroundColor:'yellow',height:'200px',overflow:'hidden'}}>
            <ul>
                {this.state.list.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
          </div>
      </div>
    )
  }
}
