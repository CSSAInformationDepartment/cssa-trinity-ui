import React, { Component } from 'react'
import {Card, Carousel, CardDeck} from "react-bootstrap"
import "./career.scss"
import CareerInfo from './career-info'

export default function CarouselInfo(prop:any) {

        return (
            <Carousel>
                    
                    <Carousel.Item>
                        {/*4 cards in the first page of carousel*/}
                        <CardDeck>
                            <CareerInfo
                                CareerWebsite=""
                                CompanyLogo=""/>

                            <CareerInfo
                                CareerWebsite=""
                                CompanyLogo=""/>

                            <CareerInfo
                                CareerWebsite=""
                                CompanyLogo=""/>

                        {prop.children}
                        </CardDeck>

                    </Carousel.Item>

                    <Carousel.Item>
                        {/*4 cards in the first page of carousel*/}
                        <CardDeck>
                            <CareerInfo
                                CareerWebsite=""
                                CompanyLogo=""/>

                            <CareerInfo
                                CareerWebsite=""
                                CompanyLogo=""/>

                            <CareerInfo
                                CareerWebsite=""
                                CompanyLogo=""/>
                        {prop.children}
                        </CardDeck>

                    </Carousel.Item>

                </Carousel>
        )

}
