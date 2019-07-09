import React, { Component } from 'react'

import { Navbar, Nav, NavDropdown, Image, Col } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/Navbar';
import { Link, animateScroll as scroll } from "react-scroll";


class TopNavBar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  navOffset:number = -30;
  transitionDuration:number = 350;
  render() {
    
    return (
        <Navbar bg="primary" variant="dark" expand="md">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Item>
                <Link className='nav-link' activeClass="active"
                  to="head"
                  spy={true}
                  smooth={true}
                  offset={this.navOffset}
                  duration={this.transitionDuration}>
                  Home
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className='nav-link' activeClass="active"
                  to="event"
                  spy={true}
                  smooth={true}
                  offset={this.navOffset}
                  duration={this.transitionDuration}>
                  活动
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className='nav-link' activeClass="active"
                  to="info"
                  spy={true}
                  smooth={true}
                  offset={this.navOffset}
                  duration={this.transitionDuration}>
                  资讯
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className='nav-link' activeClass="active"
                  to="academic"
                  spy={true}
                  smooth={true}
                  offset={this.navOffset}
                  duration={this.transitionDuration}>
                  校园
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className='nav-link' activeClass="active"
                  to="lifestyle"
                  spy={true}
                  smooth={true}
                  offset={this.navOffset}
                  duration={this.transitionDuration}>
                  墨城
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className='nav-link' activeClass="active"
                  to="career"
                  spy={true}
                  smooth={true}
                  offset={this.navOffset}
                  duration={this.transitionDuration}>
                  职场
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className='nav-link' activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={this.navOffset}
                  duration={this.transitionDuration}>
                  关于CSSA
                </Link>
              </Nav.Item>
              <Nav.Item>
                <Link className='nav-link' activeClass="active"
                  to="sponsor"
                  spy={true}
                  smooth={true}
                  offset={this.navOffset}
                  duration={this.transitionDuration}>
                  赞助商
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
     )
  }
}

export default TopNavBar;