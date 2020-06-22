import React from 'react';

import LogoWithText from './LogoWithText';
import Logo from './Logo';
import Limelit from './Limelit';

export default (props) => {
  switch (props.type.toLowerCase()) {
    case 'n':
      return (<Logo {...props} />);
    case 'nostromo':
      return (<LogoWithText {...props} />);
    case 'limelit':
      return (<Limelit {...props} />);
    default:
      return null;
    }
  }
