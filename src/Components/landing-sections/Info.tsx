import React, { Component } from 'react';
import BaseSection from './Base';

export class InfoSection extends Component {
    render() {
        return (
            <BaseSection 
                id="info" 
                title= "资讯"
                bgColor= "info">
            </BaseSection>
        )
    }
}
