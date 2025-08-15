import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  MessageSquare, 
  Send, 
  Github, 
  Linkedin, 
  Twitter,
  MapPin,
  Phone,
  Clock,
  CheckCircle,
  ArrowRight,
  Heart,
  Users,
  Code,
  Lightbulb
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    type: 'general'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactTypes = [
    { value: 'general', label: 'General Inquiry' },
    { value: 'collaboration', label: 'Collaboration' },
    { value: 'beta', label: 'Beta Testing' },
    { value: 'accessibility', label: 'Accessibility Feedback' },
    { value: 'technical', label: 'Technical Questions' },
    { value: 'media', label: 'Media & Press' }
  ];

  const socialLinks = [
    {
      icon: <Github className="w-6 h-6" />,
      label: 'GitHub',
      url: 'https://github.com',
      color: 'hover:text-gray-400'
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      url: 'https://linkedin.com',
      color: 'hover:text-blue-400'
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      label: 'Twitter',
      url: 'https://twitter.com',
      color: 'hover:text-cyan-400'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: 'Email',
      url: 'mailto:achref@visionmate.ai',
      color: 'hover:text-purple-400'
    }
  ];

  const collaborationAreas = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Accessibility Organizations",
      description: "Partner with us to ensure VisionMate meets real-world needs",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Developers & Engineers",
      description: "Contribute to open-source components and AI model improvements",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Researchers & Academics",
      description: "Collaborate on accessibility research and technology advancement",
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Beta Testers",
      description: "Help us refine VisionMate through real-world testing and feedback",
      color: "from-pink-500 to-rose-500"
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
              Get in Touch
            </h1>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12">
              Have questions about VisionMate? Want to collaborate? Interested in beta testing? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="px-6 py-12">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-8">Send a Message</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-300 mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 mb-2">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-2">Inquiry Type</label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                    >
                      {contactTypes.map((type) => (
                        <option key={type.value} value={type.value} className="bg-slate-800">
                          {type.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300"
                      placeholder="What's this about?"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-slate-400 focus:border-cyan-400 focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell us more about your inquiry..."
                      required
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitted}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5" />
                        <span>Message Sent!</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Creator Info */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold text-xl">AR</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Achref Rhouma</h3>
                    <p className="text-slate-400">Creator & AI Engineer</p>
                  </div>
                </div>
                <p className="text-slate-300 mb-6">
                  Passionate about creating accessible AI technology that makes a real difference in people's lives. Always excited to connect with fellow innovators and accessibility advocates.
                </p>
                
                <div className="flex space-x-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-3 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 ${link.color}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.icon}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-6">Quick Contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span className="text-slate-300">achref@visionmate.ai</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="w-5 h-5 text-purple-400" />
                    <span className="text-slate-300">Available for collaboration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-green-400" />
                    <span className="text-slate-300">Usually responds within 24h</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-orange-400" />
                    <span className="text-slate-300">Remote & Global</span>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 backdrop-blur-sm border border-green-500/20 rounded-2xl p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <h3 className="text-lg font-bold text-white">Fast Response</h3>
                </div>
                <p className="text-slate-300 text-sm">
                  We typically respond to all inquiries within 24 hours. For urgent accessibility feedback or collaboration opportunities, we prioritize even faster responses.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Collaboration Areas */}
      <section className="px-6 py-20">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Collaboration Opportunities
            </h2>
            <p className="text-xl text-slate-400">
              Join us in making accessibility technology more inclusive and impactful
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {collaborationAreas.map((area, index) => (
              <motion.div
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${area.color} mb-6`}>
                  {area.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{area.title}</h3>
                <p className="text-slate-400 mb-6">{area.description}</p>
                <motion.button
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                  whileHover={{ x: 5 }}
                >
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: "How can I become a beta tester for VisionMate?",
                  answer: "We're actively seeking beta testers from the visually impaired community. Contact us with your interest and we'll add you to our testing program waitlist."
                },
                {
                  question: "Is VisionMate available for purchase?",
                  answer: "VisionMate is currently in development. We're working toward a production-ready version and will announce availability through our communication channels."
                },
                {
                  question: "Can I contribute to the VisionMate project?",
                  answer: "Absolutely! We welcome contributions from developers, accessibility experts, and researchers. Reach out to discuss how you can get involved."
                },
                {
                  question: "What makes VisionMate different from other assistive devices?",
                  answer: "VisionMate combines advanced AI with complete offline operation, affordable hardware, and privacy-first design, making cutting-edge navigation technology accessible to everyone."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-lg font-bold text-white mb-3">{faq.question}</h3>
                  <p className="text-slate-400">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="bg-gradient-to-r from-purple-600/20 to-cyan-600/20 backdrop-blur-sm border border-purple-500/20 rounded-3xl p-12"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Ready to Connect?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Whether you're interested in collaboration, have accessibility feedback, or just want to learn more about VisionMate, we're here to listen.
              </p>
              <motion.button
                className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center space-x-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-5 h-5" />
                <span>Start a Conversation</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;