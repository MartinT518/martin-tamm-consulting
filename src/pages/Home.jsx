import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { ArrowRight, TrendingUp, Target, Zap, BarChart3, Brain, Users, Quote } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

// Import assets
import headshot from '../assets/hero-headshot-final.png'
import cyberneticaLogo from '../assets/cybernetica-logo.jpg'
import piletileviLogo from '../assets/piletilevi-logo.jpg'
import ericssonLogo from '../assets/ericsson-logo.png'
import icefireLogo from '../assets/icefire-logo.jpeg'
import finestmediaLogo from '../assets/finestmedia-logo.png'
import runningData from '../assets/running-data.webp'

function Home() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    consent: false
  })

  const [leadMagnetEmail, setLeadMagnetEmail] = useState('')
  const [leadMagnetConsent, setLeadMagnetConsent] = useState(false)
  const [showLeadMagnetSuccess, setShowLeadMagnetSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.consent) {
      alert('Please consent to data processing to submit the form.')
      return
    }
    // Form submission will be handled by Netlify Forms
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '', consent: false })
  }

  const handleLeadMagnetSubmit = (e) => {
    e.preventDefault()
    if (!leadMagnetConsent) {
      alert('Please consent to receive the checklist.')
      return
    }
    // This will be integrated with email marketing service
    console.log('Lead magnet requested:', leadMagnetEmail)
    setShowLeadMagnetSuccess(true)
    setLeadMagnetEmail('')
    setLeadMagnetConsent(false)
    
    // Hide success message after 5 seconds
    setTimeout(() => setShowLeadMagnetSuccess(false), 5000)
  }

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  // Testimonials data (placeholder - to be replaced with real testimonials)
  const testimonials = [
    {
      name: "Anna Kask",
      title: "Project Manager",
      company: "Cybernetica",
      quote: "Martin's expertise in AI and data analysis transformed our customs clearance system. His ability to translate complex technical solutions into business value is exceptional.",
      image: null // Placeholder for headshot
    },
    {
      name: "Jaan Tamm",
      title: "CTO",
      company: "Piletilevi Group",
      quote: "Working with Martin on our pricing optimization project resulted in significant revenue growth. His data-driven approach and business acumen are truly impressive.",
      image: null
    },
    {
      name: "Maria Saar",
      title: "Operations Director",
      company: "Ericsson",
      quote: "Martin's real-time monitoring dashboard has been instrumental in achieving our uptime goals. He combines technical excellence with a deep understanding of business needs.",
      image: null
    }
  ]

  return (
    <div className="min-h-screen bg-[#0A192F] text-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6366F1] opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#34D399] opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left side - Text content */}
          <motion.div 
            className="space-y-8"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <motion.div variants={fadeInUp} className="space-y-4">
              <div className="inline-block px-4 py-2 bg-[#6366F1]/20 border border-[#6366F1]/50 rounded-full text-[#6366F1] text-sm font-semibold mb-4">
                AI & Data Analysis Expert
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                Your Business Has Data.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#34D399]">
                  I Turn It Into Revenue.
                </span>
              </h1>
            </motion.div>
            
            <motion.p variants={fadeInUp} className="text-xl text-gray-300 leading-relaxed">
              Stop making decisions in the dark. I help C-level executives and business leaders unlock hidden opportunities in their data, automate inefficient processes, and outpace competitors with AI-driven insights.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#6366F1] hover:bg-[#5558E3] text-white text-lg px-8 py-6 rounded-lg shadow-lg shadow-[#6366F1]/50 transition-all duration-300 hover:scale-105 group"
                onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              >
                Book a Free AI Opportunity Audit
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-[#34D399] text-[#34D399] hover:bg-[#34D399] hover:text-[#0A192F] text-lg px-8 py-6 rounded-lg transition-all duration-300"
                onClick={() => document.getElementById('credibility').scrollIntoView({ behavior: 'smooth' })}
              >
                See My Work
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6366F1] to-[#34D399] border-2 border-[#0A192F]"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#34D399] to-[#6366F1] border-2 border-[#0A192F]"></div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#6366F1] to-[#34D399] border-2 border-[#0A192F]"></div>
                </div>
                <span className="text-sm text-gray-400">Trusted by Fortune 500 companies</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Professional headshot */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <img 
                src={headshot} 
                alt="Martin Tamm - AI & Data Analysis Consultant" 
                className="w-full h-auto object-contain"
              />
            </div>
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-6 -right-6 bg-[#6366F1] p-4 rounded-xl shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <Brain className="w-8 h-8" />
            </motion.div>
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-[#34D399] p-4 rounded-xl shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              <TrendingUp className="w-8 h-8 text-[#0A192F]" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#111827]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl font-bold mb-6">
                Are You <span className="text-[#6366F1]">Flying Blind</span>?
              </h2>
              <p className="text-xl text-gray-400">
                Most businesses sit on goldmines of data but lack the expertise to extract value. Sound familiar?
              </p>
            </motion.div>

            <motion.div 
              className="space-y-6"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
            >
              {[
                {
                  icon: Target,
                  title: "Gut-feel Decisions",
                  description: "Making million-dollar decisions based on intuition instead of data-driven insights.",
                  color: "#6366F1"
                },
                {
                  icon: Zap,
                  title: "Manual Inefficiency",
                  description: "Wasting hours on repetitive tasks that could be automated with AI.",
                  color: "#34D399"
                },
                {
                  icon: TrendingUp,
                  title: "Falling Behind Competitors",
                  description: "Watching competitors leverage AI while you're still catching up.",
                  color: "#6366F1"
                }
              ].map((pain, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                >
                  <Card className="bg-[#0A192F] border-2 border-gray-800 hover:border-[#6366F1] transition-all duration-300 group">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br`} style={{ 
                        background: `linear-gradient(135deg, ${pain.color}20, ${pain.color}10)` 
                      }}>
                        <pain.icon className="w-6 h-6" style={{ color: pain.color }} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 group-hover:text-[#6366F1] transition-colors">
                          {pain.title}
                        </h3>
                        <p className="text-gray-400">
                          {pain.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rest of the sections will continue in the next part... */}
      {/* I'll create this as a multi-part component to keep it manageable */}
    </div>
  )
}

export default Home
