import React, { useState } from 'react';

const ArrowIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="20" 
    height="20" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export default function FaqItem({ question, answer, isOpenDefault = false }) {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className="faq_item">
      <div 
        className={`faq_quest ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="faq_quest_text">{question}</span>
        
        <span className="faq_icon">
          <ArrowIcon />
        </span>
      </div>
      <div className={`faq_anw ${isOpen ? 'active' : ''}`}>
        {answer}
      </div>
    </div>
  );
}