import React from 'react';
import { X, LogIn, Key, Shield, MessageCircle, ExternalLink, Terminal } from 'lucide-react';
import { WHATSAPP_BASE_URL } from '../data/packagesData';

export default function LoginModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const loginHelpWhatsapp = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    'হ্যালো, আমি আমার KidsVPS প্যানেল লগইন সংক্রান্ত সাহায্য চাই।'
  )}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      {/* Modal Dialog Card */}
      <div 
        className="relative bg-white rounded-2xl max-w-md w-full p-6 sm:p-7 shadow-2xl border border-slate-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
            <LogIn className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">ক্লায়েন্ট প্যানেল লগইন</h3>
            <p className="text-xs text-slate-500">KidsVPS Cloud কন্ট্রোল প্যানেল</p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="space-y-4 text-sm text-slate-600">
          <div className="bg-slate-50 border border-slate-200/80 rounded-xl p-3.5 space-y-2">
            <div className="flex items-center gap-2 font-semibold text-slate-800 text-xs">
              <Terminal className="w-4 h-4 text-indigo-600" />
              <span>ওয়েব টার্মিনাল ও প্যানেল অ্যাক্সেস</span>
            </div>
            <p className="text-xs leading-relaxed text-slate-600">
              অর্ডার সম্পন্ন হওয়ার পর আপনার WhatsApp অথবা ইমেইলে প্রদত্ত প্যানেল লিংক এবং ইউজারনেম/পাসওয়ার্ড দিয়ে প্যানেল ও ওয়েব টার্মিনালে প্রবেশ করতে পারেন।
            </p>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-start gap-2.5 text-xs text-slate-600">
              <Key className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <span>SSH পোর্ট ও ফুল রুট পাসওয়ার্ড দিয়ে সরাসরি টার্মিনালে কাজ করতে পারেন।</span>
            </div>
            <div className="flex items-start gap-2.5 text-xs text-slate-600">
              <Shield className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span>লগইন তথ্য ভুলে গেলে সরাসরি হোয়াটসঅ্যাপ সাপোর্টে যোগাযোগ করুন।</span>
            </div>
          </div>
        </div>

        {/* Modal Actions */}
        <div className="mt-6 flex flex-col gap-2.5">
          <a
            href={loginHelpWhatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-btn text-white text-xs sm:text-sm font-bold py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm text-center"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>লগইন সহায়তা পেতে WhatsApp-এ মেসেজ করুন</span>
          </a>

          <button
            onClick={onClose}
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs sm:text-sm font-semibold py-2 px-4 rounded-xl transition-colors"
          >
            ঠিক আছে, বন্ধ করুন
          </button>
        </div>
      </div>
    </div>
  );
}
