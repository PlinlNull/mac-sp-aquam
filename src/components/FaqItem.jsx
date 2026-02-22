import React, { useState } from 'react';

export default function FaqItem({ question, answer, isOpenDefault = false }) {
  const [isOpen, setIsOpen] = useState(isOpenDefault);

  return (
    <div className="faq_item">
      <div 
        className={`faq_quest ${isOpen ? 'active' : ''}`} 
        onClick={() => setIsOpen(!isOpen)}
      >
        {question}
      </div>
      <div className={`faq_anw ${isOpen ? 'active' : ''}`}>
        {answer}
      </div>
    </div>
  );
}