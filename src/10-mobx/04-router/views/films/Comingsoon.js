import axios from 'axios'
import React, { Component } from 'react'

export default class Comingsoon extends Component {
  componentDidMount() {
    axios({
      url: `/ajax/comingList?ci=50&limit=10&movi
      eIds=&token=&optimus_uuid=9BD718B0D51411ECBFCDD
      518301CCD08D7981D880B2F452A
      A1988741B0C9AB6F&optimus_risk_level=7
      1&optimus_code=10`      ,
      headers: {
        'content-type': "application/json; charset=utf-8"
      }
    }).then((res) => {
      console.log(res);
    })
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}
