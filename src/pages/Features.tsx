import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Camera, 
  Ruler, 
  Radio, 
  Volume2, 
  Hand, 
  Wifi,
  Eye,
  Brain,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Real-Time Object Detection",
      description: "Advanced YOLOv8 neural network identifies people, doors, stairs, furniture, and vehicles in real-time",
      details: [
        "Recognizes 80+ object classes",
        "Sub-second detection speed",
        "Works in various lighting conditions",
        "Continuous learning capability"
      ],
      color: "from-blue-500 to-cyan-500",
      image: "https://images.pexels.com/photos/8566466/pexels-photo-8566466.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
    },
    {
      icon: <Ruler className="w-8 h-8" />,
      title: "Monocular Depth Estimation",
      description: "Measure distances accurately using just a single RGB camera with ML-Depth-Pro technology",
      details: [
        "No additional sensors required",
        "Accurate up to 10 meters",
        "Real-time depth mapping",
        "Optimized for mobile hardware"
      ],
      color: "from-green-500 to-emerald-500",
      image: "https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Ultrasonic Proximity Alerts",
      description: "HC-SR04 sensors provide immediate tactile feedback for nearby obstacles",
      details: [
        "360-degree obstacle detection",
        "Vibration motor feedback",
        "Adjustable sensitivity levels",
        "Low power consumption"
      ],
      color: "from-purple-500 to-violet-500",
      image: "https://images.pexels.com/photos/8566468/pexels-photo-8566468.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
    },
    {
      icon: <Volume2 className="w-8 h-8" />,
      title: "Intelligent Voice Feedback",
      description: "On-device text-to-speech announces object names, distances, and navigation instructions",
      details: [
        "Natural voice synthesis",
        "Multiple language support",
        "Contextual announcements",
        "Adjustable speech rate"
      ],
      color: "from-orange-500 to-red-500",
      image: "https://images.pexels.com/photos/8566470/pexels-photo-8566470.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
    },
    {
      icon: <Hand className="w-8 h-8" />,
      title: "Tactile Interface",
      description: "Physical buttons provide intuitive control for scene description and voice commands",
      details: [
        "Ergonomic button placement",
        "Haptic feedback confirmation",
        "Customizable shortcuts",
        "Weather-resistant design"
      ],
      color: "from-pink-500 to-rose-500",
      image: "https://images.pexels.com/photos/8566471/pexels-photo-8566471.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: "Complete Offline Operation",
      description: "All AI models run locally for instant feedback without internet dependency",
      details: [
        "No cloud connectivity required",
        "Privacy-first architecture",
        "Instant response times",
        "Works anywhere, anytime"
      ],
      color: "from-indigo-500 to-blue-500",
      image: "https://images.pexels.com/photos/8566472/pexels-photo-8566472.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop"
    }
  ];

  const additionalFeatures = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Computer Vision Pipeline",
      description: "Advanced image processing with OpenCV optimization"
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Edge AI Processing",
      description: "Raspberry Pi optimized neural network inference"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Privacy Protection",
      description: "All data processing happens locally on device"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Low Power Design",
      description: "Optimized for all-day battery life"
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
              Revolutionary Features
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
              Discover the cutting-edge technologies that make VisionMate the most advanced wearable assistant for the visually impaired
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Features */}
      <section className="px-6 py-20">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Feature Navigation */}
            <div className="space-y-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                    activeFeature === index
                      ? 'bg-white/10 border border-cyan-400/50 shadow-2xl shadow-cyan-500/20'
                      : 'bg-white/5 border border-white/10 hover:bg-white/8'
                  }`}
                  onClick={() => setActiveFeature(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${feature.color} flex-shrink-0`}>
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-slate-400 text-sm">{feature.description}</p>
                      {activeFeature === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          transition={{ duration: 0.3 }}
                          className="mt-4 space-y-2"
                        >
                          {feature.details.map((detail, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                              <span className="text-slate-300 text-sm">{detail}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </div>
                    <ArrowRight className={`w-5 h-5 transition-transform duration-300 ${
                      activeFeature === index ? 'rotate-90 text-cyan-400' : 'text-slate-500'
                    }`} />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Feature Showcase */}
            <div className="relative">
              <motion.div
                key={activeFeature}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-2xl"></div>
                <img
                  src={features[activeFeature].image}
                  alt={features[activeFeature].title}
                  className="relative z-10 w-full h-96 object-cover rounded-2xl border border-white/10"
                />
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2">
                  <p className="text-white font-medium">{features[activeFeature].title}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Features Grid */}
      <section className="px-6 py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Advanced Capabilities
            </h2>
            <p className="text-xl text-slate-400">
              Built with enterprise-grade technology for reliability and performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-slate-400 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="px-6 py-20">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Performance Metrics
              </h2>
              <p className="text-xl text-slate-400">
                Real-world performance that makes a difference
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">98%</div>
                <div className="text-slate-400">Detection Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">&lt;1.5s</div>
                <div className="text-slate-400">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">12h</div>
                <div className="text-slate-400">Battery Life</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400 mb-2">10m</div>
                <div className="text-slate-400">Detection Range</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Features;