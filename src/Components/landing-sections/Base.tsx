import React, { Component, ReactPropTypes } from 'react'

export default function BaseSection(props:any) {

    return (
        <div className={"section section-light"}>
            <div className="section-content" id={props.id}>
                <h1>{props.title}</h1>
                {props.children}

            </div>

        </div>
    )


}
