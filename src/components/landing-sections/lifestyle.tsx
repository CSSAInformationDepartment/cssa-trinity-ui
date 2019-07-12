import React, { Component } from 'react'
import BaseSection from  './base';
import { Container, Row, Col, Card, Carousel, CarouselItem, CardGroup } from 'react-bootstrap';
import CarouselCaption from 'react-bootstrap/CarouselCaption';
import './lifestyle.scss';

export class LifestyleSection extends Component {
    render() {
        return (
            <BaseSection 
                id="lifestyle" 
                title= "墨城"
                bgColor= "purple">

                {/* <Container className="Content" fluid={ true }>
                    <Row>
                        <Col sm="8">
                            <Row>
                                <Col sm="3">
                                    <Card>
                                        <Card.Img src="/favicon.ico" />
                                        <Card.ImgOverlay>
                                            <Card.Text>
                                                墨城攻略入口
                                            </Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </Col>
                                <Col sm="3">
                                    <Card>
                                        <Card.Img src="/favicon.ico" />
                                        <Card.ImgOverlay>
                                            <Card.Text>
                                                墨城攻略入口
                                            </Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </Col>
                                <Col sm="3">
                                    <Card>
                                        <Card.Img src="/favicon.ico" />
                                        <Card.ImgOverlay>
                                            <Card.Text>
                                                墨城攻略入口
                                            </Card.Text>
                                        </Card.ImgOverlay>
                                    </Card>
                                </Col>
                                <Col sm="3">
                                    <Card>
                                        <Card.Text>
                                            更多
                                        </Card.Text>
                                    </Card>
                                </Col>
                            </Row>
                        </Col>

                        <Col sm={{span:4}}>
                            <Card>
                                <Card.Img src="/VEILs-Melbourne-Food-Map.png" />
                                <Card.ImgOverlay>
                                    <Card.Text>
                                        美食地图
                                    </Card.Text>
                                </Card.ImgOverlay>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="6">
                            <Carousel>
                                <CarouselItem>
                                    <img src="/VEILs-Melbourne-Food-Map.png"/>
                                    <CarouselCaption>
                                        折扣商家信息
                                    </CarouselCaption>
                                </CarouselItem>
                            </Carousel>
                        </Col>

                        <Col sm="6">
                            <div className="tile tile-blue">
                                优惠券
                            </div>
                        </Col>
                    </Row>
                </Container> */}

            <Container fluid={ true }>
                <Row className="section-row justify-content-center" noGutters={true}>
                    <Col sm={8} className="melb-guide section-area  ">
                        <CardGroup className="text-center">
                            <Card>
                                <a href="123">
                                    <Card.Img  src="/favicon.ico" />
                                    <Card.ImgOverlay>
                                        <h2>墨城攻略入口</h2>
                                    </Card.ImgOverlay>
                                </a>
                            </Card>

                            <Card>
                                <a href="123">
                                    <Card.Img  src="/favicon.ico" />
                                    <Card.ImgOverlay>
                                        <h2>墨城攻略入口</h2>
                                    </Card.ImgOverlay>
                                </a>
                            </Card>

                            <Card>
                                <a href="123">
                                    <Card.Img  src="/favicon.ico" />
                                    <Card.ImgOverlay>
                                        <h2>墨城攻略入口</h2>
                                    </Card.ImgOverlay>
                                </a>
                            </Card>

                            <Card>
                                <a href="123">
                                    <Card.Text>更多信息</Card.Text>
                                </a>
                            </Card>
                            
                        </CardGroup>
                        
                    </Col>

                    <Col sm={3} className="food-map section-area">
                        <Card>
                            <Card.Img src="/VEILs-Melbourne-Food-Map.png" />
                            <Card.ImgOverlay>
                                <Card.Text>
                                    美食地图
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>

                    <Col sm={5} className="sale-info section-area">
                        {/* <div className="sale-info">

                        </div> */}
                    </Col>

                    <Col sm={6} className="coupon section-area">
                        {/* <div className="coupon">

                        </div> */}
                    </Col>
                </Row>
            </Container>

            </BaseSection>
        )
    }
}
