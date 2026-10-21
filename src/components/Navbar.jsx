import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Search, 
  Heart, 
  ShoppingCart, 
  Sun, 
  Moon, 
  Menu, 
  X 
} from 'lucide-react';

export default function Navbar({ 
  searchQuery, 
  setSearchQuery, 
  handleSearchSubmit, 
  cartCount, 
  wishlistCount, 
  darkMode, 
  setDarkMode, 
  setIsCartOpen,
  setIsWishlistOpen,
  activePage,
  setActivePage
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About Us', id: 'about' },
    { name: 'Contact Us', id: 'contact' },
  ];

  const handleNavClick = (id) => {
    if (id === 'contact') {
      // Smooth scroll to footer contact section
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setActivePage(id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-100 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center gap-2 group shrink-0 text-left focus:outline-none"
          >
            <div className="w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center shadow-lg shadow-brand-500/30 group-hover:scale-105 transition-transform">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <span className="font-bold text-xl sm:text-2xl tracking-tight text-slate-900 dark:text-white">
              Grocify<span className="text-brand-500">.</span>
            </span>
          </button>

          {/* Desktop Nav Menu Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`transition-colors text-sm font-semibold ${
                    isActive 
                      ? 'text-brand-500 font-bold border-b-2 border-brand-500 pb-0.5' 
                      : 'text-slate-600 dark:text-slate-300 hover:text-brand-500 dark:hover:text-brand-500'
                  }`}
                >
                  {link.name}
                </button>
              );
            })}
          </div>

          {/* Desktop Search Bar */}
          <form 
            onSubmit={handleSearchSubmit} 
            className="hidden lg:flex items-center relative max-w-xs w-full"
          >
            <input
              type="text"
              id="desktop-search"
              name="search"
              autoComplete="off"
              placeholder="Search organic items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all dark:text-white"
            />
            <button
              type="submit"
              aria-label="Submit Search"
              className="absolute right-1 p-1.5 rounded-full bg-brand-500 text-white hover:bg-brand-600 transition-colors"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {/* Action Icons Right Section */}
          <div className="flex items-center gap-2 sm:gap-4">
            
            {/* Dark Mode Theme Toggle Button */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Theme"
            >
              {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            {/* Wishlist Button (Opens Wishlist Drawer) */}
            <button 
              onClick={() => setIsWishlistOpen(true)}
              aria-label="Open Wishlist" 
              className="p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 relative transition-colors"
            >
              <Heart className={`w-5 h-5 ${wishlistCount > 0 ? 'text-rose-500 fill-rose-500' : ''}`} />
              {wishlistCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-pulse">
                  {wishlistCount}
                </span>
              )}
            </button>

            {/* Cart Button (Opens Cart Drawer) */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center gap-2 px-3 py-2 rounded-full bg-brand-500 text-white hover:bg-brand-600 shadow-md shadow-brand-500/20 transition-all active:scale-95"
              aria-label="Open Cart"
            >
              <div className="relative">
                <ShoppingCart className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-brand-600 text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center shadow">
                    {cartCount}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline text-xs font-bold uppercase tracking-wider">Cart</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-3 pb-6 space-y-3 animate-fadeIn">
          <form onSubmit={handleSearchSubmit} className="flex items-center relative w-full mb-3">
            <input
              type="text"
              id="mobile-search"
              name="mobileSearch"
              autoComplete="off"
              placeholder="Search organic items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-4 pr-10 py-2 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 dark:text-white"
            />
            <button
              type="submit"
              aria-label="Submit Search Mobile"
              className="absolute right-1 p-1.5 rounded-full bg-brand-500 text-white"
            >
              <Search className="w-4 h-4" />
            </button>
          </form>

          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              className={`block w-full text-left px-3 py-2 rounded-md text-base font-medium transition-colors ${
                activePage === link.id 
                  ? 'bg-brand-50 dark:bg-slate-800 text-brand-500 font-bold' 
                  : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}