import React, { Component } from 'react';
import  '../components/landing-sections/Head';

import './Home.scss'
import { HeadSection } from '../components/landing-sections/Head';
import { EventSection } from '../components/landing-sections/Event';
import { InfoSection } from '../components/landing-sections/Info';
import { AcademicSection } from '../components/landing-sections/Academic';
import { LifestyleSection } from '../components/landing-sections/Lifestyle';
import { AboutSection } from '../components/landing-sections/About';
import { SponsorSection } from '../components/landing-sections/Sponsor';
import { CareerSection } from '../components/landing-sections/Career';

import { Footer } from '../components/Footer'
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
