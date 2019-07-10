import React, { Component } from 'react';

export default function SectionTile(props:any) {
 
    return (
        <div className={"tile tile-" + props.bgColor}>
            {props.children}
        </div>
    )
    
}
