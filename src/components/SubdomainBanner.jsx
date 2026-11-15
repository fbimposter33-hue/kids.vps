import React, { useState } from 'react';
import { Gift, Sparkles, Check, Copy } from 'lucide-react';

export default function SubdomainBanner() {
  const [subdomainInput, setSubdomainInput] = useState('');
  const [copied, setCopied] = useState(false);

  const cleanSubdomain = subdomainInput
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '')
    .slice(0, 20);

  const sampleDomain = cleanSubdomain ? `${cleanSubdomain}.wabsite.top` : 'yourname.wabsite.top';

  const handleCopy = () => {
    navigator.clipboard?.writeText(`https://${sampleDomain}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center mb-8 px-2">
      {/* Reference original badge */}
      <div className="inline-flex items-center justify-center flex-wrap gap-2 bg-[#ecfdf5] text-[#047857] border border-[#a7f3d0] font-bold text-[13px] sm:text-[13.5px] px-5 py-2.5 rounded-full shadow-[0_4px_14px_rgba(4,120,87,0.08)] mb-3 text-center max-w-full">
        <Gift className="w-4 h-4 text-emerald-600 shrink-0" />
        <span>
          প্রতিটি প্যাকেজে <strong className="text-[#065f46]">আনলিমিটেড ফ্রি subdomain</strong> +{' '}
          <strong className="text-[#065f46]">১-ক্লিক Bot & Website</strong>
        </span>
      </div>

      {/* Interactive Subdomain Test Tool */}
      <div className="w-full max-w-md bg-white border border-slate-200/90 rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-1.5 text-xs text-slate-500 font-semibold mb-2">
          <Sparkles className="w-3.5 h-3.5 text-indigo-500" />
          <span>আপনার পছন্দের ফ্রি সাবডোমেইন চেক করুন:</span>
        </div>
        <div className="flex items-center bg-slate-50 border border-slate-200 rounded-xl px-3 py-1.5 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:border-transparent transition-all">
          <input
            type="text"
            value={subdomainInput}
            onChange={(e) => setSubdomainInput(e.target.value)}
            placeholder="যেমন: mybot"
            className="w-full bg-transparent text-sm font-semibold text-slate-800 placeholder-slate-400 focus:outline-none"
          />
          <span className="text-xs font-mono font-bold text-indigo-600 bg-indigo-50 px-2 py-1 rounded-md shrink-0 border border-indigo-100">
            .wabsite.top
          </span>
          <button
            onClick={handleCopy}
            title="লিংক কপি করুন"
            className="ml-2 p-1.5 text-slate-400 hover:text-indigo-600 transition-colors rounded-lg hover:bg-slate-200/60"
            aria-label="Copy domain"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
        {cleanSubdomain && (
          <p className="text-[11.5px] text-emerald-600 font-medium mt-1.5 flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
            আপনার সাইট হবে: <span className="font-mono font-bold">{sampleDomain}</span>
          </p>
        )}
      </div>
    </div>
  );
}
