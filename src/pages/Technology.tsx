import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Cpu, 
  Brain, 
  Camera, 
  Mic, 
  Bluetooth, 
  Battery,
  Code,
  Layers,
  Zap,
  Shield,
  Gauge,
  Settings
} from 'lucide-react';

const Technology = () => {
  const [activeTab, setActiveTab] = useState('hardware');

  const hardwareSpecs = [
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Raspberry Pi 4B",
      description: "Quad-core ARM Cortex-A72 processor with 4GB RAM",
      specs: ["1.5GHz CPU", "4GB LPDDR4", "Dual-band WiFi", "Bluetooth 5.0"],
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "RGB Camera Module",
      description: "High-resolution camera for object detection and depth estimation",
      specs: ["1080p @ 30fps", "Auto-focus lens", "Wide-angle view", "Low-light optimized"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: "Audio System",
      description: "Integrated speakers and microphone for voice interaction",
      specs: ["Noise cancellation", "Voice recognition", "TTS synthesis", "Spatial audio"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Bluetooth className="w-8 h-8" />,
      title: "Sensor Array",
      description: "Multiple HC-SR04 ultrasonic sensors for proximity detection",
      specs: ["360° coverage", "2-400cm range", "Vibration feedback", "Low latency"],
      color: "from-purple-500 to-violet-500"
    }
  ];

  const softwareStack = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Models",
      description: "YOLOv8 for object detection and ML-Depth-Pro for depth estimation",
      technologies: ["PyTorch", "ONNX Runtime", "OpenCV", "NumPy"],
      color: "from-orange-500 to-red-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Core Application",
      description: "Python-based control system with real-time processing",
      technologies: ["Python 3.9", "AsyncIO", "Threading", "GPIO Control"],
      color: "from-cyan-500 to-blue-500"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "System Integration",
      description: "Optimized Linux distribution with custom drivers",
      technologies: ["Raspberry Pi OS", "systemd", "udev rules", "Custom kernels"],
      color: "from-green-500 to-teal-500"
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "User Interface",
      description: "Voice commands and tactile button interface",
      technologies: ["pyttsx3", "SpeechRecognition", "GPIO", "PWM Control"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  const architectureLayers = [
    {
      name: "User Interface Layer",
      description: "Voice commands, tactile buttons, audio feedback",
      color: "bg-cyan-500/20 border-cyan-500/30"
    },
    {
      name: "Application Logic Layer",
      description: "Scene analysis, navigation logic, user preferences",
      color: "bg-purple-500/20 border-purple-500/30"
    },
    {
      name: "AI Processing Layer",
      description: "Object detection, depth estimation, spatial mapping",
      color: "bg-green-500/20 border-green-500/30"
    },
    {
      name: "Hardware Abstraction Layer",
      description: "Camera control, sensor management, GPIO interface",
      color: "bg-orange-500/20 border-orange-500/30"
    },
    {
      name: "Operating System Layer",
      description: "Linux kernel, device drivers, system services",
      color: "bg-blue-500/20 border-blue-500/30"
    }
  ];

  const performanceMetrics = [
    { label: "Object Detection", value: "30 FPS", icon: <Gauge className="w-6 h-6" /> },
    { label: "Depth Processing", value: "15 FPS", icon: <Zap className="w-6 h-6" /> },
    { label: "Response Time", value: "<1.5s", icon: <Battery className="w-6 h-6" /> },
    { label: "Power Consumption", value: "8W", icon: <Shield className="w-6 h-6" /> }
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
              Technology Stack
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
              Explore the cutting-edge hardware and software technologies that power VisionMate's revolutionary capabilities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="px-6">
        <div className="container mx-auto">
          <div className="flex justify-center mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full p-2">
              <button
                onClick={() => setActiveTab('hardware')}
                className={`px-8 py-3 rounded-full transition-all duration-300 ${
                  activeTab === 'hardware'
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Hardware
              </button>
              <button
                onClick={() => setActiveTab('software')}
                className={`px-8 py-3 rounded-full transition-all duration-300 ${
                  activeTab === 'software'
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Software
              </button>
              <button
                onClick={() => setActiveTab('architecture')}
                className={`px-8 py-3 rounded-full transition-all duration-300 ${
                  activeTab === 'architecture'
                    ? 'bg-cyan-500 text-white shadow-lg'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Architecture
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hardware Tab */}
      {activeTab === 'hardware' && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-6 py-12"
        >
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {hardwareSpecs.map((spec, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${spec.color} mb-6`}>
                    {spec.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{spec.title}</h3>
                  <p className="text-slate-400 mb-6">{spec.description}</p>
                  <div className="space-y-2">
                    {spec.specs.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-slate-300 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Software Tab */}
      {activeTab === 'software' && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-6 py-12"
        >
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {softwareStack.map((software, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${software.color} mb-6`}>
                    {software.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{software.title}</h3>
                  <p className="text-slate-400 mb-6">{software.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {software.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-cyan-400 border border-cyan-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
      )}

      {/* Architecture Tab */}
      {activeTab === 'architecture' && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-6 py-12"
        >
          <div className="container mx-auto">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">System Architecture</h2>
                <p className="text-slate-400">Layered architecture ensuring optimal performance and maintainability</p>
              </div>
              
              <div className="space-y-4">
                {architectureLayers.map((layer, index) => (
                  <motion.div
                    key={index}
                    className={`p-6 rounded-2xl border-2 ${layer.color} backdrop-blur-sm`}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="text-xl font-bold text-white mb-2">{layer.name}</h3>
                    <p className="text-slate-300">{layer.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Performance Metrics */}
      <section className="px-6 py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Performance Benchmarks
            </h2>
            <p className="text-xl text-slate-400">
              Real-world performance metrics that matter
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {performanceMetrics.map((metric, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{metric.value}</div>
                <div className="text-slate-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="px-6 py-20">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Technical Specifications
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold text-cyan-400 mb-4">Processing</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• ARM Cortex-A72 @ 1.5GHz</li>
                  <li>• 4GB LPDDR4 RAM</li>
                  <li>• GPU acceleration</li>
                  <li>• Neural processing unit</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-green-400 mb-4">Connectivity</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• Dual-band WiFi</li>
                  <li>• Bluetooth 5.0</li>
                  <li>• USB-C charging</li>
                  <li>• GPIO expansion</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-purple-400 mb-4">Power</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• 12-hour battery life</li>
                  <li>• Fast charging support</li>
                  <li>• Power management</li>
                  <li>• Sleep mode optimization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Technology;