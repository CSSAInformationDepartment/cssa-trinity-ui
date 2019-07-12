import React, { Component } from 'react'
import BaseSection from  './base';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Container, Row, Col, CardDeck } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import './career.scss'

export class CareerSection extends Component {
    render() {
        return (
            <BaseSection 
                id="career" 
                title= "职场"
                bgColor= "info">
                <p>
                    负责人：Judy, Chloe
                    <br></br>
                    页面内容摘要（发布前删除）：
                    <br></br>
                    1. 当前开放岗位
                    <br></br>
                    2. 求职相关信息

                </p>  
                {/*establishing carousels to show more jobs*/}
                <Carousel> 
                    <Carousel.Item>
                    <div>
                        {/*4 cards in the first page of carousel*/}
                        <CardDeck>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title><h3>Job title</h3></Card.Title>
                                    <Card.Text>
                                        - Company<br></br>
                                        - The brief introduction of the job
                                    </Card.Text>
                                    <Button variant="primary">Learn more</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title><h3>Job title</h3></Card.Title>
                                    <Card.Text>
                                        - Company <br></br>
                                        - The brief introduction of the job
                                    </Card.Text>
                                    <Button variant="primary">Learn more</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                    <Card.Title><h3>Job title</h3></Card.Title>
                                    <Card.Text>
                                        - Company<br></br>
                                        - The brief introduction of the job
                                    </Card.Text>
                                    <Button variant="primary">Learn more</Button>
                                </Card.Body>
                            </Card>
                                   
                        </CardDeck>
                    </div>
                    </Carousel.Item>

                    <Carousel.Item>
                        {/*3 cards and a view more button on the last page of carousel */}
                        <CardDeck>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                <Card.Title><h3>Job title</h3></Card.Title>
                                    <Card.Text>
                                    - Company<br></br>
                                    - The brief introduction of the job
                                </Card.Text>
                                <Button variant="primary">Learn more</Button>
                                </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title><h3>Job title</h3></Card.Title>
                                <Card.Text>
                                - Company <br></br>
                                - The brief introduction of the job
                                </Card.Text>
                            <Button variant="primary">Learn more</Button>
                            </Card.Body>
                            </Card>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Body>
                                <Card.Title><h3>Job title</h3></Card.Title>
                                    <Card.Text>
                                    - Company<br></br>
                                    - The brief introduction of the job
                                    </Card.Text>
                                <Button variant="primary">Learn more</Button>
                            </Card.Body>
                            </Card>
                            
                            
                        </CardDeck>
                    </Carousel.Item>
                </Carousel>
                <br/>
                <br/>
                <Button variant="primary" size='lg' >Browse More Jobs</Button>
            </BaseSection>
        )
    }
}
