import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Sparkles, 
  Rocket, 
  ArrowRight, 
  Play,
  Users,
  Award,
  MapPin,
  ChevronDown
} from 'lucide-react';

const Home = () => {
  const [currentStat, setCurrentStat] = useState(0);

  const stats = [
    { number: "285M", label: "Visually Impaired Worldwide", color: "text-cyan-400" },
    { number: "99%", label: "Offline Operation", color: "text-green-400" },
    { number: "<2s", label: "Response Time", color: "text-purple-400" },
    { number: "$200", label: "Target Cost", color: "text-orange-400" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10"
    >
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/20 rounded-full px-6 py-2 mb-8">
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-medium">AI-Powered Wearable Assistant</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent leading-tight">
              VisionMate
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Empowering blind and visually impaired individuals with real-time spatial awareness and navigation support through cutting-edge AI technology.
            </p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/features"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2"
                >
                  <Rocket className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span>Explore Features</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  to="/demo"
                  className="px-8 py-4 rounded-full border border-white/20 hover:border-white/40 backdrop-blur-sm transition-all duration-300 hover:bg-white/5 flex items-center space-x-2"
                >
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </Link>
              </motion.div>
            </div>

            {/* Creator Badge */}
            <motion.div 
              className="inline-flex items-center space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-6 py-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                <span className="text-white font-bold">AR</span>
              </div>
              <div className="text-left">
                <p className="text-sm text-slate-400">Created by</p>
                <p className="font-semibold text-white">Achref Rhouma</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            className="mt-16 relative"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="mx-auto max-w-4xl relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-2xl"></div>
              <img 
                src="https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=1200&h=600&fit=crop" 
                alt="VisionMate Device Concept"
                className="relative z-10 w-full h-64 md:h-96 object-cover rounded-2xl shadow-2xl border border-white/10"
              />
              <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
                <p className="text-sm text-white">VisionMate Prototype</p>
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6 text-white/50" />
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className={`text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 ${
                  currentStat === index ? 'ring-2 ring-cyan-400/50 shadow-2xl shadow-cyan-500/20' : ''
                }`}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>
                  {stat.number}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Preview */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Transforming Lives Through Technology
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto">
              VisionMate isn't just a device—it's independence, confidence, and freedom for millions worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-cyan-600/10 to-purple-600/10 backdrop-blur-sm border border-cyan-500/20"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Accessibility First</h3>
              <p className="text-slate-400">Designed with and for the visually impaired community to ensure real-world usability and impact.</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-600/10 to-emerald-600/10 backdrop-blur-sm border border-green-500/20"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Affordable Innovation</h3>
              <p className="text-slate-400">Low-cost, portable solution that makes advanced navigation technology accessible to everyone.</p>
            </motion.div>
            
            <motion.div 
              className="text-center p-8 rounded-2xl bg-gradient-to-br from-orange-600/10 to-red-600/10 backdrop-blur-sm border border-orange-500/20"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Independent Navigation</h3>
              <p className="text-slate-400">Enables confident, independent navigation in daily spaces without external assistance.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-12"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Discover how VisionMate is revolutionizing accessibility through AI-powered navigation
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/features"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Explore All Features</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link 
                  to="/contact"
                  className="px-8 py-4 rounded-full border border-white/20 hover:border-white/40 backdrop-blur-sm transition-all duration-300 hover:bg-white/5"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;