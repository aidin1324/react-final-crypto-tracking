import React, { useState } from 'react';
import './index.css';

function Accordion(props) {
  const { title, defaultOpen = false, children } = props;
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2 className="accordion-title">{title}</h2>
        <span className="accordion-icon">{isOpen ? '−' : '+'}</span>
      </div>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
}

export default Accordion;