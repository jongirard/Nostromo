import React from 'react';

export default function Block(props) {
  const {children} = props;

  return (
    <div className="block">
      <div className="block-container">
        <div className="block-content">
          {children}
        </div>
        <div className="link">
          Case study coming soon
        </div>
      </div>
    </div>
  );
}