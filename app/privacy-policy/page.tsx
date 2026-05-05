"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0A0F1C] text-slate-200 font-sans selection:bg-blue-500/30">
      <div className="max-w-4xl mx-auto px-6 py-20">
        <Link 
          href="/" 
          className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        <div className="flex items-center space-x-4 mb-8">
          <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-2xl">
            <Shield className="w-8 h-8 text-blue-500" />
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">Privacy Policy</h1>
        </div>

        <div className="prose prose-invert prose-slate max-w-none">
          <p className="text-slate-400 text-lg leading-relaxed mb-8">
            Last updated: May 2026
          </p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p className="text-slate-400 leading-relaxed">
              Welcome to Silovra.online. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we handle information when you use our website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Google AdSense and Cookies</h2>
            <p className="text-slate-400 leading-relaxed mb-4">
              Silovra.online uses Google AdSense to serve advertisements. Google, as a third-party vendor, uses cookies to serve ads on our site.
            </p>
            <p className="text-slate-400 leading-relaxed mb-4">
              Google's use of advertising cookies enables it and its partners to serve ads to our users based on their visit to Silovra.online and/or other sites on the Internet.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Users may opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Google Ads Settings</a>. Alternatively, you can opt out of a third-party vendor's use of cookies for personalized advertising by visiting <a href="http://www.aboutads.info" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">www.aboutads.info</a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Data Collection</h2>
            <p className="text-slate-400 leading-relaxed">
              Silovra.online does <strong>not</strong> collect, store, or share any personal identification information from its users. The earnings calculator provided on this website is a client-side tool; all inputs and calculations are performed locally in your browser and are not transmitted to or stored on our servers.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Third-Party Links</h2>
            <p className="text-slate-400 leading-relaxed">
              Our website may contain links to third-party websites or services that are not owned or controlled by Silovra.online. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services. We strongly advise you to read the terms and conditions and privacy policies of any third-party website that you visit.
            </p>
          </section>

          <section className="mb-12 border-t border-slate-800 pt-12">
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-slate-400 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <a 
              href="mailto:contact@silovra.online" 
              className="text-blue-400 text-xl font-semibold hover:underline mt-2 inline-block"
            >
              contact@silovra.online
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}
