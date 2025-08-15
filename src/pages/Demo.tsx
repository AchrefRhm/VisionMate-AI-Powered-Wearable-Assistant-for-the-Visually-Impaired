import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Download,
  Eye,
  Camera,
  Mic,
  Speaker,
  Zap,
  CheckCircle
} from 'lucide-react';

const Demo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [activeDemo, setActiveDemo] = useState('overview');

  const demoVideos = [
    {
      id: 'overview',
      title: 'VisionMate Overview',
      description: 'Complete walkthrough of VisionMate features and capabilities',
      duration: '3:45',
      thumbnail: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop'
    },
    {
      id: 'detection',
      title: 'Object Detection Demo',
      description: 'Real-time object detection and distance measurement in action',
      duration: '2:30',
      thumbnail: 'https://images.pexels.com/photos/8566466/pexels-photo-8566466.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop'
    },
    {
      id: 'navigation',
      title: 'Navigation Assistance',
      description: 'Voice-guided navigation through indoor and outdoor spaces',
      duration: '4:15',
      thumbnail: 'https://images.pexels.com/photos/8566468/pexels-photo-8566468.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop'
    },
    {
      id: 'interface',
      title: 'User Interface Demo',
      description: 'Tactile buttons and voice commands demonstration',
      duration: '1:50',
      thumbnail: 'https://images.pexels.com/photos/8566470/pexels-photo-8566470.jpeg?auto=compress&cs=tinysrgb&w=800&h=450&fit=crop'
    }
  ];

  const liveFeatures = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Live Object Detection",
      status: "Active",
      description: "Currently detecting: Person, Chair, Door",
      color: "text-green-400"
    },
    {
      icon: <Camera className="w-6 h-6" />,
      title: "Depth Estimation",
      status: "Processing",
      description: "Distance: 2.3m, 1.8m, 4.1m",
      color: "text-blue-400"
    },
    {
      icon: <Mic className="w-6 h-6" />,
      title: "Voice Recognition",
      status: "Listening",
      description: "Ready for voice commands",
      color: "text-purple-400"
    },
    {
      icon: <Speaker className="w-6 h-6" />,
      title: "Audio Feedback",
      status: "Ready",
      description: "TTS engine initialized",
      color: "text-cyan-400"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Accessibility Consultant",
      quote: "VisionMate represents a breakthrough in assistive technology. The real-time feedback is incredibly accurate and intuitive.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      name: "Dr. Michael Rodriguez",
      role: "Vision Rehabilitation Specialist",
      quote: "The offline capability and privacy-first approach make this perfect for daily use. My patients love the independence it provides.",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    },
    {
      name: "Emma Thompson",
      role: "Beta Tester",
      quote: "After using VisionMate for 3 months, I can navigate my workplace with confidence I never had before. It's life-changing.",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="relative z-10 pt-24 pb-20"
    >
      {/* Header */}
      <section className="px-6 py-20">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              See VisionMate in Action
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
              Experience the revolutionary capabilities of VisionMate through interactive demos and real-world usage scenarios
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Demo Video */}
      <section className="px-6 py-12">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="relative rounded-3xl overflow-hidden bg-black border border-white/10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-video relative">
                <img
                  src={demoVideos.find(v => v.id === activeDemo)?.thumbnail}
                  alt="Demo Video"
                  className="w-full h-full object-cover"
                />
                
                {/* Video Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <motion.button
                    className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? (
                      <Pause className="w-8 h-8 text-white" />
                    ) : (
                      <Play className="w-8 h-8 text-white ml-1" />
                    )}
                  </motion.button>
                </div>

                {/* Video Controls */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setIsMuted(!isMuted)}
                      className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-all duration-300"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5 text-white" />
                      ) : (
                        <Volume2 className="w-5 h-5 text-white" />
                      )}
                    </button>
                    <span className="text-white text-sm">
                      {demoVideos.find(v => v.id === activeDemo)?.duration}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-all duration-300">
                      <Download className="w-5 h-5 text-white" />
                    </button>
                    <button className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-all duration-300">
                      <Maximize className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Live Demo Badge */}
                <div className="absolute top-4 left-4">
                  <div className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-2">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span>LIVE DEMO</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Demo Info */}
            <div className="mt-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-2">
                {demoVideos.find(v => v.id === activeDemo)?.title}
              </h2>
              <p className="text-slate-400">
                {demoVideos.find(v => v.id === activeDemo)?.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Selection */}
      <section className="px-6 py-12">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {demoVideos.map((video, index) => (
              <motion.div
                key={video.id}
                className={`cursor-pointer rounded-2xl overflow-hidden border-2 transition-all duration-300 ${
                  activeDemo === video.id
                    ? 'border-cyan-400 shadow-2xl shadow-cyan-500/20'
                    : 'border-white/10 hover:border-white/20'
                }`}
                onClick={() => setActiveDemo(video.id)}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="aspect-video relative">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                    {video.duration}
                  </div>
                </div>
                <div className="p-4 bg-white/5 backdrop-blur-sm">
                  <h3 className="font-bold text-white mb-1">{video.title}</h3>
                  <p className="text-slate-400 text-sm">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Live System Status */}
      <section className="px-6 py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Live System Status
            </h2>
            <p className="text-xl text-slate-400">
              Real-time monitoring of VisionMate's core systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {liveFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500`}>
                    {feature.icon}
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full ${
                      feature.status === 'Active' ? 'bg-green-400 animate-pulse' :
                      feature.status === 'Processing' ? 'bg-blue-400 animate-pulse' :
                      feature.status === 'Listening' ? 'bg-purple-400 animate-pulse' :
                      'bg-cyan-400 animate-pulse'
                    }`}></div>
                    <span className={`text-sm font-medium ${feature.color}`}>
                      {feature.status}
                    </span>
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="px-6 py-20">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Try VisionMate Virtually
              </h2>
              <p className="text-xl text-slate-400 mb-8">
                Experience VisionMate's capabilities through our interactive simulator
              </p>
              
              <motion.button
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Zap className="w-5 h-5" />
                <span>Launch Interactive Demo</span>
              </motion.button>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Upload Image</h3>
                <p className="text-slate-400 text-sm">Test object detection with your own images</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Voice Commands</h3>
                <p className="text-slate-400 text-sm">Try voice interaction and TTS feedback</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Real-time Results</h3>
                <p className="text-slate-400 text-sm">See detection and depth estimation live</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Testimonials */}
      <section className="px-6 py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              What Users Are Saying
            </h2>
            <p className="text-xl text-slate-400">
              Real feedback from VisionMate beta testers and accessibility experts
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-white">{testimonial.name}</h3>
                    <p className="text-slate-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-slate-300 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Demo;