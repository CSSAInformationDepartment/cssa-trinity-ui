import React, { Component } from 'react'
import BaseSection from  './base';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export class CareerSection extends Component {
    render() {
        return (
            <BaseSection 
                id="career" 
                title= "职场"
                bgColor= "info">
                <p>
                    负责人：Nate、Jason
                    <br></br>
                    页面内容摘要（发布前删除）：
                    <br></br>
                    1. 当前开放岗位
                    <br></br>
                    2. 求职相关信息

                </p>    
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Button variant="primary">Learn more</Button>
                    </Card.Body>
                </Card>
            </BaseSection>
        )
    }
}
