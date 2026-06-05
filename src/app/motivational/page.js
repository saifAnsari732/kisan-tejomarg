"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function MotivationalPage() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const categories = [
    { title: "Student Motivation", icon: "🎓", desc: "Ace your exams and build your career" },
    { title: "Success Stories", icon: "🌟", desc: "Real journeys of ordinary people doing extraordinary things" },
    { title: "Women Empowerment", icon: "👑", desc: "Inspiring stories of women leaders" },
    { title: "Mindset Mastery", icon: "🧠", desc: "Develop an unstoppable mindset" },
    { title: "Leadership", icon: "🦁", desc: "Lead with courage and vision" },
    { title: "Career Growth", icon: "📈", desc: "Strategies for rapid professional growth" }
  ];

  return (
    <div className="min-h-screen bg-tejo-bg dark:bg-slate-900 pt-24 pb-12">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tejo-orange/20 to-orange-100 dark:from-tejo-orange/10 dark:to-slate-900 z-0"></div>
        {/* Floating blobs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-20 right-10 w-64 h-64 bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        <div className="container relative z-10 mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <h1 className="text-5xl md:text-7xl font-bold font-playfair mb-6 leading-tight text-slate-900 dark:text-white">
                Dream <span className="text-tejo-orange">Bigger.</span><br />
                Achieve <span className="text-yellow-500">Greater.</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8">
                Fuel Your Dreams. Transform Your Future. Watch inspiring stories, success journeys, life-changing experiences and motivational talks from people across India.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-tejo-orange hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 hover:shadow-glow flex items-center">
                  Watch Stories
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                </button>
                <button className="bg-white dark:bg-slate-800 text-tejo-orange border border-tejo-orange px-8 py-4 rounded-full font-bold transition-all hover:bg-orange-50 dark:hover:bg-slate-700 hover:scale-105">
                  Explore Categories
                </button>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800 aspect-video">
                <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
                   <div className="text-center text-slate-400">
                     <svg className="w-16 h-16 mx-auto mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                     <p>Inspiring Video Placeholder</p>
                   </div>
                </div>
              </div>
              
              {/* Floating Element */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -bottom-6 -left-6 glass-panel p-4 rounded-2xl flex items-center gap-3"
              >
                <div className="bg-green-100 p-2 rounded-full text-green-600">📈</div>
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">100k+ Views</p>
                  <p className="text-xs text-slate-500">This Month</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Stories */}
      <section className="py-20 bg-white dark:bg-slate-800">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold font-playfair mb-4 text-slate-900 dark:text-white">Featured Inspirational Stories</h2>
            <div className="w-24 h-1 bg-tejo-orange mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <motion.div key={item} {...fadeInUp} className="group cursor-pointer">
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-video mb-4">
                  <div className="absolute inset-0 bg-slate-200 dark:bg-slate-700 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
                    <span className="text-slate-400">Thumbnail {item}</span>
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity scale-0 group-hover:scale-100 duration-300">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path></svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-tejo-orange transition-colors">The Journey of Resilience: From Zero to Hero</h3>
                <p className="text-slate-600 dark:text-slate-400 mt-2 text-sm">Speaker Name • 1.2M Views</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl font-bold font-playfair mb-4 text-slate-900 dark:text-white">Find Your Motivation</h2>
            <div className="w-24 h-1 bg-tejo-orange mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {categories.map((cat, idx) => (
              <motion.div 
                key={idx} 
                {...fadeInUp} 
                transition={{ delay: idx * 0.1 }}
                className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-soft hover:shadow-lg hover:-translate-y-2 transition-all cursor-pointer border border-slate-100 dark:border-slate-700"
              >
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{cat.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400">{cat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Inspiration Quotes */}
      <section className="py-20 bg-tejo-orange text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold font-playfair mb-12">Daily Inspiration</h2>
            <div className="glass-panel bg-white/10 p-10 rounded-3xl border border-white/20">
              <svg className="w-12 h-12 text-white/50 mx-auto mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              <p className="text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
                "Success is not final, failure is not fatal: it is the courage to continue that counts."
              </p>
              <p className="text-lg font-bold text-orange-200">- Winston Churchill</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white dark:bg-slate-900 text-center">
        <div className="container mx-auto px-6">
          <motion.div {...fadeInUp} className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold font-playfair mb-6 text-slate-900 dark:text-white">Start Your Growth Journey Today</h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-10">
              Join thousands of learners who are transforming their lives through our inspiring stories and motivational content.
            </p>
            <button className="bg-tejo-orange hover:bg-orange-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 hover:shadow-glow">
              Get Inspired Now
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
