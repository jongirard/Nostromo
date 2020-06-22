import React from 'react';
import CustomSvg from '../CustomSvg';

export default function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-content">
          <CustomSvg type="n" />
          <div className="description">This Is Jon, Last Survivor Of The Nostromo, Signing Off.</div>
          <div className="copyright">©2019 - 2020 Nostromo Coding Inc.</div>
        </div>
      </div>
    </div>
  );
}