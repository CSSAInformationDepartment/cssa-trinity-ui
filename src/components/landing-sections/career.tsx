import React, { Component } from 'react'
import BaseSection from  './base';
import { CardDeck, Card, Button, Carousel, Col, Row, Container } from 'react-bootstrap'
import './career.scss'

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
                <Carousel>
                    
                    <Carousel.Item>
                        {/*4 cards in the first page of carousel*/}
                        <CardDeck>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Header>
                                    <h3>Job title</h3>
                                    <Card.Text>Company</Card.Text>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                     - The brief introduction of the job
                                    </Card.Text>
                                    <Button variant="primary">Learn more</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Header>
                                    <h3>Job title</h3>
                                    <Card.Text>Company</Card.Text>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                     - The brief introduction of the job
                                     放轻松。大家都希望和朋友自在地相处，随时能开开玩笑，这样很有安全感。要是你想表现得好相处，就要放轻松，让大家也觉得轻松愉快。
赞美别人。表示你的关心和专注。
多笑。使用大方的肢体动作，让别人感觉你放得开。
尽量放轻松。假如你紧张，你的朋友也会紧张，所以要放轻松。
                                    </Card.Text>
                                    <Button variant="primary">Learn more</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Header>
                                    <h3>Job title</h3>
                                    <Card.Text>Company</Card.Text>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                     - The brief introduction of the job
                                    </Card.Text>
                                    <Button variant="primary">Learn more</Button>
                                </Card.Body>
                            </Card>
                        </CardDeck>

                    </Carousel.Item>

                    <Carousel.Item>
                        {/*4 cards on the last page of carousel */}
                        <CardDeck>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Header>
                                    <h3>Job title</h3>
                                    <Card.Text>Company</Card.Text>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                     - The brief introduction of the job
                                    </Card.Text>
                                    <Button variant="primary">Learn more</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Header>
                                    <h3>Job title</h3>
                                    <Card.Text>Company</Card.Text>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                     - The brief introduction of the job
                                    </Card.Text>
                                    <Button variant="primary">Learn more</Button>
                                </Card.Body>
                            </Card>

                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="holder.js/100px180" />
                                <Card.Header>
                                    <h3>Job title</h3>
                                    <Card.Text>Company</Card.Text>
                                </Card.Header>
                                <Card.Body>
                                    <Card.Text>
                                     - The brief introduction of the job
                                    </Card.Text>
                                    <Button variant="primary">Learn more</Button>
                                </Card.Body>
                            </Card>

                        </CardDeck>
                    </Carousel.Item>
                </Carousel>
                <br></br>
                <br></br>
                <br></br>
                {/*browse more jobs button at the bottom of the carousel*/}
                <Button href = "#" variant = "link">查看更多</Button>
            </Col>
            
            <Col>
                
                <Card>
                    <Card.Header>
                        <h5>相关信息</h5>
                    </Card.Header>
                    <Card.Body>
                        <p>
                        关注你的朋友。不玩手机，和朋友进行眼神交流，让他们感觉受重视。假如你分神，看起来心不在焉，那你身边的人就无法放松，也无法觉得有趣了。
用眼神表示肯定。不要让别人觉得你自视清高或在评判他们，不然他们在你身边会很拘谨。关注你的朋友。不玩手机，和朋友进行眼神交流，让他们感觉受重视。假如你分神，看起来心不在焉，那你身边的人就无法放松，也无法觉得有趣了。
用眼神表示肯定。不要让别人觉得你自视清高或在评判他们，不然他们在你身边会很拘谨。关注你的朋友。不玩手机，和朋友进行眼神交流，让他们感觉受重视。假如你分神，看起来心不在焉，那你身边的人就无法放松，也无法觉得有趣了。
用眼神表示肯定。不要让别人觉得你自视清高或在评判他们，不然他们在你身边会很拘谨。关注你的朋友。不玩手机，和朋友进行眼神交流，让他们感觉受重视。假如你分神，看起来心不在焉，那你身边的人就无法放松，也无法觉得有趣了。
用眼神表示肯定。不要让别人觉得你自视清高或在评判他们，不然他们在你身边会很拘谨。关注你的朋友。不玩手机，和朋友进行眼神交流，让他们感觉受重视。假如你分神，看起来心不在焉，那你身边的人就无法放松，也无法觉得有趣了。
用眼神表示肯定。不要让别人觉得你自视清高或在评判他们，不然他们在你身边会很拘谨。                                  
                        </p>
                    </Card.Body>
                </Card>
            </Col>
            </Row>
            </Container>   
            </BaseSection>
        )
    }
}