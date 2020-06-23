import React from 'react';
import Block from '../Block';
import CustomSvg from '../CustomSvg';

export default function Content(props) {
  return (
    <div className="content">
      <div className="section container">
        <h3>Our Process</h3>
        <div className="indent-container">
          <div className="columns">
            <div className="column is-two-thirds">
              <div className="company-description">
                <div className="paragraph">
                  From initial <span className="highlight">wireframe</span> to high fidelity <span className="highlight">mockup</span> and <span className="highlight">technical
                  specification</span> or full <span className="highlight">product design</span>, we work with your team 
                  to conceptualize your vision, full stop.
                </div>

                <div className="paragraph last">
                  We use technologies like <span className="highlight">GraphQL</span>, and <span className="highlight">React</span> (or <span className="highlight">React Native</span> on 
                  mobile) to develop high performance front end and mobile 
                  applications, that not only look good, but work marvelously, too. 
                </div>
              </div>
            </div>

            <div className="column is-centered-mobile">
              <div className="illustration wow fadeIn" data-wow-duration="1.5s" data-wow-delay="0.10s"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="section container">
        <h3>Case Studies</h3>
        <div className="indent-container">
          <Block><span className="inline-logo"><CustomSvg type={'limelit'} /></span> is an upcoming iOS app and web app for content creators and influencers to interact with fans via personal 60 second video calls </Block>
        </div>
      </div>
    </div>
  )
}