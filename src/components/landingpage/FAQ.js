import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Homefood?",
      answer: "Homefood offers subscription plans for convenient, delicious meals from nearby households."
    },
    {
      question: "How do I subscribe to Homefood?",
      answer: "Simply visit our website, choose your plan, and sign up to start enjoying home-cooked meals delivered to your doorstep."
    },
    {
      question: "Can I customize my meal plan?",
      answer: "Yes, you can customize your meal preferences and delivery schedule to fit your lifestyle."
    },
    {
      question: "Are there vegetarian options available?",
      answer: "Absolutely! We offer a variety of vegetarian and vegan options to suit your dietary needs."
    },
    {
      question: "How does the delivery process work?",
      answer: "Once you subscribe, meals are prepared by nearby households and delivered to your specified location on your schedule."
    }
  ];

  return (
    <div className="faq">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
          <div className="faq-question" onClick={() => toggleFAQ(index)}>
            {faq.question}
          </div>
          <div className="faq-answer">
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
