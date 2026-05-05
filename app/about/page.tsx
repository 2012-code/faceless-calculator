"use client";

import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Info, TrendingUp, Calculator } from 'lucide-react';

export default function AboutUs() {
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
            <Info className="w-8 h-8 text-blue-500" />
          </div>
          <h1 className="text-4xl font-extrabold text-white tracking-tight">About Silovra.online</h1>
        </div>

        <div className="prose prose-invert prose-slate max-w-none">
          <p className="text-xl text-slate-300 leading-relaxed mb-12">
            Silovra.online is a free utility tool built to help digital creators and AI entrepreneurs forecast their revenue and plan their content strategy for 2026.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 mb-6">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Our Mission</h3>
              <p className="text-slate-400 leading-relaxed">
                Our mission is to provide transparency in the digital creator economy. We help you understand the true potential of faceless AI channels so you can make data-driven decisions for your content empire.
              </p>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 mb-6">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Utility First</h3>
              <p className="text-slate-400 leading-relaxed">
                We believe in building tools that provide immediate value. Whether you're targeting YouTube Long-form, Shorts, or TikTok, our calculator uses the latest 2026 algorithm data to give you realistic projections.
              </p>
            </div>
          </div>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">Why We Built This</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              The rise of generative AI has fundamentally changed content creation. Creators now have the power to scale multiple channels without ever being on camera. However, many still struggle with the business side—understanding RPMs, market saturation, and volume requirements.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Silovra was created to bridge that gap, providing a simple yet powerful interface to simulate different strategies and find the most profitable path forward in the evolving AI landscape of 2026.
            </p>
          </section>

          <section className="mt-16 pt-12 border-t border-slate-800 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">Ready to plan your next channel?</h2>
            <Link 
              href="/" 
              className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-900/20 hover:scale-105"
            >
              Start Calculating
              <TrendingUp className="w-5 h-5 ml-2" />
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
}
