import React from 'react';
import CustomSvg from '../CustomSvg';

export default function Nav(props) {
  return (
    <div className="nav">
      <div className="left-col">
        <CustomSvg type="nostromo" />
      </div>
      <div className="right-col">
        <ul className="links">
          <li><a href="#">Case Studies</a></li>
          <li><a href="#">Our Process</a></li>
          <li><a className="outlined" href="#">Hire Us</a></li>
        </ul>
      </div>
    </div>
  );
}