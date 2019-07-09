import React, { Component } from 'react'
import BaseSection from  './Base';
import SectionTile from './Tile';
import {Row, Col} from 'react-bootstrap';

export class EventSection extends Component {
    render() {
        return (
            <BaseSection 
                id="event" 
                title= "活动"
                bgColor= "warning">
                <p>
                    负责人：达哥、Gloria
                    <br></br>
                    页面内容摘要（发布前删除）：
                    <br></br>
                    1. 当前正在报名得活动
                    <br></br>
                    2. 未来活动规划（半年）
                    <br></br>
                    3. 往期活动预览
                </p>
                
            </BaseSection>
        )
    }
}
