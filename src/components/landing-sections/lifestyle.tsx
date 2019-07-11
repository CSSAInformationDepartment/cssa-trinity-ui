import React, { Component } from 'react'
import BaseSection from  './base';
import { Container, Row, Col, Card } from 'react-bootstrap';

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

                <Container>
                    <Row>
                        <Col sm="6">
                            <Row>
                                <Col>
                                    <div className="tile-blue">
                                        <Card>
                                            <Card.Img src="/favicon.ico" />
                                            <Card.ImgOverlay>
                                                <Card.Text>
                                                    墨城攻略入口
                                                </Card.Text>
                                            </Card.ImgOverlay>
                                        </Card>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="tile-blue">
                                        <Card>
                                            <Card.Img src="/favicon.ico" />
                                            <Card.ImgOverlay>
                                                <Card.Text>
                                                    墨城攻略入口
                                                </Card.Text>
                                            </Card.ImgOverlay>
                                        </Card>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="tile-blue">
                                        <Card>
                                            <Card.Img src="/favicon.ico" />
                                            <Card.ImgOverlay>
                                                <Card.Text>
                                                    墨城攻略入口
                                                </Card.Text>
                                            </Card.ImgOverlay>
                                        </Card>
                                    </div>
                                </Col>
                            </Row>

                            <Row>
                                <Col>
                                    <div className="tile-blue">
                                        <Card>
                                            <Card.Img src="/favicon.ico" />
                                            <Card.ImgOverlay>
                                                <Card.Text>
                                                    墨城攻略入口
                                                </Card.Text>
                                            </Card.ImgOverlay>
                                        </Card>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="tile-blue">
                                        <Card>
                                            <Card.Img src="/favicon.ico" />
                                            <Card.ImgOverlay>
                                                <Card.Text>
                                                    墨城攻略入口
                                                </Card.Text>
                                            </Card.ImgOverlay>
                                        </Card>
                                    </div>
                                </Col>
                                <Col>
                                    <div className="tile-blue">
                                        更多详情
                                    </div>
                                </Col>
                            </Row>

                            
                        </Col>

                        <Col sm="6">
                            <div className="tile-blue">
                                美食地图
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm="6">
                            <div className="tile-blue">
                                折扣商家信息
                            </div>
                        </Col>

                        <Col sm="6">
                            <div className="tile-blue">
                                优惠券
                            </div>
                        </Col>
                    </Row>
                </Container>

            </BaseSection>
        )
    }
}
