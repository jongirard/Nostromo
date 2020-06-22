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
          Read the case study
        </div>
      </div>
    </div>
  );
}