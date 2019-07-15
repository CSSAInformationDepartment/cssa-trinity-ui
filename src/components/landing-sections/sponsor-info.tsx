import React, { Component } from 'react'
import { render } from 'react-dom';

export default function SponsorInfo(prop:any){
    return(
        <div>
            <div className="col-lg-7 col-sm-7 portfolio-item align-self-center">
                <div className="align-items-center text-center">
             
                    <a href={prop.sponsorWebsite} >
               
                    <img className="card-img-top img-fluid" src={prop.sponsorLogo} /></a>
            
                    <img className="card-img-top img-fluid" src={prop.QRCode}  />
                </div>
            </div>
            <div className="col-lg-5 col-sm-5 portfolio-item mt-2 align-self-center">
                <div className="text-center align-items-center">
                    {prop.companyDescription}
                </div>
            </div>
        </div>


    )
}
