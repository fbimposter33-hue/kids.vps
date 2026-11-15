import React from 'react';
import { MessageCircle, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { WHATSAPP_BASE_URL, WHATSAPP_NUMBER } from '../data/packagesData';

export default function CtaSection({ onOpenLogin }) {
  const ctaWhatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    'আমি KidsVPS-এর একটি প্যাকেজ নিতে চাই'
  )}`;

  return (
    <section className="bg-gradient-to-r from-indigo-600 via-indigo-700 to-purple-700 text-white py-14 sm:py-16 text-center relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%)] pointer-events-none" />

      <div className="max-w-[800px] mx-auto px-4 sm:px-5 relative z-10">
        <div className="inline-flex items-center gap-1.5 bg-white/15 backdrop-blur-sm text-indigo-100 text-xs font-bold px-3 py-1 rounded-full mb-3">
          <Zap className="w-3.5 h-3.5 text-yellow-300" />
          <span>তাত্ক্ষণিক সেটআপ এবং সহায়তা</span>
        </div>

        <h2 className="text-[26px] sm:text-[32px] font-extrabold mb-2 tracking-tight">
          আজই শুরু করুন
        </h2>
        <p className="text-indigo-100 text-[14.5px] sm:text-[16px] mb-7 max-w-md mx-auto">
          WhatsApp-এ অর্ডার করুন অথবা লগইন করুন। যেকোনো প্রয়োজনে আমরা ২৪/৭ প্রস্তুত।
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <a
            href={ctaWhatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-white text-indigo-700 hover:bg-slate-50 text-[15px] font-extrabold py-3.5 px-8 rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.25)] hover:-translate-y-0.5 active:translate-y-0 transition-all inline-flex items-center justify-center gap-2 group cursor-pointer"
          >
            <MessageCircle className="w-5 h-5 text-emerald-600 fill-emerald-600 transition-transform group-hover:scale-110" />
            <span>WhatsApp: +{WHATSAPP_NUMBER}</span>
          </a>

          <button
            onClick={onOpenLogin}
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/30 text-white text-[15px] font-bold py-3.5 px-6 rounded-xl transition-all cursor-pointer"
          >
            লগইন পোর্টাল
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-6 text-xs text-indigo-200">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
            নিরাপদ লেনদেন ও সক্রিয় সাপোর্ট
          </span>
          <span className="hidden sm:inline-block">•</span>
          <span className="hidden sm:inline-block">বিকাশ / নগদ / রকেট সাপোর্টেড</span>
        </div>
      </div>
    </section>
  );
}
