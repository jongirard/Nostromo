/* eslint-disable jsx-a11y/anchor-is-valid */

import React, {useState} from 'react';
import CustomSvg from '../CustomSvg';

export default function Nav(props) {
  const [open, toggleOpen] = useState(false);
  
  return (
    <div className="nav">
      <div className="left-col">
        <CustomSvg type="nostromo" />
      </div>
      <div className="right-col">
        <a
          role="button"
          class={`navbar-burger ${open ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          onClick={() => toggleOpen(!open)}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div className={`right-col dropdown-menu-container ${open ? 'open' : ''}`}>
        <div className={`dropdown-menu ${open ? 'open' : ''}`}>
          <ul className="links">
            <li><a href="#case-studies">Case Studies</a></li>
            <li><a href="#process">Our Process</a></li>
            <li className="outlined"><a className="outlined" href="#hire">Hire Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}