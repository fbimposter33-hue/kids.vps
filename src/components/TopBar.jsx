import React from 'react';
import { Zap } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-[#0f172a] text-[#e2e8f0] text-[12.5px] py-1.5 px-4 text-center tracking-[0.3px] border-b border-slate-800/80 flex items-center justify-center gap-1.5">
      <Zap className="w-3.5 h-3.5 text-indigo-400 fill-indigo-400 shrink-0" />
      <span>
        বাংলাদেশের সবচেয়ে সস্তা VPS — মাত্র <strong className="text-[#c4b5fd] font-bold">৳৯৯</strong> থেকে শুরু
      </span>
    </div>
  );
}
