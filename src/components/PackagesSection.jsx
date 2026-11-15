import React, { useState } from 'react';
import { PACKAGES } from '../data/packagesData';
import PackageCard from './PackageCard';
import SubdomainBanner from './SubdomainBanner';
import { Sparkles, CheckCircle2 } from 'lucide-react';

export default function PackagesSection() {
  const [filter, setFilter] = useState('all');

  const filteredPackages = PACKAGES.filter((pkg) => {
    if (filter === 'budget') return pkg.price <= 200;
    if (filter === 'pro') return pkg.price > 200;
    return true;
  });

  return (
    <section id="packages" className="py-14 sm:py-18 bg-[#f8fafc] border-y border-[#eef2f7] scroll-mt-20">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="text-[26px] sm:text-[32px] font-extrabold text-[#0f172a] mb-2 tracking-tight">
            আমাদের প্যাকেজ
          </h2>
          <p className="text-slate-500 text-[14px] sm:text-[15px] leading-relaxed">
            সব প্যাকেজেই ফুল রুট, SSH, ফাইল ম্যানেজার, ওয়েব টার্মিনাল, ডেডিকেটেড রিসোর্স — আর নতুন ১-ক্লিক Bot & Website দিয়ে এক ক্লিকে Telegram Bot ও Python Web App হোস্টিং।
          </p>
        </div>

        {/* Free Subdomain Note Banner */}
        <SubdomainBanner />

        {/* Optional quick-filter pills for mobile convenience */}
        <div className="flex items-center justify-center gap-2 mb-8 flex-wrap">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              filter === 'all'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300'
            }`}
          >
            সব প্যাকেজ (৫টি)
          </button>
          <button
            onClick={() => setFilter('budget')}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              filter === 'budget'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300'
            }`}
          >
            বাজেট ফ্রেন্ডলি (৳৯৯ - ৳১৭৯)
          </button>
          <button
            onClick={() => setFilter('pro')}
            className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
              filter === 'pro'
                ? 'bg-indigo-600 text-white shadow-md shadow-indigo-200'
                : 'bg-white text-slate-600 border border-slate-200 hover:border-indigo-300'
            }`}
          >
            হাই পারফরম্যান্স ও প্রো (৳২৪৯ - ৳৪৫০)
          </button>
        </div>

        {/* Package Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:gap-5 items-stretch">
          {filteredPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* Feature summary chips below packages */}
        <div className="mt-10 pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
          <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-2xs">
            <span className="block text-indigo-600 font-extrabold text-sm sm:text-base">১০০% রুট</span>
            <span className="text-slate-500 text-xs">ফুল সুপারইউজার অ্যাক্সেস</span>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-2xs">
            <span className="block text-emerald-600 font-extrabold text-sm sm:text-base">সিঙ্গাপুর DC</span>
            <span className="text-slate-500 text-xs">আল্ট্রা লো পিং বাংলাদেশে</span>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-2xs">
            <span className="block text-purple-600 font-extrabold text-sm sm:text-base">১-ক্লিক Bot</span>
            <span className="text-slate-500 text-xs">টেলিগ্রাম ও ওয়েব অ্যাপ</span>
          </div>
          <div className="bg-white p-3 rounded-xl border border-slate-100 shadow-2xs">
            <span className="block text-amber-600 font-extrabold text-sm sm:text-base">ফ্রি ডোমেইন</span>
            <span className="text-slate-500 text-xs">আনলিমিটেড সাবডোমেইন</span>
          </div>
        </div>
      </div>
    </section>
  );
}
