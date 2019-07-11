import React, { Component } from 'react'
import BaseSection from  './base';
import { Container, Row, Col, Card, Carousel, CarouselItem } from 'react-bootstrap';
import CarouselCaption from 'react-bootstrap/CarouselCaption';
import './lifestyle.scss';

export class LifestyleSection extends Component {
    render() {
        return (
            <BaseSection 
                id="lifestyle" 
                title= "墨城"
                bgColor= "purple">
                {/* <p>
                    负责人：Nate、Jason
                    页面内容摘要（发布前删除）：
                    <br></br>
                    1. 墨城攻略入口（热门条目快捷链接）
                    <br></br>
                    2. 美食地图
                    <br></br>
                    3. 折扣商家信息
                    <br></br>
                    4. 优惠券
                </p> */}

                <Container className="Content" fluid={ true }>
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
                </Container>

            </BaseSection>
        )
    }
}
