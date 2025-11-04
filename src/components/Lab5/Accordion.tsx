import React, { useState } from 'react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const titleStyle: React.CSSProperties = {
    cursor: 'pointer',
    fontWeight: 'bold',
    color: '#007bff'
  };

  const contentStyle: React.CSSProperties = {
    padding: '10px',
    borderTop: '1px solid #eee',
    marginTop: '5px'
  };

  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)} style={titleStyle}>
        {title} {isOpen ? '▲' : '▼'}
      </div>
      {isOpen && (
        <div style={contentStyle}>
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;