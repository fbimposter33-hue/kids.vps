import React from 'react';
import { FEATURES } from '../data/featuresData';
import { Rocket, ShieldCheck, Terminal, Globe, Bot, CheckCircle, Zap } from 'lucide-react';

export default function FeaturesSection() {
  const getFeatureIcon = (iconName) => {
    switch (iconName) {
      case 'rocket':
        return <Rocket className="w-5 h-5" />;
      case 'shield':
        return <ShieldCheck className="w-5 h-5" />;
      case 'terminal':
        return <Terminal className="w-5 h-5" />;
      case 'globe':
        return <Globe className="w-5 h-5" />;
      case 'bot':
        return <Bot className="w-5 h-5" />;
      default:
        return <Zap className="w-5 h-5" />;
    }
  };

  const getThemeClasses = (theme) => {
    switch (theme) {
      case 'purple':
        return 'bg-[#ede9fe] text-[#7c3aed]';
      case 'green':
        return 'bg-[#dcfce7] text-[#16a34a]';
      case 'blue':
        return 'bg-[#dbeafe] text-[#2563eb]';
      case 'amber':
        return 'bg-[#fef3c7] text-[#d97706]';
      default:
        return 'bg-slate-100 text-slate-700';
    }
  };

  return (
    <section id="features" className="py-14 sm:py-18 bg-white scroll-mt-20">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-5">
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-[26px] sm:text-[30px] font-extrabold text-[#0f172a] mb-2 tracking-tight">
            কেন KidsVPS?
          </h2>
          <p className="text-slate-500 text-[14px] sm:text-[15px]">
            প্রতিটি VPS সম্পূর্ণ আলাদা ও নিরাপদ — অন্যের ফাইলে কারো অ্যাক্সেস নেই।
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {FEATURES.map((feat) => (
            <div
              key={feat.id}
              className={`bg-[#f8fafc] border border-[#eef2f7] rounded-[16px] p-5 sm:p-6 flex items-start gap-4 transition-all duration-200 hover:shadow-md hover:border-slate-200 hover:-translate-y-0.5 ${
                feat.id === 5 ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-[#f8fafc] to-[#f5f3ff] border-purple-100' : ''
              }`}
            >
              {/* Icon Container with Theme Color */}
              <div
                className={`w-11 h-11 rounded-[12px] flex items-center justify-center shrink-0 shadow-2xs ${getThemeClasses(
                  feat.theme
                )}`}
              >
                {getFeatureIcon(feat.icon)}
              </div>

              {/* Text */}
              <div>
                <h4 className="text-[15px] sm:text-[16px] font-bold text-[#0f172a] mb-1.5 flex items-center gap-1.5">
                  <span>{feat.title}</span>
                  {feat.id === 5 && (
                    <span className="text-[10px] font-extrabold bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full uppercase tracking-wider">
                      নতুন ফিচার
                    </span>
                  )}
                </h4>
                <p className="text-[13px] sm:text-[13.5px] text-slate-500 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Highlight Banner for 1-Click Bot Setup */}
        <div className="mt-8 bg-gradient-to-r from-indigo-900 to-purple-900 text-white rounded-2xl p-5 sm:p-6 shadow-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 text-center md:text-left flex-col md:flex-row">
            <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0 border border-white/20">
              <Bot className="w-6 h-6 text-indigo-300" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-white">
                কোনো জটিল কমান্ড লাইন ছাড়াই টেলিগ্রাম বট চালান
              </h4>
              <p className="text-xs sm:text-sm text-indigo-200">
                প্যানেল থেকে শুধু ফাইল আপলোড করুন, এক ক্লিকে পোর্ট এবং ব্যাকগ্রাউন্ড সার্ভিস রেডি হয়ে যাবে।
              </p>
            </div>
          </div>
          <a
            href="#packages"
            className="shrink-0 bg-white hover:bg-slate-100 text-indigo-900 font-bold text-xs sm:text-sm px-5 py-2.5 rounded-xl transition-all shadow-sm"
          >
            প্যাকেজ নির্বাচন করুন
          </a>
        </div>
      </div>
    </section>
  );
}
