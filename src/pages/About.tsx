import React from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Target, 
  Users, 
  Award, 
  Lightbulb, 
  Globe,
  Code,
  Brain,
  Accessibility,
  Rocket,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const milestones = [
    {
      year: "2023",
      title: "Project Inception",
      description: "Initial research and concept development for AI-powered accessibility solutions",
      icon: <Lightbulb className="w-6 h-6" />
    },
    {
      year: "2024",
      title: "MVP Development",
      description: "Built first working prototype with object detection and voice feedback",
      icon: <Code className="w-6 h-6" />
    },
    {
      year: "2024",
      title: "Beta Testing",
      description: "Collaborated with visually impaired community for real-world testing",
      icon: <Users className="w-6 h-6" />
    },
    {
      year: "2025",
      title: "Production Ready",
      description: "Refined design and preparing for wider accessibility impact",
      icon: <Rocket className="w-6 h-6" />
    }
  ];

  const values = [
    {
      icon: <Accessibility className="w-8 h-8" />,
      title: "Accessibility First",
      description: "Every design decision prioritizes the needs and experiences of visually impaired users",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Human-Centered Design",
      description: "Technology should enhance human capabilities, not replace human connection",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Universal Access",
      description: "Advanced technology should be affordable and available to everyone who needs it",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Ethical AI",
      description: "AI systems must be transparent, privacy-respecting, and bias-free",
      color: "from-purple-500 to-violet-500"
    }
  ];

  const achievements = [
    { number: "285M", label: "People Worldwide with Visual Impairments", icon: <Users className="w-6 h-6" /> },
    { number: "98%", label: "Detection Accuracy Achieved", icon: <Target className="w-6 h-6" /> },
    { number: "100%", label: "Offline Operation", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "$200", label: "Target Manufacturing Cost", icon: <Award className="w-6 h-6" /> }
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
              About VisionMate
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
              Born from a vision to democratize spatial awareness technology and empower independence for the visually impaired community
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="px-6 py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                To create affordable, intelligent, and privacy-respecting assistive technology that empowers blind and visually impaired individuals with unprecedented spatial awareness and navigation independence.
              </p>
              <div className="flex items-center justify-center space-x-2 text-cyan-400">
                <Heart className="w-6 h-6" />
                <span className="font-semibold">Built with vision and care</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="px-6 py-20">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-2xl"></div>
                  <img
                    src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                    alt="Achref Rhouma"
                    className="relative z-10 w-full h-96 object-cover rounded-2xl border border-white/10"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Meet the Creator
                </h2>
                <div className="space-y-6 text-slate-300">
                  <p className="text-lg leading-relaxed">
                    <strong className="text-cyan-400">Achref Rhouma</strong> is an AI Engineer and Accessibility Advocate passionate about creating technology that makes a meaningful difference in people's lives.
                  </p>
                  <p className="leading-relaxed">
                    With expertise in computer vision, embedded systems, and human-centered design, Achref recognized the gap between advanced AI capabilities and accessible assistive technology. VisionMate represents his commitment to bridging this divide.
                  </p>
                  <p className="leading-relaxed">
                    "Technology should empower everyone, regardless of their abilities. VisionMate isn't just about object detection—it's about independence, confidence, and dignity."
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                    <span className="text-cyan-400 font-medium">AI Engineering</span>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                    <span className="text-purple-400 font-medium">Computer Vision</span>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                    <span className="text-green-400 font-medium">Embedded Systems</span>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2">
                    <span className="text-orange-400 font-medium">Accessibility Design</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="px-6 py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-400">
              The principles that guide every decision in VisionMate's development
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${value.color} mb-6`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-slate-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Development Journey
            </h2>
            <p className="text-xl text-slate-400">
              From concept to reality: the VisionMate story
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="relative flex items-start space-x-6 pb-12"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                {/* Timeline Line */}
                {index < milestones.length - 1 && (
                  <div className="absolute left-6 top-12 w-px h-16 bg-gradient-to-b from-purple-500/50 to-transparent"></div>
                )}
                
                {/* Timeline Node */}
                <div className="relative z-10 w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                  {milestone.icon}
                </div>
                
                {/* Content */}
                <div className="flex-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6">
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="text-lg font-bold text-purple-400">{milestone.year}</span>
                    <h3 className="text-xl font-bold text-white">{milestone.title}</h3>
                  </div>
                  <p className="text-slate-400 leading-relaxed">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="px-6 py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Impact & Achievements
            </h2>
            <p className="text-xl text-slate-400">
              Measuring success through real-world impact
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center">
                  {achievement.icon}
                </div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">{achievement.number}</div>
                <div className="text-slate-400">{achievement.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="px-6 py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Looking Forward
              </h2>
              <p className="text-xl text-slate-300 leading-relaxed mb-8">
                VisionMate is just the beginning. Our vision extends to a world where advanced AI technology seamlessly integrates with daily life, providing independence and confidence to millions of people with visual impairments worldwide.
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                <motion.button
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Join Our Mission</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <motion.button
                  className="px-8 py-4 rounded-full border border-white/20 hover:border-white/40 backdrop-blur-sm transition-all duration-300 hover:bg-white/5"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;