import React from 'react';
import { ShoppingCart, Heart, Star, Sparkles, Filter } from 'lucide-react';

export default function Products({
  products,
  activeCategory,
  setActiveCategory,
  addToCart,
  wishlist,
  toggleWishlist,
}) {
  const categories = ['All', 'Fruits', 'Veggies', 'Dairy', 'Juices', 'Bakery'];

  return (
    <section id="products" className="py-16 bg-white dark:bg-slate-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header & Filters */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-brand-500 font-semibold text-xs tracking-wider uppercase mb-1">
              <Sparkles className="w-4 h-4" />
              <span>Organic & Certified</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Our Fresh Harvest
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 max-w-lg">
              Hand-picked daily from local organic certified farms and delivered right to your door.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            <Filter className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block mr-1" />
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap active:scale-95 ${
                    isActive
                      ? 'bg-brand-500 text-white shadow-md shadow-brand-500/20'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Empty Filter State */}
        {products.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 dark:bg-slate-800/40 rounded-3xl border border-dashed border-slate-200 dark:border-slate-800">
            <p className="text-slate-500 dark:text-slate-400 text-base font-medium">
              No organic items found matching your filter or search query.
            </p>
            <button
              onClick={() => setActiveCategory('All')}
              className="mt-4 px-5 py-2 rounded-full bg-brand-500 text-white text-xs font-bold hover:bg-brand-600 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          /* Products Grid */
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => {
              const isWishlisted = wishlist.includes(product.id);

              return (
                <div
                  key={product.id}
                  className="bg-slate-50 dark:bg-slate-800/60 rounded-2xl p-4 border border-slate-100 dark:border-slate-800/80 relative group flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                >
                  <div>
                    {/* Image Box */}
                    <div className="relative overflow-hidden rounded-xl bg-white dark:bg-slate-700 h-48 mb-4">
                      <img
                        src={product.img}
                        alt={product.name}
                        crossOrigin="anonymous"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />

                      {/* Organic Badge */}
                      <span className="absolute top-3 left-3 bg-emerald-500/90 backdrop-blur text-white text-[10px] font-extrabold px-2 py-0.5 rounded-md uppercase tracking-wider">
                        100% Organic
                      </span>

                      {/* Wishlist Button */}
                      <button
                        onClick={() => toggleWishlist(product.id)}
                        aria-label="Toggle Wishlist"
                        className="absolute top-3 right-3 p-2 rounded-full bg-white/80 dark:bg-slate-800/80 backdrop-blur text-slate-600 dark:text-slate-200 hover:text-rose-500 dark:hover:text-rose-500 transition-colors shadow-sm"
                      >
                        <Heart
                          className={`w-4 h-4 transition-all ${
                            isWishlisted ? 'fill-rose-500 text-rose-500 scale-110' : ''
                          }`}
                        />
                      </button>
                    </div>

                    {/* Rating & Category */}
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-brand-600 dark:text-brand-400 font-semibold uppercase tracking-wider text-[10px]">
                        {product.category}
                      </span>
                      <div className="flex items-center gap-1 text-amber-400 font-bold">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="text-slate-700 dark:text-slate-300">{product.rating}</span>
                      </div>
                    </div>

                    {/* Product Title */}
                    <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1 line-clamp-1">
                      {product.name}
                    </h3>

                    {/* Price */}
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-lg font-extrabold text-slate-900 dark:text-white">
                        ${product.price.toFixed(2)}
                      </span>
                      <span className="text-xs text-slate-400 dark:text-slate-500">
                        / {product.unit}
                      </span>
                    </div>
                  </div>

                  {/* Add to Cart CTA */}
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full py-2.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-brand-500/20 active:scale-95 transition-all"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    <span>Add to Cart</span>
                  </button>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}