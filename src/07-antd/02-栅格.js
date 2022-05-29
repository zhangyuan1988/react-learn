import React from 'react'
import { Row, Col } from 'antd';

export default function App() {
    return (
        <div>
            <Row>
                <Col span={24}>col</Col>
            </Row>
            <Row>
                <Col span={12}>col-12</Col>
                <Col span={12}>col-12</Col>
            </Row>
            <Row>
                <Col span={8}>col-8</Col>
                <Col  offset={8} span={8}>col-8</Col>
            </Row>
            <Row gutter={[16, 16]}>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
                <Col span={6}>col-6</Col>
            </Row>
        </div>
    )
}
