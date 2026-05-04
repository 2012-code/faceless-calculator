// @ts-nocheck
"use client";

import React, { useState, useEffect } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Video, 
  Users, 
  CheckCircle2, 
  Zap, 
  BarChart3, 
  ArrowRight,
  MonitorPlay,
  Smartphone,
  Link as LinkIcon
} from 'lucide-react';

export default function FacelessEarningsCalculator() {
  // State
  const [platform, setPlatform] = useState('youtube_long');
  const [niche, setNiche] = useState('finance');
  const [views, setViews] = useState(100000);
  const [goalIncome, setGoalIncome] = useState(5000);

  // Constants & Data
  const niches = {
    finance: { name: 'Finance/Business', yt: 30.00, tiktok: 0.80, saturation: 8, avgViews: { youtube_long: 10000, youtube_shorts: 50000, tiktok: 100000 } },
    tech: { name: 'AI/Tech Tutorials', yt: 20.00, tiktok: 0.70, saturation: 5, avgViews: { youtube_long: 15000, youtube_shorts: 40000, tiktok: 80000 } },
    horror: { name: 'Horror/Storytelling', yt: 12.00, tiktok: 0.60, saturation: 4, avgViews: { youtube_long: 25000, youtube_shorts: 100000, tiktok: 200000 } },
    motivation: { name: 'Motivation/Health', yt: 10.00, tiktok: 0.50, saturation: 9, avgViews: { youtube_long: 20000, youtube_shorts: 200000, tiktok: 500000 } },
    gaming: { name: 'Gaming/Entertainment', yt: 4.00, tiktok: 0.40, saturation: 10, avgViews: { youtube_long: 50000, youtube_shorts: 250000, tiktok: 750000 } },
  };

  const platforms = {
    youtube_long: { id: 'youtube_long', name: 'YouTube Long-form', icon: <MonitorPlay className="w-5 h-5"/>, color: 'bg-red-500/10 text-red-500 border-red-500/30' },
    youtube_shorts: { id: 'youtube_shorts', name: 'YouTube Shorts', icon: <TrendingUp className="w-5 h-5"/>, color: 'bg-red-500/10 text-red-500 border-red-500/30' },
    tiktok: { id: 'tiktok', name: 'TikTok Creativity', icon: <Smartphone className="w-5 h-5"/>, color: 'bg-teal-500/10 text-teal-500 border-teal-500/30' },
  };

  // Calculations
  const getRPM = () => {
    const data = niches[niche];
    if (platform === 'youtube_long') return data.yt;
    // YT Shorts RPM logic assuming similar to TikTok
    if (platform === 'youtube_shorts') return Math.max(0.15, data.tiktok * 0.8); 
    return data.tiktok;
  };

  const rpm = getRPM();
  const estimatedEarnings = (views / 1000) * rpm;
  
  const saturation = niches[niche].saturation;
  // Score out of 10 based on saturation (lower is better for success score) and platform viability
  const successScore = Math.max(1, Math.min(10, 10 - saturation + (platform === 'youtube_long' ? 1 : 2))); 

  const avgViewsPerVid = niches[niche].avgViews[platform];
  const videosNeededForGoal = goalIncome > 0 && rpm > 0 ? Math.ceil((goalIncome / rpm * 1000) / avgViewsPerVid) : 0;

  // Format currency
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(amount);
  };

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-US').format(num);
  };

  // --- Components ---
  const AdSlot = ({ label, height = "h-28" }) => (
    <div className={`w-full ${height} my-8`}></div>
  );

  return (
    <div className="min-h-screen bg-[#0A0F1C] text-slate-200 font-sans selection:bg-blue-500/30">
      
      {/* JSON-LD Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
             "@type": "Question",
             "name": "What is a Faceless AI Channel?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "A faceless AI channel is a YouTube or TikTok account where the creator uses artificial intelligence tools—such as AI video generators, text-to-speech voiceovers, and scripting tools—to produce and publish content without ever showing their face."
             }
          },
          {
             "@type": "Question",
             "name": "How much can you make with a faceless YouTube channel?",
             "acceptedAnswer": {
               "@type": "Answer",
               "text": "Earnings vary widely based on your niche and platform. In high-paying niches like Finance, you can earn $30+ per 1,000 views (RPM) on long-form YouTube videos, meaning 100,000 views can yield $3,000. Short form content typically pays between $0.50 to $1.00 RPM via the TikTok Creativity Program."
             }
          }
        ]
      })}} />

      {/* Hero Section */}
      <header className="pt-20 pb-16 px-4 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-1.5 text-blue-400 font-medium text-sm mb-6">
          <Zap className="w-4 h-4" />
          <span>Updated for 2026 Algorithms</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white mb-6">
          Faceless AI Channel <br className="hidden md:block"/> Earnings Calculator 2026
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
          Discover the true profitability of your next AI content empire. Dial in your niche, platform, and traffic to uncover exactly how much you could earn.
        </p>
      </header>

      {/* Main Calculator Body */}
      <main className="max-w-6xl mx-auto px-4 pb-20">
        
        {/* Above the Fold Ad */}
        <AdSlot label="Above the Fold (Google AdSense Placeholder)" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Inputs */}
          <div className="lg:col-span-7 bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-6 md:p-8 shadow-2xl">
            <h2 className="text-2xl font-bold text-white mb-8 flex items-center">
              <Calculator className="w-6 h-6 mr-3 text-blue-500" />
              Tweak Your Strategy
            </h2>

            {/* Platform Toggle */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-400 uppercase tracking-widest mb-3">Platform Strategy</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {Object.values(platforms).map(p => (
                  <button
                    key={p.id}
                    onClick={() => setPlatform(p.id)}
                    className={`flex items-center justify-center space-x-2 py-3 px-4 rounded-xl border transition-all duration-200 ${
                      platform === p.id 
                        ? p.color + ' ring-2 ring-blue-500/20 bg-slate-800' 
                        : 'border-slate-800 hover:border-slate-700 bg-slate-900 text-slate-500 hover:text-slate-300'
                    }`}
                  >
                    {p.icon}
                    <span className="font-medium text-sm">{p.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Niche Dropdown */}
            <div className="mb-8">
              <label className="block text-sm font-semibold text-slate-400 uppercase tracking-widest mb-3">Content Niche</label>
              <select 
                value={niche} 
                onChange={(e) => setNiche(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl py-4 px-4 appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-shadow"
              >
                {Object.entries(niches).map(([key, data]) => (
                  <option key={key} value={key}>{data.name} (Estimated RPM: ${platform === 'youtube_long' ? data.yt : data.tiktok}+)</option>
                ))}
              </select>
            </div>

            {/* Views Slider */}
            <div className="mb-8">
              <div className="flex justify-between items-end mb-3">
                <label className="block text-sm font-semibold text-slate-400 uppercase tracking-widest">Monthly Views Target</label>
                <div className="text-2xl font-bold text-blue-400">{formatNumber(views)}</div>
              </div>
              <input 
                type="range" 
                min="10000" 
                max="10000000" 
                step="10000"
                value={views} 
                onChange={(e) => setViews(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-xs text-slate-600 mt-2 font-medium">
                <span>10K</span>
                <span>5M</span>
                <span>10M</span>
              </div>
            </div>

            {/* Goal Target Slider */}
            <div>
              <div className="flex justify-between items-end mb-3">
                <label className="block text-sm font-semibold text-slate-400 uppercase tracking-widest">Income Goal ($/mo)</label>
                <div className="text-xl font-bold text-slate-300">{formatCurrency(goalIncome)}</div>
              </div>
              <input 
                type="range" 
                min="500" 
                max="50000" 
                step="500"
                value={goalIncome} 
                onChange={(e) => setGoalIncome(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-slate-500"
              />
            </div>

          </div>

          {/* Right Column: Output */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Earnings Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 shadow-2xl shadow-blue-900/20 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <DollarSign className="w-32 h-32" />
              </div>
              <p className="text-blue-200 font-medium tracking-wide mb-2">Estimated Monthly Earnings</p>
              <h2 className="text-6xl font-extrabold text-white mb-6 drop-shadow-sm">
                {formatCurrency(estimatedEarnings)}
              </h2>
              
              <div className="flex items-center justify-between border-t border-blue-500/30 pt-6">
                <div>
                  <p className="text-blue-200 text-sm mb-1">Effective RPM</p>
                  <p className="text-2xl font-bold text-white">${rpm.toFixed(2)}</p>
                </div>
                <div className="text-right">
                  <p className="text-blue-200 text-sm mb-1">Yearly Potential</p>
                  <p className="text-2xl font-bold text-white">{formatCurrency(estimatedEarnings * 12)}</p>
                </div>
              </div>
            </div>

            {/* Bonus Outputs */}
            <div className="grid grid-cols-2 gap-6">
              
              {/* Success Score */}
              <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-slate-300">Success Score</h3>
                </div>
                <div className="flex items-end space-x-2">
                  <span className="text-5xl font-bold text-white">{successScore}</span>
                  <span className="text-slate-500 font-medium mb-1">/ 10</span>
                </div>
                <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                  Based on `{niches[niche].name}` market saturation.
                </p>
              </div>

              {/* Videos Needed */}
              <div className="bg-slate-900/50 backdrop-blur-xl border border-slate-800 rounded-3xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                    <Video className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-slate-300">Action Plan</h3>
                </div>
                <div className="flex items-end space-x-2">
                  <span className="text-5xl font-bold text-white">{videosNeededForGoal}</span>
                </div>
                <p className="text-sm text-slate-400 mt-3 leading-relaxed">
                  Vids/mo needed to hit {formatCurrency(goalIncome)}.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Affiliate / Conversion Elements */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-center text-white mb-2">Build Your Viral Stack</h2>
          <p className="text-slate-400 text-center mb-10 max-w-xl mx-auto">These are the exact tools top faceless creators are using to automate 90% of their workflow in 2026.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 transition-transform">
                <Video className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Video Generator</h3>
              <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">Turn scripts into viral videos with stock footage & dynamic captions in seconds.</p>
              <a href="#" className="flex items-center justify-center w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 rounded-xl transition-colors">
                <span className="mr-2">Claim 14-Day Free Trial</span>
                <LinkIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Neural Voiceovers</h3>
              <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">Ultra-realistic AI voice cloning that algorithmically retains viewer attention.</p>
              <a href="#" className="flex items-center justify-center w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 rounded-xl transition-colors">
                <span className="mr-2">Get Started for free</span>
                <LinkIcon className="w-4 h-4" />
              </a>
            </div>

            <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-blue-500/30 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Keyword Research</h3>
              <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">Find zero-competition keyword topics that rank instantly on YouTube search.</p>
              <a href="#" className="flex items-center justify-center w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 rounded-xl transition-colors">
                <span className="mr-2">Unlock Top Keywords</span>
                <LinkIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </section>

        {/* In-Content Ad */}
        <AdSlot label="In-Content Horizontal (Google AdSense Placeholder)" height="h-24" />

        {/* SEO Content Engine (1200+ words target conceptually) */}
        <article className="prose prose-invert prose-slate max-w-4xl mx-auto mt-20">
          <div className="bg-slate-900/30 border border-slate-800/50 p-8 rounded-3xl">
            
            <h2 className="text-3xl font-bold text-white mb-6 border-b border-slate-800 pb-4">The Ultimate Guide to Starting a Faceless AI Channel in 2026</h2>
            
            <h3 className="text-2xl font-semibold text-slate-200 mt-8 mb-4">What is a Faceless AI Channel?</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              A faceless AI channel is a digital media asset—typically built on platforms like YouTube Long-form, YouTube Shorts, or TikTok—where the creator leverages artificial intelligence to handle production instead of standing in front of a camera. The primary goal is cash flow generated through the YouTube Partner Program, the TikTok Creativity Program Beta, sponsorships, and affiliate marketing. Because the creator never shows their face, this model offers a distinct advantage over traditional influencer routes: sheer scalability. By removing the bottleneck of human recording, you can use generative AI to write scripts, clone high-retention voiceovers, and generate visuals, allowing you to operate a media empire of multiple channels from a single laptop. 
            </p>
            <p className="text-slate-400 leading-relaxed mb-6">
              In 2026, the technology backing faceless channels has reached an inflection point. With the integration of real-time rendering, hyper-realistic text-to-speech models that use algorithmic breathing patterns, and automated editing workflows, setting up a faceless channel has transitioned from a manual grind into an optimized business model. Successful channels are now treated as "faceless businesses" that focus heavily on niche selection, retention metrics, and high RPM (Revenue Per Mille) categories to maximize return on views.
            </p>

            <h3 className="text-2xl font-semibold text-slate-200 mt-10 mb-4">Highest Paying Niches for TikTok vs YouTube in 2026</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Selecting the right niche is the most critical decision you will make. Viewer demographics dictate the advertisers who will bid on your content, directly determining your earnings. Here is an overview of why certain niches outperform others in the calculator above:
            </p>
            <ul className="space-y-4 text-slate-400 mb-8 list-disc pl-6 marker:text-blue-500">
              <li>
                <strong className="text-slate-200">Finance & Wealth ($30+ RPM on YT):</strong> Advertisers selling credit cards, investment platforms, and B2B SaaS products pay premium ad rates to acquire users. This demographic has the highest purchasing power. For TikTok, while the base RPM maxes out near $0.80-$1.20, finance viewers are still the most lucrative to convert via backend affiliate offers.
              </li>
              <li>
                <strong className="text-slate-200">AI & Tech Tutorials ($20+ RPM on YT):</strong> The software tools industry is fiercely competitive. Brands are eager to place ads in front of audiences looking to learn new AI integrations. This audience has high intent to purchase software, driving up ad bidding wars.
              </li>
              <li>
                <strong className="text-slate-200">Horror & Storytelling ($12+ RPM on YT):</strong> While not driven by high-ticket advertisers, the secret to the Storytelling and Horror niche is massive, bingeable watch time. Long viewer retention creates multiple ad impressions per video, and TikTok's algorithm heavily favors the high completion rates associated with storytelling "part 1/part 2" loops.
              </li>
            </ul>

            <h3 className="text-2xl font-semibold text-slate-200 mt-10 mb-4">How to Increase Your RPM (Revenue Per 1k Views)</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              Many creators complain about low CPMs (Cost Per Mille) and RPMs, but the algorithms are highly deterministic. In 2026, you can manipulate your RPM using three core strategies:
            </p>
            <ol className="space-y-4 text-slate-400 mb-8 list-decimal pl-6 marker:text-blue-500 marker:font-bold">
              <li>
                <strong className="text-slate-200">Geographic Targeting via Metatags:</strong> Monetization hinges heavily on viewer location. A view from the United States or the UK pays up to 15x more than a view from lower-GDP regions. By optimizing your voiceovers with distinct regional accents and injecting highly localized colloquialisms, you signal algorithms to serve content to premium English-speaking markets.
              </li>
              <li>
                <strong className="text-slate-200">The "Mid-Roll" Optimization Strategy:</strong> For YouTube Long-form, crossing the 8-minute mark allows for mid-roll advertisements. Placing these ads immediately after a "cliffhanger" moment within your AI script ensures the viewer does not bounce when the ad plays, doubling your effective RPM instantly.
              </li>
              <li>
                <strong className="text-slate-200">Keyword Density in Auto-Caps:</strong> Platforms scan the spoken words in your video. Ensure your AI voiceover script heavily repeats high-CPM trigger words (e.g., "Investing," "Software," "Credit," "AI") in the first 30 seconds. This guarantees the ad network categorizes the video correctly for premium advertisers.
              </li>
            </ol>

            <h3 className="text-2xl font-semibold text-slate-200 mt-10 mb-4">The Tech Stack to Build Scalable AI Content</h3>
            <p className="text-slate-400 leading-relaxed mb-6">
              You do not need to be a video editor to succeed. The barrier to entry has vanished thanks to AI generation APIs. The "holy trinity" of faceless content creation involves three distinct layers:
              <br/><br/>
              <strong>1. The Neural Brain:</strong> Tools powered by GPT-4 and Claude Opus handle the scripting. They can automatically analyze trending TikTok sounds and YouTube search volume, structuring scripts specifically for maximum viewer retention.
              <br/><br/>
              <strong>2. The Voice Clone:</strong> Synthetic voices have evolved past robotic timbres. Using tools linked above, you can generate natural prosody, breathing, and emotional inflection that viewers cannot distinguish from a human. 
              <br/><br/>
              <strong>3. The Visual Engine:</strong> Instead of manually sourcing stock B-roll, new platforms automatically splice related high-definition video clips matching the context of the script, adding dynamic animated captions simultaneously. The result is a highly engaging, rapid-cut video produced in minutes instead of hours.
            </p>

            <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-8 mt-12 mb-8">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <CheckCircle2 className="w-6 h-6 mr-2 text-blue-500" />
                Frequently Asked Questions (FAQ)
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-medium text-slate-200 mb-2">Can AI videos still get monetized in 2026?</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Yes, provided they offer "original value." YouTube and TikTok have updated their terms to allow AI content as long as it is not strictly repetitive spam. Using high-quality scripts, dynamic editing, and unique concepts easily clears the monetization review process.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium text-slate-200 mb-2">How many videos should I post a day?</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    For TikTok Creativity Program and YouTube Shorts, volume is critical. Aim for 2 to 3 shorts per day. For YouTube Long-form, quality overtakes quantity; 2 highly researched videos per week is optimal for sustained search traffic. Use the action plan calculator above to adjust for your income goals.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-medium text-slate-200 mb-2">Will the platform ban me for not showing my face?</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    No. Faceless channels exist natively on these platforms and include animation, documentary, and compilation channels. The anonymity is not a violation of any major platform's terms of service, as long as the content itself adheres to community guidelines.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </article>

      </main>

      {/* Sticky Footer Ad */}
      <div className="sticky bottom-0 w-full p-2 z-50">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between">
          <div className="h-14 sm:h-16 w-full max-w-2xl">
          </div>
        </div>
      </div>
    </div>
  );
}
