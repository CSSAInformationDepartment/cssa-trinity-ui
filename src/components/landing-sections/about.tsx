import React, { Component } from 'react'
import BaseSection from  './Base';

export class AboutSection extends Component {
    render() {
        return (
            <BaseSection 
                id="about" 
                title= "关于CSSA"
                bgColor= "success">
            </BaseSection>
        )
    }
}
