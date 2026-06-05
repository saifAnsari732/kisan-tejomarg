"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BusinessesPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const stats = [
    { label: "Viewers", value: "10M+" },
    { label: "Stories", value: "500+" },
    { label: "Experts", value: "100+" },
    { label: "Industries", value: "50+" }
  ];

  const categories = [
    { title: "Startups", icon: "🚀", color: "bg-blue-100 text-blue-600" },
    { title: "Marketing", icon: "📱", color: "bg-orange-100 text-orange-600" },
    { title: "Sales", icon: "💰", color: "bg-green-100 text-green-600" },
    { title: "Finance", icon: "📈", color: "bg-purple-100 text-purple-600" },
    { title: "Technology", icon: "💻", color: "bg-cyan-100 text-cyan-600" },
    { title: "Leadership", icon: "👔", color: "bg-indigo-100 text-indigo-600" },
    { title: "Investment", icon: "🤝", color: "bg-teal-100 text-teal-600" },
    { title: "MSME", icon: "🏭", color: "bg-rose-100 text-rose-600" }
  ];

  const topics = ["Growth Hacking", "D2C Brands", "Venture Capital", "Bootstrapping", "B2B Sales", "Brand Building", "AI in Business"];

  return (
    <div className="min-h-screen bg-tejo-bg dark:bg-slate-900 pt-24 pb-12">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-trust-blue/10 to-blue-50 dark:from-trust-blue/20 dark:to-slate-900 z-0"></div>
        
        {/* Tech grid pattern */}
        <div className="absolute inset-0 opacity-10 dark:opacity-20 z-0" style={{ backgroundImage: 'linear-gradient(#1E88E5 1px, transparent 1px), linear-gradient(90deg, #1E88E5 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

        <div className="container relative z-10 mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/50 text-trust-blue dark:text-blue-300 font-semibold text-sm mb-6 border border-blue-200 dark:border-blue-800">
                For Founders & Professionals
              </span>
              <h1 className="text-5xl md:text-6xl font-bold font-playfair mb-6 leading-tight text-slate-900 dark:text-white">
                Empowering India's <br />
                <span className="text-trust-blue">Next Generation</span> of <br />
                Entrepreneurs
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-lg">
                Learn business, marketing, sales, finance and startup growth strategies from industry experts.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-trust-blue hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-1 hover:shadow-lg flex items-center">
                  Explore Insights
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
                </button>
                <button className="bg-white dark:bg-slate-800 text-trust-blue border border-trust-blue px-8 py-4 rounded-xl font-bold transition-all hover:bg-blue-50 dark:hover:bg-slate-700 hover:-translate-y-1">
                  Watch Business Stories
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2 relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2">
                <div className="bg-slate-100 dark:bg-slate-900 rounded-xl aspect-[4/3] flex items-center justify-center relative overflow-hidden">
                   {/* Abstract dashboard graphic */}
                   <div className="absolute top-4 left-4 right-4 h-12 bg-white dark:bg-slate-800 rounded-lg flex items-center px-4 gap-2 opacity-50">
                     <div className="w-3 h-3 rounded-full bg-red-400"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                     <div className="w-3 h-3 rounded-full bg-green-400"></div>
                   </div>
                   <div className="absolute bottom-4 left-4 w-1/3 h-1/2 bg-blue-200 dark:bg-blue-900/40 rounded-t-lg"></div>
                   <div className="absolute bottom-4 left-[40%] w-1/4 h-2/3 bg-orange-200 dark:bg-orange-900/40 rounded-t-lg"></div>
                   <div className="absolute bottom-4 right-4 w-1/4 h-3/4 bg-trust-blue opacity-80 rounded-t-lg"></div>
                   
                   <div className="text-center text-slate-500 z-10 bg-white/80 dark:bg-slate-800/80 backdrop-blur p-4 rounded-lg">
                     <p className="font-semibold">Business Growth Dashboard Placeholder</p>
                   </div>
                </div>
              </div>
              
              {/* Floating Stat Card */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute top-10 -left-8 glass-panel p-4 rounded-xl flex items-center gap-4 shadow-lg border border-white/40"
              >
                <div className="bg-tejo-orange/20 p-3 rounded-lg text-tejo-orange">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Revenue Growth</p>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">+340%</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Insights Dashboard (Stats) */}
      <section className="py-12 bg-white dark:bg-slate-800 border-y border-slate-100 dark:border-slate-700">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-trust-blue mb-2">{stat.value}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Business Stories */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <motion.div {...fadeInUp}>
              <h2 className="text-3xl md:text-4xl font-bold font-playfair mb-4 text-slate-900 dark:text-white">Featured Business Stories</h2>
              <p className="text-slate-600 dark:text-slate-400">Learn from the best in the industry.</p>
            </motion.div>
            <motion.a href="#" {...fadeInUp} className="hidden md:flex text-trust-blue font-semibold hover:text-blue-700 items-center">
              View All <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
            </motion.a>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div key={item} {...fadeInUp} className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-soft hover:shadow-xl transition-all group border border-slate-100 dark:border-slate-700">
                <div className="relative aspect-video bg-slate-200 dark:bg-slate-700 overflow-hidden">
                  {/* Image Placeholder */}
                  <div className="absolute inset-0 bg-slate-300 dark:bg-slate-600 group-hover:scale-105 transition-transform duration-500"></div>
                  
                  {/* Overlay Stats */}
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur text-white text-xs font-bold px-3 py-1 rounded-full flex items-center">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20"><path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/><path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/></svg>
                    250K Views
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    <span className="text-xs font-bold text-tejo-orange bg-orange-50 dark:bg-orange-900/30 px-2 py-1 rounded">Startup</span>
                    <span className="text-xs font-bold text-trust-blue bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded">Growth</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-trust-blue transition-colors">How We Scaled Our D2C Brand to ₹100Cr in 2 Years</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 line-clamp-2">Discover the exact marketing strategies and operational shifts that allowed this bootstrap company to experience hypergrowth.</p>
                  
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-700">
                    <div className="w-10 h-10 rounded-full bg-slate-200 dark:bg-slate-600"></div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 dark:text-white">Rahul Sharma</p>
                      <p className="text-xs text-slate-500">Founder, EcoBrands</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Categories & Trending Topics */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div {...fadeInUp} className="mb-10">
                <h2 className="text-3xl font-bold font-playfair mb-2 text-slate-900 dark:text-white">Explore Categories</h2>
                <div className="w-16 h-1 bg-trust-blue rounded-full"></div>
              </motion.div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.map((cat, idx) => (
                  <motion.div 
                    key={idx} 
                    {...fadeInUp} 
                    transition={{ delay: idx * 0.05 }}
                    className="p-4 rounded-xl border border-slate-100 dark:border-slate-700 hover:border-trust-blue dark:hover:border-trust-blue hover:shadow-md transition-all cursor-pointer group flex flex-col items-center text-center"
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl mb-3 ${cat.color} group-hover:scale-110 transition-transform`}>
                      {cat.icon}
                    </div>
                    <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-sm">{cat.title}</h3>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <motion.div {...fadeInUp} className="mb-10">
                <h2 className="text-3xl font-bold font-playfair mb-2 text-slate-900 dark:text-white">Trending Topics</h2>
                <div className="w-16 h-1 bg-tejo-orange rounded-full"></div>
              </motion.div>
              
              <div className="flex flex-wrap gap-2">
                {topics.map((topic, idx) => (
                  <motion.span 
                    key={idx}
                    {...fadeInUp}
                    transition={{ delay: idx * 0.05 }}
                    className="px-4 py-2 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-full text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-trust-blue hover:text-white hover:border-trust-blue transition-colors cursor-pointer"
                  >
                    #{topic}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-trust-blue z-0"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-0"></div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-white">Grow Your Business With Expert Insights</h2>
            <p className="text-xl text-blue-100 mb-10">
              Get access to premium business case studies, founder interviews, and growth strategies.
            </p>
            <button className="bg-white text-trust-blue px-10 py-4 rounded-xl font-bold text-lg transition-all hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)] shadow-lg">
              Start Learning Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
