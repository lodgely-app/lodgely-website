import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import logoImg from "../../imports/lodgely_logo.png";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Features", href: "/features" },
    { label: "For Managers", href: "/#managers" },
    { label: "For Tenants", href: "/#tenants" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl shadow-lg border-b border-white/20 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logoImg} alt="Lodgely" className="w-10 h-10 rounded-lg shadow-sm group-hover:shadow-md transition-shadow" />
          <span className="text-xl font-bold text-[#0F172A] tracking-tight">
            Lodgely
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) =>
            l.href.startsWith("/") ? (
              <Link
                key={l.label}
                to={l.href}
                className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
              >
                {l.label}
              </Link>
            ) : (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors"
              >
                {l.label}
              </a>
            )
          )}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          {/* <a
            href="#signin"
            className="text-sm font-medium text-slate-600 hover:text-teal-600 transition-colors px-4 py-2"
          >
            Sign In
          </a> */}
          <Link
            to="/schedule-demo"
            className="text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 px-5 py-2.5 rounded-xl shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transition-all active:scale-95"
          >
            Schedule a Demo
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-xl hover:bg-slate-100 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/90 backdrop-blur-xl mx-4 mt-2 rounded-2xl overflow-hidden shadow-xl border border-white/20"
          >
            <div className="p-5 flex flex-col gap-4">
              {links.map((l) =>
                l.href.startsWith("/") ? (
                  <Link
                    key={l.label}
                    to={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-base font-medium text-slate-700 hover:text-teal-600 transition-colors"
                  >
                    {l.label}
                  </Link>
                ) : (
                  <a
                    key={l.label}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-base font-medium text-slate-700 hover:text-teal-600 transition-colors"
                  >
                    {l.label}
                  </a>
                )
              )}
              <hr className="border-slate-200" />
              {/* <a href="#signin" className="text-base font-medium text-slate-600">
                Sign In
              </a> */}
              <Link
                to="/schedule-demo"
                onClick={() => setMobileOpen(false)}
                className="text-center text-sm font-semibold text-white bg-gradient-to-r from-teal-500 to-cyan-500 px-5 py-3 rounded-xl shadow-lg shadow-teal-500/25 active:scale-95 transition-transform"
              >
                Schedule a Demo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
