import React, { Component } from 'react'
import BaseSection from  './base';
import { CardDeck, Card, Button, Carousel, Col, Row, Container, Tabs, Tab } from 'react-bootstrap'
import './career.scss'
import CarouselInfo from './carousel-info'

export class CareerSection extends Component {
    render() {
        return (
            <BaseSection 
                id="career" 
                title= "职场"
                bgColor= "info">
                <p>
                    
                        {/*负责人：Judy, Chloe*/}
                    
                
                </p> 
                
                <Container>
                    <Row>
                        <Col xs={9}>
                            
                

                {/*establishing carousels to show more jobs*/}
                <Tabs defaultActiveKey="career" id="career-information">
                    <Tab eventKey="career" title="精选热招岗位">
                    <br></br>
                    <br></br>
                    <CarouselInfo />
                    </Tab>
                    <Tab eventKey="CSSA" title="CSSA岗位">
                    <br></br>
                    <br></br>
                    <CarouselInfo />
                    </Tab>
                    <Tab eventKey="voluntary" title="志愿者工作">
                    <br></br>
                    <br></br>
                    <CarouselInfo />
                    </Tab>
                    <Tab eventKey="others" title="其他">
                    <br></br>
                    <br></br>
                    <CarouselInfo />
                    </Tab>
                </Tabs>
                
                {/*browse more jobs button at the bottom of the carousel*/}
                <br></br>
                <Button href = "" variant = "link">查看更多</Button>
            </Col>
            
            <Col>
                
                <Card>
                    <Card.Header>
                        <h5>相关信息</h5>
                    </Card.Header>
                    <Card.Body>
                    </Card.Body>
                </Card>
            </Col>
            </Row>
            </Container>   
            </BaseSection>
        )
    }
}