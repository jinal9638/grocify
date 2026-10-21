import React from 'react';
import { Apple, Carrot, Milk, Wine, Cookie, Sparkles } from 'lucide-react';

const CATEGORIES = [
  {
    id: 'fruits',
    name: 'Organic Fruits',
    icon: Apple,
    count: '24+ Items',
    bgColor: 'bg-amber-100 dark:bg-amber-950/40',
    textColor: 'text-amber-600 dark:text-amber-400',
    borderColor: 'border-amber-200 dark:border-amber-800/40',
  },
  {
    id: 'veggies',
    name: 'Fresh Veggies',
    icon: Carrot,
    count: '30+ Items',
    bgColor: 'bg-emerald-100 dark:bg-emerald-950/40',
    textColor: 'text-emerald-600 dark:text-emerald-400',
    borderColor: 'border-emerald-200 dark:border-emerald-800/40',
  },
  {
    id: 'dairy',
    name: 'Farm Dairy',
    icon: Milk,
    count: '15+ Items',
    bgColor: 'bg-blue-100 dark:bg-blue-950/40',
    textColor: 'text-blue-600 dark:text-blue-400',
    borderColor: 'border-blue-200 dark:border-blue-800/40',
  },
  {
    id: 'juices',
    name: 'Cold Juices',
    icon: Wine,
    count: '12+ Items',
    bgColor: 'bg-rose-100 dark:bg-rose-950/40',
    textColor: 'text-rose-600 dark:text-rose-400',
    borderColor: 'border-rose-200 dark:border-rose-800/40',
  },
  {
    id: 'bakery',
    name: 'Fresh Bakery',
    icon: Cookie,
    count: '18+ Items',
    bgColor: 'bg-orange-100 dark:bg-orange-950/40',
    textColor: 'text-orange-600 dark:text-orange-400',
    borderColor: 'border-orange-200 dark:border-orange-800/40',
  },
];

export default function Categories({ activeCategory, setActiveCategory }) {
  return (
    <section className="py-12 bg-slate-50 dark:bg-slate-900/50 border-y border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-500 font-semibold text-xs tracking-wider uppercase mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Explore Farm Fresh</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Popular Categories
            </h2>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm max-w-md">
            Select a category to quickly filter our hand-picked organic selection delivered straight to your doorstep.
          </p>
        </div>

        {/* Category Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => {
            const IconComponent = cat.icon;
            const isActive = activeCategory === cat.name;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(isActive ? 'All' : cat.name)}
                className={`flex flex-col items-center p-5 rounded-2xl border transition-all duration-200 text-center group cursor-pointer ${
                  isActive
                    ? 'border-brand-500 bg-white dark:bg-slate-800 shadow-xl shadow-brand-500/10 scale-105 ring-2 ring-brand-500/20'
                    : 'border-slate-200/80 dark:border-slate-800 bg-white/70 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 hover:shadow-md'
                }`}
              >
                {/* Icon Circle */}
                <div
                  className={`w-14 h-14 rounded-full flex items-center justify-center mb-3 transition-transform duration-200 group-hover:scale-110 ${cat.bgColor} ${cat.textColor}`}
                >
                  <IconComponent className="w-7 h-7" />
                </div>

                {/* Category Name */}
                <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base group-hover:text-brand-500 transition-colors">
                  {cat.name}
                </h3>

                {/* Item Count */}
                <span className="text-xs text-slate-400 dark:text-slate-500 mt-1 font-medium">
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
}