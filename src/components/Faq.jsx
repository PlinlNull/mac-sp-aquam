import React from 'react';
import FaqItem from './FaqItem';

const faqData = [
  {
    id: 1,
    question: "空気中の水分からつくられる水とのことですが、衛生上問題ないのですか？",
    answer: "はい、ご安心ください。HEPAフィルターおよび複数段階の浄水フィルターで処理しており、生成水は水道法に基づく水質基準（51項目）にも適合していますので、安心してご利用いただけます。",
    isOpenDefault: true,
  },
  {
    id: 2,
    question: "○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○",
    answer: "○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○",
  },
  {
    id: 3,
    question: "△△△△△△△△△△△△△△△△△△△△△△△△△△△△△△△△",
    answer: "△△△△△△△△△△△△△△△△△△△△△△△△△△△△△△△△",
  },
   {
    id: 4,
    question: "○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○",
    answer: "○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○",
  },
  {
    id: 5,
    question: "△△△△△△△△△△△△△△△△△△△△△△△△△△△△△△△△",
    answer: "△△△△△△△△△△△△△△△△△△△△△△△△△△△△△△△△",
  },
   {
    id: 6,
    question: "○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○",
    answer: "○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○○",
  }, 
   {
    id: 7,
    question: "△△△△△△△△△△△△△△△△△△△△△△△△△△△△△△△△",
    answer: "△△△△△△△△△△△△△△△△△△△△△△△△△△△△△△△△",
  },
];

export default function Faq() {
  return (
    <section className="faq">
      <div className="faq_container">
        <h2 className="cmn_ttl">FAQ</h2>
        <p className="cmn_lbl">よくある質問</p>
        <div className="faq_lst">
          {faqData.map((item) => (
            <FaqItem 
              key={item.id} // Bắt buộc phải có key khi dùng map()
              question={item.question} 
              answer={item.answer}
              isOpenDefault={item.isOpenDefault} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}