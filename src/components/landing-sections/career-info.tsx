import React, { Component } from 'react'
import {Card, Button} from "react-bootstrap"
import "./career.scss"

export default function CareerInfo(prop:any){
    return(
        
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={prop.CompanyLogo} />
                <Card.Header>
                    <h3>Job title</h3>
                    <Card.Text>Company</Card.Text>
                </Card.Header>
                <Card.Body>
                    <Card.Text>
                        - The brief introduction of the job
                    </Card.Text>
                    <Button variant="primary" href={prop.CareerWebsite}>Learn more</Button>
                </Card.Body>
            </Card>

        
    )
}
