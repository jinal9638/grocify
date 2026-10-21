import React from 'react';
import { Leaf, Truck, Heart } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-brand-500 bg-brand-50 dark:bg-brand-950/50 px-4 py-1.5 rounded-full border border-brand-100 dark:border-brand-900">
            About Grocify
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-4 tracking-tight">
            Nourishing Families with Farm-Fresh Organic Goodness
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base mt-4 leading-relaxed">
            Founded in 2020, Grocify bridges local organic farms and your dinner table with 100% certified pesticide-free produce delivered within 2 hours of harvest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-50 dark:bg-slate-800/60 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-5">
              <Leaf className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">100% Organic Certified</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              All produce is grown without chemical pesticides or synthetic fertilizers.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-5">
              <Truck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">2-Hour Delivery</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Harvested daily at dawn and delivered straight to your doorstep.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 p-8 rounded-3xl border border-slate-100 dark:border-slate-800 text-center">
            <div className="w-14 h-14 mx-auto rounded-2xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-5">
              <Heart className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Local Farmers First</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm">
              Directly supporting over 150 local certified family farms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}