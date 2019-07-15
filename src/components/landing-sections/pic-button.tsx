/* This is a card component which performs an image overlay.
 * In the card, it used a imageSrc which is image source, a title which is a string
 * and a button link which link to the website and the button name.
 */
import React, { Component } from 'react'

export default function PicButton(prop:any){
    return(
        
        <div className="card bg-dark text-white" style={{ width: '18rem'}}>
            <img src={prop.imageSrc} className="card-img" alt = "..."></img>
                <div className="card-img-overlay">
                    <div className="text-center">
                        <h3 className = "card-title" >{prop.imageTitle}</h3>
                        
                        <p></p>
                        
                        <a className="btn btn-light" href={prop.buttonLink}>{prop.buttonName}</a>
                    </div>      
                </div>
        </div>
    )
}