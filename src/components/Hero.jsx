import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, Truck, Clock, Star } from 'lucide-react';

export default function Hero({ basketImg }) {
  return (
    <section id="home" className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Column Text */}
          <div className="space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/60 text-brand-600 dark:text-brand-400 text-xs font-semibold tracking-wide border border-orange-200 dark:border-orange-800/50">
              <Sparkles className="w-4 h-4" />
              <span>Export Best Quality Organic Food</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
              Tasty Organic <span className="text-brand-500">Fruits & Veggies</span> In Your City
            </h1>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl mx-auto lg:mx-0">
              Breathe fresh wellness into your family’s kitchen with hand-picked, pesticide-free harvest delivered straight from local certified farms to your doorstep within 2 hours.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#products"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-brand-500 to-amber-500 hover:from-brand-600 hover:to-amber-600 text-white font-bold shadow-lg shadow-brand-500/30 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200 dark:border-slate-800">
              <div className="flex flex-col items-center lg:items-start">
                <Truck className="w-5 h-5 text-brand-500 mb-1" />
                <span className="text-xs font-bold dark:text-white">Free Express</span>
                <span className="text-[11px] text-slate-500">Orders over $30</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <ShieldCheck className="w-5 h-5 text-brand-500 mb-1" />
                <span className="text-xs font-bold dark:text-white">100% Organic</span>
                <span className="text-[11px] text-slate-500">Certified origin</span>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <Clock className="w-5 h-5 text-brand-500 mb-1" />
                <span className="text-xs font-bold dark:text-white">Fast Delivery</span>
                <span className="text-[11px] text-slate-500">Under 120 mins</span>
              </div>
            </div>
          </div>

          {/* Right Column Custom Hero Visual */}
          <div className="relative flex justify-center items-center py-6">
            {/* Background Glow Accent */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-brand-500/20 dark:bg-brand-500/10 rounded-full blur-3xl -z-10" />

            <div className="relative w-full max-w-lg rounded-3xl overflow-visible shadow-2xl p-2 bg-white/40 dark:bg-slate-800/40 backdrop-blur-sm border border-white/60 dark:border-slate-700/60">
              
              {/* Top-Left Floating Offer Badge */}
              <div className="absolute -top-5 -left-4 z-20 bg-white dark:bg-slate-800 rounded-2xl p-3 shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-brand-600 font-extrabold text-sm flex items-center justify-center shrink-0">
                  -40%
                </div>
                <div className="pr-2">
                  <span className="block text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Fresh Harvest
                  </span>
                  <span className="block text-sm font-extrabold text-slate-900 dark:text-white">
                    Special Offer
                  </span>
                </div>
              </div>

              {/* Main Image Container */}
              <div className="overflow-hidden rounded-2xl h-80 sm:h-96 w-full">
                <img
                  src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=800"
                  alt="Fresh organic fruits"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Bottom-Right Floating Rating Badge */}
              <div className="absolute -bottom-5 -right-4 z-20 bg-white dark:bg-slate-800 rounded-2xl p-3 shadow-xl border border-slate-100 dark:border-slate-700 flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-500 flex items-center justify-center shrink-0">
                  <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
                </div>
                <div className="pr-2">
                  <div className="flex items-center gap-1">
                    <span className="text-sm font-extrabold text-slate-900 dark:text-white">
                      4.9 ★
                    </span>
                    <span className="text-xs font-bold text-slate-800 dark:text-slate-200">
                      Rated
                    </span>
                  </div>
                  <span className="block text-[11px] font-medium text-slate-400">
                    10k+ Reviews
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}