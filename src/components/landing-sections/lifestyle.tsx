import React, { Component } from 'react'
import BaseSection from  './base';

export class LifestyleSection extends Component {
    render() {
        return (
            <BaseSection 
                id="lifestyle" 
                title= "墨城"
                bgColor= "purple">
                {/* <p>
                    负责人：Nate、Jason
                    页面内容摘要（发布前删除）：
                    <br></br>
                    1. 墨城攻略入口（热门条目快捷链接）
                    <br></br>
                    2. 美食地图
                    <br></br>
                    3. 折扣商家信息
                    <br></br>
                    4. 优惠券
                </p> */}

                <div className="container">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <div className="row mb-2">
                                <div className="col-6">
                                    <div className="tile-blue">
                                        <div className="card">
                                            <img src={"/favicon.ico"}/>
                                            <div className="card-img-overlay">
                                                墨城攻略入口
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="tile-blue">
                                        <div className="card">
                                            <img src={"/favicon.ico"}/>
                                            <div className="card-img-overlay">
                                                墨城攻略入口
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <div className="tile-blue">
                                        <div className="card">
                                            <img src={"/favicon.ico"}/>
                                            <div className="card-img-overlay">
                                                墨城攻略入口
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="tile-blue">
                                        更多
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="col-sm-6">
                            <div className="tile-blue">
                                美食地图
                            </div>
                        </div>
                    </div>

                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <div className="tile-blue">
                                折扣商家信息
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="tile-blue">
                                优惠券
                            </div>
                        </div>
                    </div>
                </div>

            </BaseSection>
        )
    }
}
