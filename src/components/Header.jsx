import React, { useState } from 'react';
import { Menu, X, LogIn, ChevronRight, Server, ShieldCheck, HelpCircle } from 'lucide-react';

export default function Header({ onOpenLogin }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#eef2f7] shadow-[0_4px_20px_rgba(15,23,42,0.05)] transition-all">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-5 py-2.5 sm:py-3 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="/" 
          className="flex items-center gap-3 transition-transform hover:opacity-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
          aria-label="KidsVPS Cloud Homepage"
        >
          <img 
            src="/assets/logo.png" 
            alt="KidsVPS Cloud" 
            className="h-12 sm:h-14 md:h-16 w-auto object-contain drop-shadow-[0_4px_10px_rgba(15,23,42,0.2)]" 
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-[14px] font-semibold text-slate-600">
          <a 
            href="#packages" 
            className="hover:text-indigo-600 transition-colors py-1 flex items-center gap-1.5"
          >
            <Server className="w-4 h-4 text-slate-400 group-hover:text-indigo-600" />
            প্যাকেজ
          </a>
          <a 
            href="#features" 
            className="hover:text-indigo-600 transition-colors py-1 flex items-center gap-1.5"
          >
            <ShieldCheck className="w-4 h-4 text-slate-400" />
            ফিচার
          </a>
          <a 
            href="#faq" 
            className="hover:text-indigo-600 transition-colors py-1 flex items-center gap-1.5"
          >
            <HelpCircle className="w-4 h-4 text-slate-400" />
            FAQ
          </a>
        </nav>

        {/* Desktop Client Login Button */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenLogin}
            className="btn-primary-gradient text-white text-[14px] font-bold px-5 py-2.5 rounded-xl shadow-[0_6px_18px_rgba(79,70,229,0.28)] hover:shadow-[0_14px_28px_rgba(79,70,229,0.4)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 inline-flex items-center gap-2 cursor-pointer"
          >
            <LogIn className="w-4 h-4" />
            <span>ক্লায়েন্ট লগইন</span>
          </button>
        </div>

        {/* Mobile Action & Menu Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenLogin}
            className="btn-primary-gradient text-white text-[12.5px] font-bold px-3.5 py-1.5 rounded-lg shadow-sm inline-flex items-center gap-1.5"
          >
            <LogIn className="w-3.5 h-3.5" />
            <span>লগইন</span>
          </button>
          
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-slate-700 hover:text-indigo-600 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-t border-slate-100 bg-white/98 px-5 py-4 shadow-xl animate-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3 font-semibold text-slate-700 text-[14.5px]">
            <a 
              href="#packages" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-slate-800"
            >
              <span className="flex items-center gap-2">
                <Server className="w-4 h-4 text-indigo-600" />
                প্যাকেজ সমূহ
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a 
              href="#features" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-slate-800"
            >
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                ফিচার সমূহ
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            <a 
              href="#faq" 
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 text-slate-800"
            >
              <span className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-amber-600" />
                সাধারণ প্রশ্ন (FAQ)
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
            
            <div className="pt-2 border-t border-slate-100">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLogin();
                }}
                className="w-full btn-primary-gradient text-white text-[14px] font-bold py-2.5 px-4 rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <LogIn className="w-4 h-4" />
                <span>ক্লায়েন্ট লগইন প্যানেল</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
