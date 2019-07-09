import React, { Component } from 'react'
import BaseSection from  './Base';

export class CareerSection extends Component {
    render() {
        return (
            <BaseSection 
                id="career" 
                title= "职场"
                bgColor= "info">
                <p>
                    负责人：Nate、Jason
                    <br></br>
                    页面内容摘要（发布前删除）：
                    <br></br>
                    1. 当前开放岗位
                    <br></br>
                    2. 求职相关信息

                </p>    
            </BaseSection>
        )
    }
}
