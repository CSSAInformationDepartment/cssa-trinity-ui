import React, { Component } from 'react';

import './Footer.scss';

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className='footer'>
                    <div className="bloc d-bloc none" id="bloc-20">
                        <div className="container bloc-sm">
                            <div className="row">
                                <div className="col-md-3 col-sm-6">
                                    <h4 className="mg-md text-sm-left text-center tc-white">
                                        Affiliate with
					                </h4>
                                    <a href="https://umsu.unimelb.edu.au/">
                                        <div className="mt-3 text-sm-left text-center">
                                            <img src="{% static 'PublicSite/img/umsuLogo.png'%}" className=" d-inline img-logo-style" />
                                        </div>
                                    </a>
                                    <a href="https://gsa.unimelb.edu.au/">
                                        <div className="mt-3 text-sm-left text-center">
                                            <img src="{% static 'PublicSite/img/gsaLogo.png'%}" className=" d-inline img-logo-style" />
                                        </div>
                                    </a>
                                </div>

                                <div className="col-md-3 col-sm-6">
                                    <h4 className="mg-md text-sm-left text-center tc-white">
                                        Quick Links
				                    </h4>
                                    <div className="text-sm-left text-center">
                                        <a className="tc-gray" href="https://www.unimelb.edu.au/">University of Melbourne Homepage</a>
                                    </div>
                                    <div className="text-sm-left text-center">
                                        <a className="tc-gray" href="https://students.unimelb.edu.au/">Student information</a>
                                    </div>
                                    <div className="text-sm-left text-center">
                                        <a className="tc-gray" href="https://auth.unimelb.edu.au/login/pages/login.jsp">MyUnimelb Student Portal</a>
                                    </div>
                                    <div className="text-sm-left text-center">
                                        <a className="tc-gray" href="https://library.unimelb.edu.au/">Library</a>
                                    </div>
                                </div>

                                <div className="col-md-4 col-sm-6">
                                    <h4 className="mg-md text-sm-left text-center tc-white">
                                        Contact Mailbox
				                    </h4>
                                    <ul className="mg-md text-sm-left text-center">
                                        <li><strong>President: </strong>president@cssaunimelb.com</li>
                                        <li><strong>Public Relation: </strong>pr@cssaunimelb.com </li>
                                        <li><strong>Event: </strong>activity@cssaunimelb.com </li>
                                        <li><strong>Publicity: </strong>publicity@cssaunimelb.com </li>
                                        <li><strong>IT & Dev Team: </strong>information@cssaunimelb.com </li>
                                        <li><strong>Human Resources: </strong>hr@cssaunimelb.com</li>
                                    </ul>
                                </div>

                                <div className="col-md-2 col-sm-6">
                                    <h4 className="mg-md text-sm-left text-center tc-white">
                                        Follow Up
				                    </h4>
                                    <div className="row">
                                        <div className="col-4 col-sm-4">
                                            <div className="text-center">
                                                <a href="https://www.facebook.com/CSSAunimelb/"><span className="fa fa-facebook-official icon-md"></span></a>
                                            </div>
                                        </div>
                                        <div className="col-4 col-sm-4">
                                            <div className="text-center">
                                                <a rel="qrcode-pops" data-container="body" data-toggle="popover" data-placement="top" data-img="{% static 'PublicSite/img/qrcode_wx.jpg'%}"><span className="fa fa-weixin icon-md"></span></a>
                                            </div>
                                        </div>
                                        <div className="col-4 col-sm-4">
                                            <div className="text-center">
                                                <a href="https://www.weibo.com/cssaum"><span className="fa fa-weibo icon-md"></span></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col mg-md d-bloc mx-auto text-center">
                                    <a href="https://github.com/ShepherdMOZ/myCSSA">
                                        <h6 className="text-center tc-white">系统版本 System Version：<strong>2.3.10</strong></h6>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bloc d-bloc credit-bloc" id="bloc-22">
                        <div className="container">
                            <div className="row">
                                <div className="col">
				                    <h6 className="mg-md text-lg-center">
                                        版权所有 墨尔本大学中国学生会 Copyrights @ Chinese Student and Scholars Association, University of Melbourne 2012 - 2019
				                    </h6>
                                    <p className="mg-md text-lg-center">
                                        由 信息技术部系统开发组 设计管理 Designed and Managed by Department of Information Technology, System Development Group
				                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}
