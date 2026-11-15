import React from 'react';
import { Globe, ArrowRight, LogIn, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Hero({ onOpenLogin }) {
  const scrollToPackages = (e) => {
    e.preventDefault();
    const el = document.getElementById('packages');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#312e81] text-white pt-10 pb-14 sm:pt-14 sm:pb-16 text-center">
      {/* Background ambient light orbs */}
      <div className="absolute top-[-180px] right-[-140px] w-[520px] h-[520px] rounded-full hero-glow-1 pointer-events-none" />
      <div className="absolute bottom-[-180px] left-[-120px] w-[460px] h-[460px] rounded-full hero-glow-2 pointer-events-none" />

      {/* Decorative grid pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

      <div className="relative z-10 max-w-[1080px] mx-auto px-4 sm:px-5">
        {/* Hero Logo Banner */}
        <div className="inline-block mb-5 sm:mb-6 drop-shadow-[0_10px_26px_rgba(0,0,0,0.5)] transition-transform hover:scale-[1.02] duration-300">
          <img 
            src="/assets/logo.png" 
            alt="KidsVPS Cloud" 
            className="w-[84%] max-w-[280px] sm:max-w-[340px] md:max-w-[360px] mx-auto h-auto rounded-2xl"
          />
        </div>

        {/* Title */}
        <h1 className="text-[26px] sm:text-[34px] md:text-[40px] font-extrabold leading-[1.25] tracking-tight mb-4">
          দ্রুত, নিরাপদ VPS
          <br />
          <span className="bg-gradient-to-r from-[#a5b4fc] via-[#c4b5fd] to-[#f472b6] bg-clip-text text-transparent">
            মাত্র ৳৯৯ থেকে শুরু
          </span>
        </h1>

        {/* Subtitle / Description */}
        <p className="text-[14.5px] sm:text-[16px] text-slate-300 max-w-[660px] mx-auto mb-7 sm:mb-8 leading-relaxed px-2">
          নিজের ফুল রুট অ্যাক্সেস, SSH টার্মিনাল, ফাইল ম্যানেজার, ওয়েবসাইট হোস্টিং এবং{' '}
          <b className="text-white font-semibold underline decoration-indigo-400 decoration-2 underline-offset-2">
            ফ্রি subdomain
          </b>{' '}
          — মিনিটেই চালু। আর নতুন{' '}
          <b className="text-white font-semibold underline decoration-violet-400 decoration-2 underline-offset-2">
            ১-ক্লিক Bot & Website
          </b>{' '}
          দিয়ে এক ক্লিকে Telegram Bot ও Python Web App চালান — কোনো কমান্ড ছাড়াই।
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto sm:max-w-none">
          <a
            href="#packages"
            onClick={scrollToPackages}
            className="w-full sm:w-auto btn-primary-gradient text-white text-[15px] font-bold py-3.5 px-8 rounded-xl shadow-[0_8px_24px_rgba(79,70,229,0.35)] hover:shadow-[0_14px_30px_rgba(79,70,229,0.5)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer group"
          >
            <span>প্যাকেজ দেখুন</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <button
            onClick={onOpenLogin}
            className="w-full sm:w-auto bg-transparent border-2 border-white/65 hover:border-white text-white hover:bg-white/10 text-[15px] font-bold py-3.5 px-8 rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
          >
            <LogIn className="w-4 h-4" />
            <span>ক্লায়েন্ট লগইন</span>
          </button>
        </div>

        {/* Hero Note */}
        <div className="mt-6 sm:mt-8 inline-flex items-center justify-center gap-2 text-[12.5px] sm:text-[13.5px] text-[#a5b4fc] bg-white/[0.06] backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full shadow-sm max-w-full flex-wrap">
          <Globe className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            প্রতিটি প্যাকেজে <b className="text-white font-bold">একদম ফ্রিতে subdomain</b> — যেমন{' '}
            <code className="bg-indigo-900/60 text-emerald-300 px-2 py-0.5 rounded font-mono font-bold text-xs sm:text-sm">
              roman12.wabsite.top
            </code>
          </span>
        </div>
      </div>
    </section>
  );
}
