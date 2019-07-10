import React, { Component } from 'react'
import BaseSection from  './base';

export class SponsorSection extends Component {
    render() {
        return (
            <BaseSection 
                id="sponsor" 
                title= "赞助商"
                bgColor= "info">

                <p>
                    页面内容摘要（发布前删除）：
                    <br></br>
                    1. 所有赞助商列表
                    <br></br>
                    2. 赞助商分级展示
                </p>
            </BaseSection>
        )
    }
}
