import React, { Component } from 'react'
import BaseSection from  './base';
import { CardDeck, Card, Button, Carousel } from 'react-bootstrap'
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
                <Button href = "#" variant = "link">Browse more jobs</Button>
             
            </BaseSection>
        )
    }
}
