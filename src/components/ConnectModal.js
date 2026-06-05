"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

export default function ConnectModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="glass-panel w-full max-w-4xl rounded-2xl p-8 relative z-10 overflow-hidden"
          >
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 dark:bg-white/10 dark:hover:bg-white/20 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-600 dark:text-gray-300">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            <div className="text-center mb-10">
              <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white font-playfair">Choose Your Journey</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">Select the category that best matches your interests</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Option 1: Motivational */}
              <Link href="/motivational" onClick={onClose} className="group relative block">
                <div className="absolute inset-0 bg-gradient-to-r from-tejo-orange/20 to-orange-400/20 rounded-2xl transform transition-transform group-hover:scale-105 group-hover:rotate-1 opacity-0 group-hover:opacity-100 duration-300"></div>
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-100 dark:border-slate-700 shadow-soft hover:shadow-glow transition-all duration-300 relative z-10 h-full flex flex-col">
                  <div className="text-6xl mb-6">🚀</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Motivational</h3>
                  <p className="text-gray-600 dark:text-gray-300 flex-grow mb-8 line-clamp-3">
                    Stories, inspiration, success journeys, life lessons, self-growth content, leadership talks and motivational videos.
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center justify-center px-6 py-3 bg-tejo-orange text-white rounded-full font-semibold w-full group-hover:bg-orange-600 transition-colors">
                      Explore Motivation
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>

              {/* Option 2: Businesses */}
              <Link href="/businesses" onClick={onClose} className="group relative block">
                <div className="absolute inset-0 bg-gradient-to-r from-trust-blue/20 to-blue-400/20 rounded-2xl transform transition-transform group-hover:scale-105 group-hover:-rotate-1 opacity-0 group-hover:opacity-100 duration-300"></div>
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 border border-gray-100 dark:border-slate-700 shadow-soft hover:shadow-[0_0_20px_rgba(30,136,229,0.5)] transition-all duration-300 relative z-10 h-full flex flex-col">
                  <div className="text-6xl mb-6">💼</div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">Businesses</h3>
                  <p className="text-gray-600 dark:text-gray-300 flex-grow mb-8 line-clamp-3">
                    Entrepreneurship, startup stories, business strategies, marketing insights, finance, innovation and industry trends.
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center justify-center px-6 py-3 bg-trust-blue text-white rounded-full font-semibold w-full group-hover:bg-blue-700 transition-colors">
                      Explore Business
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
