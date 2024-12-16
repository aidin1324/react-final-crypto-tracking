import React from 'react';
import './index.css';

function Heading(props) {
  const { level = 1, className = '', children } = props;
  const Tag = `h${level}`;

  return (
    <Tag className={className}>
      {children}
    </Tag>
  );
}

export default Heading;