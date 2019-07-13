import React, { Component } from 'react'
import BaseSection from  './base';
import SectionTile from './tile';
import {Row, Col} from 'react-bootstrap';

export class EventSection extends Component {
    render() {
        return (
            <BaseSection 
                id="event" 
                title= "活动"
                bgColor= "warning">
                <SectionTile 
                    id="activities"
                    title="活动"
                    bgColor="yellow">
                        <div className="events_box">
                            <p className="header_event">当前活动报名</p>
                            <a className="more" href="https://www.unimelb.edu.au/">More..</a>
                            <div className="row">
                                <div className="col-md-2 col-xs-2">
                                <div className="activity">
                                    <img 
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/194840/JK_Lake_quads.png" 
                                        className="event_image" />
                                    <p className="caption">活动介绍</p>
                                </div>
                                </div>
                                <div className="col-md-2 col-xs-2">
                                <div className="activity">
                                    <img 
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/194840/JK_Lake_quads.png" 
                                        className="event_image" />
                                    <p className="caption">活动介绍</p>
                                </div>
                                </div>
                                <div className="col-md-2 col-xs-2">
                                <div className="activity">
                                    <img 
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/194840/JK_Lake_quads.png" 
                                        className="event_image" />
                                    <p className="caption">活动介绍</p>
                                </div>
                                </div>
                                <div className="col-md-2 col-xs-2">
                                <div className="activity">
                                    <img 
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/194840/JK_Lake_quads.png" 
                                        className="event_image" />
                                    <p className="caption">活动介绍</p>
                                </div>
                                </div>
                                <div className="col-md-2 col-xs-2">
                                <div className="activity">
                                    <img 
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/194840/JK_Lake_quads.png" 
                                        className="event_image" />
                                    <p className="caption">活动介绍</p>
                                </div>
                                </div>
                                <div className="col-md-2 col-xs-2">
                                <div className="activity">
                                    <img 
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/194840/JK_Lake_quads.png" 
                                        className="event_image" />
                                    <p className="caption">活动介绍</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="events_box">
                            <p className="header_event">未来活动规划</p>
                            <a className="more" href="https://www.unimelb.edu.au/">More..</a>
                            <div className="row">
                                <div className="col-md-2 col-xs-2">
                                <div className="activity">
                                    <img 
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/194840/JK_Lake_quads.png" 
                                        className="event_image" />
                                    <p className="caption">活动介绍</p>
                                </div>
                                </div>
                                <div className="col-md-2 col-xs-2">
                                <div className="activity">
                                    <img 
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/194840/JK_Lake_quads.png" 
                                        className="event_image" />
                                    <p className="caption">活动介绍</p>
                                </div>
                                </div>
                                <div className="col-md-2 col-xs-2">
                                <div className="activity">
                                    <img 
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/194840/JK_Lake_quads.png" 
                                        className="event_image" />
                                    <p className="caption">活动介绍</p>
                                </div>
                                </div>
                                <div className="col-md-2 col-xs-2">
                                <div className="activity">
                                    <img 
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/194840/JK_Lake_quads.png" 
                                        className="event_image" />
                                    <p className="caption">活动介绍</p>
                                </div>
                                </div>
                                <div className="col-md-2 col-xs-2">
                                <div className="activity">
                                    <img 
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/194840/JK_Lake_quads.png" 
                                        className="event_image" />
                                    <p className="caption">活动介绍</p>
                                </div>
                                </div>
                                <div className="col-md-2 col-xs-2">
                                <div className="activity">
                                    <img 
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/194840/JK_Lake_quads.png" 
                                        className="event_image" />
                                    <p className="caption">活动介绍</p>
                                </div>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <div className="events_box">
                            <p className="header_event">往期活动预览</p>
                            <a className="more" href="https://www.unimelb.edu.au/">More..</a>
                            <div className="row">
                                <div className="col-md-2 col-xs-2">
                                <div className="activity">
                                    <img 
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/194840/JK_Lake_quads.png" 
                                        className="event_image" />
                                    <p className="caption">活动介绍</p>
                                </div>
                                </div>
                                <div className="col-md-2 col-xs-2">
                                <div className="activity">
                                    <img 
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/194840/JK_Lake_quads.png" 
                                        className="event_image" />
                                    <p className="caption">活动介绍</p>
                                </div>
                                </div>
                                <div className="col-md-2 col-xs-2">
                                <div className="activity">
                                    <img 
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/194840/JK_Lake_quads.png" 
                                        className="event_image" />
                                    <p className="caption">活动介绍</p>
                                </div>
                                </div>
                                <div className="col-md-2 col-xs-2">
                                <div className="activity">
                                    <img 
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/194840/JK_Lake_quads.png" 
                                        className="event_image" />
                                    <p className="caption">活动介绍</p>
                                </div>
                                </div>
                                <div className="col-md-2 col-xs-2">
                                <div className="activity">
                                    <img 
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/194840/JK_Lake_quads.png" 
                                        className="event_image" />
                                    <p className="caption">活动介绍</p>
                                </div>
                                </div>
                                <div className="col-md-2 col-xs-2">
                                <div className="activity">
                                    <img 
                                        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/194840/JK_Lake_quads.png" 
                                        className="event_image" />
                                    <p className="caption">活动介绍</p>
                                </div>
                                </div>
                            </div>
                        </div>            
                </SectionTile>
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
