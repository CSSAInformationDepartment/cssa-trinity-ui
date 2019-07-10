import React, { Component } from 'react';

import './home.scss';
import { HeadSection } from '../components/landing-sections/head';
import { EventSection } from '../components/landing-sections/event';
import { InfoSection } from '../components/landing-sections/info';
import { AcademicSection } from '../components/landing-sections/academic';
import { LifestyleSection } from '../components/landing-sections/lifestyle';
import { AboutSection } from '../components/landing-sections/about';
import { SponsorSection } from '../components/landing-sections/sponsor';
import { CareerSection } from '../components/landing-sections/career';

import { Footer } from '../components/footer'
import { any, string } from 'prop-types';

export default class Home extends Component {

  _pageScroller: any;

  constructor(props:any) {
    super(props);
    this.state = {currentPageId: 'Home'};
    this._pageScroller = null;
  }

  goToPage = (eventKey:string) => {
      this._pageScroller.goToPage(eventKey);
  };

  pageOnChange = (current:string) => {
      this.setState({currentPageId: current});
  };
  render() {


    return (
      <div>
          <HeadSection></HeadSection>
          <EventSection></EventSection>
          <InfoSection></InfoSection>
          <AcademicSection></AcademicSection>
          <LifestyleSection></LifestyleSection>
          <CareerSection></CareerSection>
          <AboutSection></AboutSection>
          <SponsorSection></SponsorSection>
          <Footer></Footer>
      </div>
    )
  }
}
