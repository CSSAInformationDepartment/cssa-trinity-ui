import React, { Component } from 'react'

import { Navbar, Nav, NavDropdown, Image, Col } from 'react-bootstrap'
import NavbarToggle from 'react-bootstrap/NavbarToggle';

import CSSAlogo from '../assets/CSSA-Logo.png';

class TopNavBar extends Component {
  render() {
    
    return (

        <Navbar bg="primary" variant="dark" expand="md">
          <Navbar.Brand>
                <Image src={CSSAlogo} className="navbar-logo" fluid></Image>
          </Navbar.Brand>
          <Navbar.Toggle  aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link active href='#'>首页</Nav.Link>
              <NavDropdown id="#" title="组织构成">
                <NavDropdown.Item href="#">主席团</NavDropdown.Item>
                <NavDropdown.Item href="#">组织部</NavDropdown.Item>
                <NavDropdown.Item href="#">宣传部</NavDropdown.Item>
                <NavDropdown.Item href="#">信息部</NavDropdown.Item>
                <NavDropdown.Item href="#">外联部</NavDropdown.Item>
                <NavDropdown.Item href="#">人力资源部</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">赞助商</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown id="#" title="参与活动">
                <NavDropdown.Item href="#">我的活动</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">活动报名</NavDropdown.Item>
                <NavDropdown.Item href="#">历史活动</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown id="#" title="信息发布">
                <NavDropdown.Item href="#">社团动态</NavDropdown.Item>
                <NavDropdown.Item href="#">部门博客</NavDropdown.Item>
                <NavDropdown.Item href="#">影音视频</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown id="#" title="会员福利">
                <NavDropdown.Item href="#">我的会员卡</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">加入CSSA会员</NavDropdown.Item>
                <NavDropdown.Item href="#">折扣商家</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#">折扣商家计划</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown id="#" title="信息技术">
                <NavDropdown.Item href="#">故障申报</NavDropdown.Item>
                <NavDropdown.Item href="#">技术博客</NavDropdown.Item>
                <NavDropdown.Item href="#">TechSalon</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

     )
  }

}

export default TopNavBar;