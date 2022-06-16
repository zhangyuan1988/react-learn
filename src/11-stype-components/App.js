import React, { Component } from 'react'
import styled from 'styled-components'

export default class App extends Component {

    render() {
        const StyledFooter = styled.footer`
        background:yellow;
    `

        return (
            <div>
                <StyledFooter>
                    <ul>
                        <li>首页</li>
                        <li>列表</li>
                        <li>我的</li>
                    </ul>
                </StyledFooter>
            </div>
        )
    }
}
