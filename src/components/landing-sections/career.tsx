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
                            <hr></hr>
                            <h3>当前热招</h3>
                            <hr></hr><br></br>
                

                {/*establishing carousels to show more jobs*/}
                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="Home">
                    <CarouselInfo />
                    </Tab>
                    <Tab eventKey="home" title="Home">
                    <CarouselInfo />
                    </Tab>
                    <Tab eventKey="home" title="Home">
                    <CarouselInfo />
                    </Tab>
                </Tabs>
                
                {/*browse more jobs button at the bottom of the carousel*/}
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