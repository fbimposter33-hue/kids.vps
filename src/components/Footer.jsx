import React from 'react';
import { Zap, Heart } from 'lucide-react';

export default function Footer({ onOpenLogin }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0f172a] text-slate-400 py-8 text-[13px] border-t border-slate-800">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        {/* Left: Brand & Copyright */}
        <div className="flex items-center gap-2.5 flex-wrap justify-center sm:justify-start">
          <img 
            src="/assets/logo.png" 
            alt="KidsVPS Cloud" 
            className="h-8 w-auto object-contain" 
          />
          <b className="text-slate-200 flex items-center gap-1">
            <Zap className="w-3.5 h-3.5 text-indigo-400 fill-indigo-400" />
            KidsVPS Cloud
          </b>
          <span>© {currentYear} — সর্বস্বত্ব সংরক্ষিত</span>
        </div>

        {/* Right: Quick Links */}
        <div className="flex items-center gap-5 text-slate-400 font-medium">
          <button
            onClick={onOpenLogin}
            className="hover:text-white transition-colors cursor-pointer"
          >
            লগইন
          </button>
          <a href="#packages" className="hover:text-white transition-colors">
            প্যাকেজ
          </a>
          <a href="#features" className="hover:text-white transition-colors">
            ফিচার
          </a>
          <a href="#faq" className="hover:text-white transition-colors">
            FAQ
          </a>
        </div>
      </div>
    </footer>
  );
}
