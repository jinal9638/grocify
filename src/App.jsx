import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Products from './components/Products';
import About from './components/About';
import Footer from './components/Footer';

import basketImg from './assets/basket.png';
import { ShoppingCart, Heart, Plus, Minus, X, Trash2 } from 'lucide-react';

// Sample Product Catalog Data
const INITIAL_PRODUCTS = [
  { 
    id: 1, 
    name: 'Fresh Organic Bananas', 
    category: 'Fruits', 
    price: 2.99, 
    unit: 'bunch', 
    rating: 4.8, 
    img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&q=80&w=400' 
  },
  { 
    id: 2, 
    name: 'Crisp Red Apples', 
    category: 'Fruits', 
    price: 3.49, 
    unit: 'lb', 
    rating: 4.9, 
    img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&q=80&w=400' 
  },
  { 
    id: 3, 
    name: 'Fresh Farm Broccoli', 
    category: 'Veggies', 
    price: 1.99, 
    unit: 'head', 
    rating: 4.7, 
    img: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&q=80&w=400' 
  },
  { 
    id: 4, 
    name: 'Organic Carrots Bunch', 
    category: 'Veggies', 
    price: 2.29, 
    unit: 'pack', 
    rating: 4.6, 
    img: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D' 
  },
  { 
    id: 5, 
    name: 'Whole Dairy Milk', 
    category: 'Dairy', 
    price: 4.19, 
    unit: 'half-gal', 
    rating: 4.9, 
    img: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&q=80&w=400' 
  },
  { 
    id: 6, 
    name: 'Cold-Pressed Orange Juice', 
    category: 'Juices', 
    price: 5.49, 
    unit: 'bottle', 
    rating: 4.8, 
    img: 'https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&q=80&w=400' 
  },
  { 
    id: 7, 
    name: 'Artisanal Whole Wheat Bread', 
    category: 'Bakery', 
    price: 3.99, 
    unit: 'loaf', 
    rating: 4.7, 
    img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=400' 
  },
  { 
    id: 8, 
    name: 'Fresh Garden Tomatoes', 
    category: 'Veggies', 
    price: 2.89, 
    unit: 'lb', 
    rating: 4.5, 
    img: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&q=80&w=400' 
  },
];

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Drawer toggle states
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  // Sync dark mode toggle with standard HTML class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  // Console output on search submit
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log('Search Text:', searchQuery);
  };

  // Cart operations
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = item.qty + delta;
          return newQty > 0 ? { ...item, qty: newQty } : item;
        }
        return item;
      })
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Wishlist toggle operation
  const toggleWishlist = (id) => {
    setWishlist((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculations
  const totalCartCount = cartItems.reduce((acc, item) => acc + item.qty, 0);
  const cartSubtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);

  // Filtered lists
  const wishlistedProducts = INITIAL_PRODUCTS.filter((product) =>
    wishlist.includes(product.id)
  );

  const filteredProducts = INITIAL_PRODUCTS.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === 'All' ||
      product.category.toLowerCase().includes(activeCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col font-sans bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-100 transition-colors duration-200">
      
      {/* 1. Navbar */}
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearchSubmit={handleSearchSubmit}
        cartCount={totalCartCount}
        wishlistCount={wishlist.length}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setIsCartOpen={setIsCartOpen}
        setIsWishlistOpen={setIsWishlistOpen}
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {/* 2. Main Page Navigation Container */}
      <main className="flex-grow">
        {activePage === 'home' && (
          <>
            <Hero basketImg={basketImg} />
            <Categories
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
            />
            <Products
              products={filteredProducts}
              activeCategory={activeCategory}
              setActiveCategory={setActiveCategory}
              addToCart={addToCart}
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
            />
          </>
        )}

        {activePage === 'about' && <About />}
      </main>

      {/* 3. Slide-over Shopping Cart Drawer */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsCartOpen(false)}
          />
          <div className="relative w-full max-w-md bg-white dark:bg-slate-900 h-full shadow-2xl p-6 flex flex-col justify-between z-10 border-l border-slate-100 dark:border-slate-800">
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-slate-100 dark:border-slate-800">
                <h3 className="font-bold text-lg dark:text-white flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5 text-brand-500" /> Shopping Cart ({totalCartCount})
                </h3>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 space-y-4 max-h-[60vh] overflow-y-auto pr-1">
                {cartItems.length === 0 ? (
                  <p className="text-center py-12 text-slate-400 text-sm">
                    Your cart is currently empty.
                  </p>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/80 p-3 rounded-xl border border-slate-100 dark:border-slate-700/50"
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-grow">
                        <h4 className="text-xs font-bold dark:text-white">{item.name}</h4>
                        <p className="text-xs text-brand-500 font-semibold mt-0.5">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 bg-white dark:bg-slate-700 px-2 py-1 rounded-lg border border-slate-200 dark:border-slate-600">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="text-slate-500 hover:text-slate-900 dark:hover:text-white"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold dark:text-white">{item.qty}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="text-slate-500 hover:text-slate-900 dark:hover:text-white"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-slate-400 hover:text-rose-500 p-1 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
                  Subtotal
                </span>
                <span className="text-lg font-bold text-slate-900 dark:text-white">
                  ${cartSubtotal.toFixed(2)}
                </span>
              </div>
              <button
                disabled={cartItems.length === 0}
                className="w-full py-3.5 rounded-xl bg-brand-500 hover:bg-brand-600 disabled:opacity-50 text-white font-bold text-sm shadow-lg shadow-brand-500/20 active:scale-95 transition-all"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 4. Slide-over Wishlist Drawer */}
      {isWishlistOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm transition-opacity"
            onClick={() => setIsWishlistOpen(false)}
          />

          <div className="relative w-full max-w-md bg-white dark:bg-slate-900 h-full shadow-2xl p-6 flex flex-col justify-between z-10 border-l border-slate-100 dark:border-slate-800">
            <div>
              <div className="flex justify-between items-center pb-4 border-b border-slate-100 dark:border-slate-800">
                <h3 className="font-bold text-lg dark:text-white flex items-center gap-2">
                  <Heart className="w-5 h-5 text-rose-500 fill-rose-500" /> Your Wishlist ({wishlist.length})
                </h3>
                <button
                  onClick={() => setIsWishlistOpen(false)}
                  className="p-1 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="mt-4 space-y-4 max-h-[75vh] overflow-y-auto pr-1">
                {wishlistedProducts.length === 0 ? (
                  <p className="text-center py-12 text-slate-400 text-sm">
                    Your wishlist is empty. Click the heart icon on products to save them!
                  </p>
                ) : (
                  wishlistedProducts.map((product) => (
                    <div
                      key={product.id}
                      className="flex items-center gap-4 bg-slate-50 dark:bg-slate-800/80 p-3 rounded-xl border border-slate-100 dark:border-slate-700/50"
                    >
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-12 h-12 rounded-lg object-cover"
                      />
                      <div className="flex-grow">
                        <h4 className="text-xs font-bold dark:text-white">{product.name}</h4>
                        <p className="text-xs text-brand-500 font-semibold mt-0.5">
                          ${product.price.toFixed(2)} / {product.unit}
                        </p>
                      </div>

                      <button
                        onClick={() => addToCart(product)}
                        className="px-3 py-1.5 rounded-lg bg-brand-500 hover:bg-brand-600 text-white font-bold text-xs flex items-center gap-1 shadow-sm active:scale-95 transition-all"
                      >
                        <ShoppingCart className="w-3.5 h-3.5" /> Add
                      </button>

                      <button
                        onClick={() => toggleWishlist(product.id)}
                        className="text-slate-400 hover:text-rose-500 p-1 transition-colors"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 5. Footer */}
      <Footer />
    </div>
  );
}