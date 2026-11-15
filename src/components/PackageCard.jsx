import React, { useState } from 'react';
import { 
  Cpu, 
  HardDrive, 
  Activity, 
  Bot, 
  Globe, 
  MessageCircle, 
  Star, 
  Zap, 
  Check, 
  ChevronDown, 
  ChevronUp,
  Server
} from 'lucide-react';
import { WHATSAPP_BASE_URL } from '../data/packagesData';

export default function PackageCard({ pkg }) {
  const [showMore, setShowMore] = useState(false);

  // WhatsApp order link with encoded Bengali text
  const whatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(pkg.whatsappText)}`;

  // Icon mapping for specs
  const renderSpecIcon = (type) => {
    switch (type) {
      case 'ram':
        return <Server className="w-3.5 h-3.5 text-slate-400 shrink-0 inline-block mr-1.5" />;
      case 'ssd':
        return <HardDrive className="w-3.5 h-3.5 text-slate-400 shrink-0 inline-block mr-1.5" />;
      case 'bandwidth':
        return <Activity className="w-3.5 h-3.5 text-slate-400 shrink-0 inline-block mr-1.5" />;
      case 'cpu':
        return <Cpu className="w-3.5 h-3.5 text-slate-400 shrink-0 inline-block mr-1.5" />;
      case 'bot':
        return <Bot className="w-3.5 h-3.5 text-indigo-600 shrink-0 inline-block mr-1.5" />;
      default:
        return null;
    }
  };

  return (
    <div
      className={`relative bg-white rounded-[18px] p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between shadow-[0_2px_10px_rgba(15,23,42,0.04)] hover:-translate-y-1 hover:shadow-[0_18px_38px_rgba(15,23,42,0.12)] ${
        pkg.popular 
          ? 'border-2 border-indigo-500 shadow-[0_14px_36px_rgba(79,70,229,0.18)]' 
          : pkg.best 
            ? 'border-2 border-purple-500 hover:border-purple-600' 
            : 'border-2 border-[#eef2f7] hover:border-purple-200'
      }`}
    >
      {/* Popular or Most Powerful Floating Tag Badge */}
      {pkg.tag && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <div className="tag-badge bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[11px] font-extrabold px-3.5 py-1 rounded-full whitespace-nowrap shadow-md flex items-center gap-1">
            {pkg.tagType === 'popular' ? (
              <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
            ) : (
              <Zap className="w-3 h-3 fill-yellow-300 text-yellow-300" />
            )}
            <span>{pkg.tag}</span>
          </div>
        </div>
      )}

      <div>
        {/* Package Header */}
        <div className="flex items-center justify-between mt-1">
          <h3 className="text-[17px] font-extrabold text-[#0f172a] flex items-center gap-2">
            <span>{pkg.name}</span>
            {pkg.popular ? (
              <Star className="w-4 h-4 fill-amber-400 text-amber-400 inline-block" />
            ) : pkg.best ? (
              <Zap className="w-4 h-4 fill-purple-600 text-purple-600 inline-block" />
            ) : (
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
            )}
          </h3>
        </div>

        {/* Pricing Area */}
        <div className="mt-2 min-h-[58px] flex flex-col justify-end">
          {pkg.originalPrice && (
            <div className="text-[15px] text-red-500 font-bold line-through -mb-1 decoration-2">
              ৳{pkg.originalPrice}
            </div>
          )}

          <div className="text-[30px] sm:text-[32px] font-extrabold text-[#0f172a] flex items-baseline gap-1.5">
            <span>৳{pkg.price}</span>
            <small className="text-[13px] text-slate-400 font-semibold">{pkg.period}</small>

            {pkg.discount && (
              <span className="inline-block bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded-full shadow-[0_4px_12px_rgba(245,158,11,0.4)] ml-1 tracking-tight">
                {pkg.discount}
              </span>
            )}
          </div>
        </div>

        {/* Tagline */}
        <p className="text-[12.5px] text-slate-500 leading-relaxed min-h-[38px] my-1.5">
          {pkg.tagline}
        </p>

        {/* Core Specs List */}
        <div className="border-t border-slate-100 mt-2 pt-1 flex flex-col gap-0.5">
          {pkg.specs.map((spec) => (
            <div
              key={spec.key}
              className={`flex items-center justify-between text-[13px] py-2 ${
                spec.isHighlight
                  ? 'bg-gradient-to-r from-[#ede9fe] to-[#fdf4ff] rounded-lg px-2.5 my-1.5 font-medium'
                  : 'border-b border-dashed border-[#eef2f7]'
              }`}
            >
              <span className="text-slate-500 flex items-center">
                {renderSpecIcon(spec.iconType)}
                <span>{spec.label}</span>
              </span>

              <b className={`font-bold ${spec.isHighlight ? 'text-[#6d28d9]' : 'text-[#0f172a]'} flex items-center gap-1.5`}>
                <span>{spec.value}</span>
                {spec.cpuPercent && (
                  <span className="inline-block w-14 h-1.5 bg-slate-200 rounded-full overflow-hidden align-middle">
                    <span
                      className="block h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"
                      style={{ width: `${spec.cpuPercent}%` }}
                    />
                  </span>
                )}
              </b>
            </div>
          ))}
        </div>

        {/* View More / Toggle Details Button */}
        <button
          onClick={() => setShowMore(!showMore)}
          className="w-full bg-slate-100 hover:bg-slate-200/80 border border-slate-200 text-slate-700 hover:text-indigo-600 font-bold text-[13px] py-2 px-3 rounded-xl my-2.5 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
        >
          <span>{showMore ? 'কম দেখুন' : 'আরও দেখুন'}</span>
          {showMore ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {/* Expandable Detail Features */}
        {showMore && (
          <div className="bg-slate-50 border border-slate-100 rounded-xl p-3 mb-3 text-[12.5px] text-slate-600 animate-in fade-in duration-200">
            <ul className="space-y-1.5">
              {pkg.details.map((detail, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-indigo-600 shrink-0 font-bold" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Card Action Area */}
      <div className="mt-2 pt-2 border-t border-slate-100/80">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="wa-btn w-full text-white font-bold text-[13.5px] py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm text-center block cursor-pointer group"
        >
          <MessageCircle className="w-4 h-4 shrink-0 fill-white" />
          <span>WhatsApp-এ অর্ডার করুন</span>
        </a>

        {/* Subdomain guarantee footer note */}
        <div className="text-center text-[11.5px] text-emerald-700 font-semibold mt-2.5 flex items-center justify-center gap-1">
          <Globe className="w-3.5 h-3.5 shrink-0 text-emerald-600" />
          <span>+ আনলিমিটেড ফ্রি subdomain</span>
        </div>
      </div>
    </div>
  );
}
