import React, { Component } from 'react'
import BaseSection from  './base';

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
