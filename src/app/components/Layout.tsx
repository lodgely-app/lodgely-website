import React from 'react';
import { Link } from 'react-router';
import { Facebook, Instagram, Twitter, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import logoImg from '../../imports/lodgely_logo.png';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-teal-50 flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 pt-20 pb-10 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
            {/* Logo & Intro Column */}
            <div className="md:col-span-12 lg:col-span-4">
              <div className="flex items-center gap-3 mb-6">
                <img src={logoImg} alt="Lodgely" className="w-12 h-12 rounded-xl shadow-lg shadow-teal-500/20" />
                <span className="text-2xl font-bold text-white tracking-tight">Lodgely</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-sm">
                Facility management simplified. Empowering facility managers and tenants with a seamless, connected living experience.
              </p>
              <div className="flex items-center gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-white transition-all duration-300">
                  <Facebook className="w-5 h-5" fill="currentColor" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-white transition-all duration-300">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-teal-500 hover:text-white transition-all duration-300">
                  <Twitter className="w-5 h-5" fill="currentColor" />
                </a>
              </div>
            </div>
            
            {/* Links Columns */}
            <div className="md:col-span-6 lg:col-span-4 grid grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">Product</h3>
                <ul className="space-y-4 text-sm text-slate-400">
                  <li><Link to="/#features" className="hover:text-teal-400 transition-colors">Features</Link></li>
                  <li><Link to="/#managers" className="hover:text-teal-400 transition-colors">For Managers</Link></li>
                  <li><Link to="/#tenants" className="hover:text-teal-400 transition-colors">For Tenants</Link></li>
                  <li><Link to="/faq" className="hover:text-teal-400 transition-colors">FAQ</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">Company</h3>
                <ul className="space-y-4 text-sm text-slate-400">
                  <li><Link to="/about" className="hover:text-teal-400 transition-colors">About Us</Link></li>
                  <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Contact</Link></li>
                  <li><Link to="/privacy" className="hover:text-teal-400 transition-colors">Privacy Policy</Link></li>
                  <li><Link to="/terms" className="hover:text-teal-400 transition-colors">Terms of Service</Link></li>
                </ul>
              </div>
            </div>
            
            {/* Newsletter Column */}
            <div className="md:col-span-6 lg:col-span-4">
              <h3 className="font-semibold text-white mb-6 uppercase tracking-wider text-xs">Stay Updated</h3>
              <p className="text-sm text-slate-400 mb-4">
                Subscribe to our newsletter for the latest feature updates and property management insights.
              </p>
              <div className="relative flex items-center">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 rounded-xl py-3 pl-4 pr-12 text-sm focus:bg-slate-800 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                />
                <button className="absolute right-2 p-1.5 bg-teal-500 text-white rounded-lg hover:bg-teal-400 transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              <div className="mt-8 space-y-2 text-sm text-slate-400">
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                  Plot 246 Cadastral Zone B10,<br />Jabi-Dakibiu, Abuja, Nigeria
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-500"></span>
                  <a href="mailto:support@lodgely.ng" className="hover:text-white transition-colors">support@lodgely.ng</a>
                </p>
              </div>
            </div>
          </div>
          
          {/* Bottom Copyright */}
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Lodgely. All rights reserved.
            </p>
            <p className="text-xs text-slate-600 max-w-2xl text-center md:text-right">
              Lodgely is a registered trademark. Unauthorized redistribution is prohibited.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
