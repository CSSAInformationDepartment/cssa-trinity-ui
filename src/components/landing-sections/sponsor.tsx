import React, { Component } from 'react'
import BaseSection from  './base';
import SponsorInfo from './sponsor-info';
import { Container, Row, Col, Card, Carousel, CarouselItem, CardGroup} from 'react-bootstrap';

export class SponsorSection extends Component {
    render() {
        return (
            <BaseSection 
                id="sponsor" 
                title= "赞助商"
                bgColor= "info">

                    <Container>
                        <Row className="justify-content-center m-3 text-muted">
                            <SponsorInfo
                                sponsorWebsite=""
                                sponsorLogo=""
                                QRCode=""
                                companyDescription=""
                            >

                            </SponsorInfo>

                        </Row>
                    </Container>
                <p>
                    页面内容摘要（发布前删除）：
                    <br></br>
                    1. 所有赞助商列表
                    <br></br>
                    2. 赞助商分级展示
                </p>
            </BaseSection>
        )
    }
}