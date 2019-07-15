import React, { Component } from 'react'
import BaseSection from  './base';
import SponsorInfo from './sponsor-info';
import SponsorDiv from './sponsor-div';
import { Container, Row, Col, Card, Carousel, CarouselItem, CardGroup} from 'react-bootstrap';
import './sponsor.scss'

export class SponsorSection extends Component {
    render() {
        return (
            <BaseSection 
                id="sponsor" 
                title= "赞助商"
                bgColor= "info">

                    <Container>
                        <SponsorDiv
                        sponsorCategory="金牌商家">
                        </SponsorDiv>
                            <SponsorInfo
                                sponsorWebsite="https://augstudy.com/australia/"
                                sponsorLogo="https://sfo2.digitaloceanspaces.com/cssa-storage-net/media/img/merchants/aug-660x330.jpg?AWSAccessKeyId=E34L5QXIGEA2CTUKL5JD&Signature=RPAM1kYorJ%2FOeTNvUuoJAyHPCzA%3D&Expires=1563173283"
                                QRCode="https://sfo2.digitaloceanspaces.com/cssa-storage-net/media/uploads/usrImage/merchantWechatQRcode/Picture1.png?AWSAccessKeyId=E34L5QXIGEA2CTUKL5JD&Signature=4HEJE%2B%2BTuEGty6QTgMxFP2sY2eQ%3D&Expires=1563173283"
                                companyDescription="
                                AUG国际教育集团是一家成立在澳洲本土的留学移民公司，办公室遍布于澳大利亚，马来西亚，新加坡，印度尼西亚，菲律宾，中国和香港等多个国家或地区。AUG国际教育集团在行业拥有超过20年的经验，是全球400多间院校的合法代表，并已成功帮助超过30万的留学生们找到自己心仪的院校。AUG同时也提供签证移民以及澳洲本地实习咨询等方面的服务，全方面的为留学生们在海外求学生活提供支持。区别于同类竞争对手的是，AUG集团各办公室是统一管理，相互合作，确保每一位学生从出发地区到留学目的地都有对应的联系人。
                              "
                            >

                            </SponsorInfo>
                            <SponsorInfo
                                sponsorWebsite="https://augstudy.com/australia/"
                                sponsorLogo="https://sfo2.digitaloceanspaces.com/cssa-storage-net/media/img/merchants/aug-660x330.jpg?AWSAccessKeyId=E34L5QXIGEA2CTUKL5JD&Signature=RPAM1kYorJ%2FOeTNvUuoJAyHPCzA%3D&Expires=1563173283"
                                QRCode="https://sfo2.digitaloceanspaces.com/cssa-storage-net/media/uploads/usrImage/merchantWechatQRcode/Picture1.png?AWSAccessKeyId=E34L5QXIGEA2CTUKL5JD&Signature=4HEJE%2B%2BTuEGty6QTgMxFP2sY2eQ%3D&Expires=1563173283"
                                companyDescription="
                                AUG国际教育集团是一家成立在澳洲本土的留学移民公司，办公室遍布于澳大利亚，马来西亚，新加坡，印度尼西亚，菲律宾，中国和香港等多个国家或地区。AUG国际教育集团在行业拥有超过20年的经验，是全球400多间院校的合法代表，并已成功帮助超过30万的留学生们找到自己心仪的院校。AUG同时也提供签证移民以及澳洲本地实习咨询等方面的服务，全方面的为留学生们在海外求学生活提供支持。区别于同类竞争对手的是，AUG集团各办公室是统一管理，相互合作，确保每一位学生从出发地区到留学目的地都有对应的联系人。
                              "
                            >

                            </SponsorInfo>

                      
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