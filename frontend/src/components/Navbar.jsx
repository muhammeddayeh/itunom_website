import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'ANA SAYFA', path: '/' },
    { name: 'GALERİ', path: '/galeri' },
    { name: 'ARAÇLARIMIZ', path: '/araclar' },
    { name: 'TAKIMIMIZ', path: '/takim' },
    { name: 'BAŞARILARIMIZ', path: '/basarilar' },
    { name: 'SPONSORLAR', path: '/sponsorlar' },
    { name: 'İLETİŞİM', path: '/iletisim' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white tracking-wider">ITÜNOM</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium transition-colors duration-200 hover:text-red-500 ${
                  isActive(item.path) ? 'text-red-500' : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Toggle */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className="px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-md hover:bg-red-700 transition-colors duration-200">
              TR
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-red-500 transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-black/95 border-t border-gray-800">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(item.path) ? 'text-red-500' : 'text-white hover:text-red-500'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <button className="w-full mt-4 px-4 py-2 bg-red-600 text-white text-sm font-semibold rounded-md hover:bg-red-700 transition-colors duration-200">
              TR
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
