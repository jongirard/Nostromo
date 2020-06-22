import React from 'react';
import ContactPanel from '../ContactPanel';
import Nav from '../Nav';

export default function Header(props) {
  return (
    <div className="header">
      <div className="background-header">
        <div className="container">
          <div className="navigation-container wow slideInDown" data-wow-duration="1.0s" data-wow-delay="0.05s">
            <Nav />
          </div>
          <div className="hero-header wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.10s">
            Blast Off.
          </div>
          <div className="join-container">
            <ContactPanel />
          </div>
        </div>
      </div>
    </div>
  );
}