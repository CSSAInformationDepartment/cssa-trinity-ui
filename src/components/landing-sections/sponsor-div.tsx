import React, { Component } from 'react'
import { render } from 'react-dom';

export default function SponsorDiv(prop:any){
    return(
        <div>
            <div className="row justify-content-center m-3 text-muted">
              <h2>{prop.sponsorCategory}</h2>
              </div>
              <hr></hr>
        </div>
    )
}