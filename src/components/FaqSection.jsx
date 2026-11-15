import React, { useState } from 'react';
import { FAQS } from '../data/faqData';
import { HelpCircle, ChevronDown } from 'lucide-react';

export default function FaqSection() {
  // Allow all items to be open or toggleable
  const [openItems, setOpenItems] = useState({ 1: true, 2: true, 3: true, 4: true, 5: true });

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="faq" className="py-14 sm:py-18 bg-[#f8fafc] border-t border-[#eef2f7] scroll-mt-20">
      <div className="max-w-[820px] mx-auto px-4 sm:px-5">
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-[26px] sm:text-[30px] font-extrabold text-[#0f172a] mb-2 tracking-tight">
            সাধারণ প্রশ্ন (FAQ)
          </h2>
          <p className="text-slate-500 text-[14px]">
            KidsVPS সম্পর্কিত সাধারণ প্রশ্নের উত্তর জেনে নিন।
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-3.5">
          {FAQS.map((faq) => {
            const isOpen = openItems[faq.id];
            return (
              <div
                key={faq.id}
                className="bg-white border border-[#eef2f7] rounded-[16px] overflow-hidden transition-all duration-200 hover:shadow-sm"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-3 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h4 className="text-[14.5px] sm:text-[15.5px] font-bold text-[#0f172a] flex items-center gap-2.5">
                    <HelpCircle className="w-4 h-4 text-indigo-500 shrink-0" />
                    <span>{faq.question}</span>
                  </h4>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-indigo-600' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 text-[13px] sm:text-[14px] text-slate-600 leading-relaxed pl-10 border-t border-slate-50">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
