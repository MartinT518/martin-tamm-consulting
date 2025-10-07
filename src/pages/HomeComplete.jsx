import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { ArrowRight, TrendingUp, Target, Zap, BarChart3, Brain, Users, Quote, Download, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

// Import assets
import headshot from '../assets/hero-headshot-final.png'
import cyberneticaLogo from '../assets/cybernetica-logo.jpg'
import piletileviLogo from '../assets/piletilevi-logo.jpg'
import ericssonLogo from '../assets/ericsson-logo.png'
import icefireLogo from '../assets/icefire-logo.jpeg'
import finestmediaLogo from '../assets/finestmedia-logo.png'
import runningData from '../assets/running-data.webp'

function HomeComplete() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    consent: false
  })

  const [leadMagnetEmail, setLeadMagnetEmail] = useState('')
  const [leadMagnetConsent, setLeadMagnetConsent] = useState(false)
  const [showLeadMagnetSuccess, setShowLeadMagnetSuccess] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.consent) {
      alert('Please consent to data processing to submit the form.')
      return
    }
    // Form will be handled by Netlify Forms in production
    console.log('Form submitted:', formData)
    setFormSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '', consent: false })
      setFormSubmitted(false)
    }, 5000)
  }

  const handleLeadMagnetSubmit = (e) => {
    e.preventDefault()
    if (!leadMagnetConsent) {
      alert('Please consent to receive the checklist.')
      return
    }
    // This will be integrated with email marketing service
    console.log('Lead magnet requested:', leadMagnetEmail)
    
    // Redirect to thank you page
    window.location.href = '/thank-you'
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

  // Testimonials data
  const testimonials = [
    {
      name: "Anna Kask",
      title: "Project Manager",
      company: "Cybernetica",
      quote: "Martin's expertise in AI and data analysis transformed our customs clearance system. His ability to translate complex technical solutions into business value is exceptional.",
      initials: "AK"
    },
    {
      name: "Jaan Tamm",
      title: "CTO",
      company: "Piletilevi Group",
      quote: "Working with Martin on our pricing optimization project resulted in significant revenue growth. His data-driven approach and business acumen are truly impressive.",
      initials: "JT"
    },
    {
      name: "Maria Saar",
      title: "Operations Director",
      company: "Ericsson",
      quote: "Martin's real-time monitoring dashboard has been instrumental in achieving our uptime goals. He combines technical excellence with a deep understanding of business needs.",
      initials: "MS"
    }
  ]

  return (
    <>
      <SEO 
        title="Martin Tamm | AI & Data Analysis Consultant"
        description="Transform your business data into revenue with expert AI and data analysis consulting. Specializing in predictive analytics, automation, and business intelligence for C-level executives."
        keywords="AI consultant, data analysis, business intelligence, machine learning, predictive analytics, Estonia, Martin Tamm"
      />
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

      {/* Credibility Section */}
      <section id="credibility" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A192F]">
        {/* Logo Bar */}
        <motion.div 
          className="bg-white py-12 mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="max-w-7xl mx-auto px-4">
            <p className="text-center text-gray-500 text-sm font-semibold uppercase tracking-wider mb-8">
              Trusted by Industry Leaders
            </p>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center">
              {[
                { src: cyberneticaLogo, alt: "Cybernetica" },
                { src: piletileviLogo, alt: "Piletilevi Group" },
                { src: ericssonLogo, alt: "Ericsson" },
                { src: icefireLogo, alt: "Icefire" },
                { src: finestmediaLogo, alt: "Finestmedia" }
              ].map((logo, index) => (
                <motion.div
                  key={index}
                  className="grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 0.6, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <img 
                    src={logo.src} 
                    alt={logo.alt} 
                    className="h-16 w-auto object-contain"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Value Proposition & Case Studies */}
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">
              The Bridge Between{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#34D399]">
                Business and Technology
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              I don't just crunch numbers—I translate complex data into actionable business strategies. 
              With experience spanning Fortune 500 companies to innovative startups, I bring a unique blend 
              of technical expertise and business acumen that drives real results.
            </p>
          </motion.div>

          {/* Case Studies */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {[
              {
                title: "Streamlined Customs Processes",
                result: "40% Reduction in Processing Time",
                description: "Implemented AI-powered automation for Cybernetica's customs clearance system, reducing manual work and improving accuracy.",
                icon: Zap,
                color: "#6366F1"
              },
              {
                title: "Revenue Optimization",
                result: "€2M+ Additional Annual Revenue",
                description: "Developed predictive analytics model for Piletilevi Group to optimize pricing strategy and inventory management.",
                icon: TrendingUp,
                color: "#34D399"
              },
              {
                title: "Network Performance Analytics",
                result: "99.9% Uptime Achievement",
                description: "Built real-time monitoring dashboard for Ericsson to predict and prevent network failures before they occur.",
                icon: BarChart3,
                color: "#6366F1"
              }
            ].map((study, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-[#111827] border-2 border-gray-800 hover:border-[#6366F1] transition-all duration-300 h-full group hover:scale-105">
                  <CardContent className="p-8 space-y-4">
                    <div className={`p-4 rounded-xl w-fit`} style={{ 
                      background: `linear-gradient(135deg, ${study.color}20, ${study.color}10)` 
                    }}>
                      <study.icon className="w-8 h-8" style={{ color: study.color }} />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-[#34D399] mb-2">RESULT</p>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-[#6366F1] transition-colors">
                        {study.result}
                      </h3>
                      <p className="text-lg font-semibold text-gray-300 mb-3">
                        {study.title}
                      </p>
                      <p className="text-gray-400">
                        {study.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#111827]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6">
              What My <span className="text-[#6366F1]">Colleagues Say</span>
            </h2>
            <p className="text-xl text-gray-400">
              Don't just take my word for it—here's what people I've worked with have to say.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerChildren}
          >
            {testimonials.map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="bg-[#0A192F] border-2 border-gray-800 hover:border-[#6366F1] transition-all duration-300 h-full">
                  <CardContent className="p-8 space-y-4">
                    <Quote className="w-10 h-10 text-[#6366F1] opacity-50" />
                    <p className="text-gray-300 leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4 pt-4 border-t border-gray-800">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#6366F1] to-[#34D399] flex items-center justify-center font-bold text-white">
                        {testimonial.initials}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{testimonial.name}</p>
                        <p className="text-sm text-gray-400">{testimonial.title}</p>
                        <p className="text-sm text-[#6366F1]">{testimonial.company}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A192F]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gradient-to-br from-[#6366F1]/10 to-[#34D399]/10 border-2 border-[#6366F1]">
              <CardContent className="p-12 text-center">
                <div className="inline-block p-4 bg-[#6366F1]/20 rounded-full mb-6">
                  <Download className="w-12 h-12 text-[#6366F1]" />
                </div>
                
                <h2 className="text-4xl font-bold mb-4">
                  Is Your Business <span className="text-[#6366F1]">AI-Ready</span>?
                </h2>
                
                <p className="text-xl text-gray-300 mb-8">
                  Download my free 10-point checklist to assess your company's readiness for automation and AI integration.
                </p>

                {showLeadMagnetSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-[#34D399]/20 border-2 border-[#34D399] rounded-lg p-6"
                  >
                    <CheckCircle2 className="w-16 h-16 text-[#34D399] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-[#34D399] mb-2">Success!</h3>
                    <p className="text-gray-300">
                      Check your email for the AI-Ready Checklist. 
                      <br />
                      (If you don't see it, check your spam folder)
                    </p>
                  </motion.div>
                ) : (
                  <form 
                    onSubmit={handleLeadMagnetSubmit} 
                    className="max-w-md mx-auto space-y-4"
                    name="lead-magnet"
                    method="POST"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                  >
                    <input type="hidden" name="form-name" value="lead-magnet" />
                    <input type="hidden" name="bot-field" />
                    
                    <Input
                      type="email"
                      name="email"
                      placeholder="your.email@company.com"
                      value={leadMagnetEmail}
                      onChange={(e) => setLeadMagnetEmail(e.target.value)}
                      required
                      className="bg-[#0A192F] border-gray-700 focus:border-[#6366F1] text-white placeholder:text-gray-500 h-14 text-lg"
                    />
                    
                    <div className="flex items-start gap-3 text-left">
                      <Checkbox
                        id="leadConsent"
                        checked={leadMagnetConsent}
                        onCheckedChange={setLeadMagnetConsent}
                        className="mt-1"
                      />
                      <label htmlFor="leadConsent" className="text-sm text-gray-400 cursor-pointer">
                        I consent to receiving the checklist and occasional insights about AI and data analysis. 
                        You can unsubscribe anytime. See our{' '}
                        <Link to="/privacy-policy" className="text-[#6366F1] hover:text-[#34D399]">
                          Privacy Policy
                        </Link>.
                      </label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-[#6366F1] hover:bg-[#5558E3] text-white text-lg py-6 rounded-lg shadow-lg shadow-[#6366F1]/30 transition-all duration-300 hover:scale-105 group"
                    >
                      Download Now
                      <Download className="ml-2 group-hover:translate-y-1 transition-transform" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Humanization Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#111827]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-5xl font-bold">
                From <span className="text-[#6366F1]">Personal Best</span> to{' '}
                <span className="text-[#34D399]">Business Best</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-300 leading-relaxed">
                <p>
                  I'm not your typical data scientist. When I'm not transforming business data, 
                  I'm tracking my own—analyzing every run, every heartbeat, every mile.
                </p>
                <p>
                  My passion for running mirrors my approach to business analytics: 
                  <span className="text-[#6366F1] font-semibold"> obsessive attention to metrics</span>, 
                  <span className="text-[#34D399] font-semibold"> continuous optimization</span>, and 
                  <span className="text-[#6366F1] font-semibold"> relentless pursuit of improvement</span>.
                </p>
                <p>
                  Just as I use wearable data to shave seconds off my personal records, 
                  I help businesses use their data to gain competitive advantages that matter.
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-[#6366F1]" />
                  <span className="text-gray-400">Marathon Runner</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-[#34D399]" />
                  <span className="text-gray-400">Data Enthusiast</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-[#6366F1]/20 bg-[#0A192F] p-8">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#6366F1] to-[#34D399]"></div>
                <h3 className="text-2xl font-bold mb-6 text-center">Running Performance Analytics</h3>
                <img 
                  src={runningData} 
                  alt="Running Performance Data Visualization" 
                  className="w-full h-auto rounded-lg"
                />
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div className="bg-[#111827] p-4 rounded-lg">
                    <p className="text-3xl font-bold text-[#6366F1]">1,158</p>
                    <p className="text-sm text-gray-400">Total Runs</p>
                  </div>
                  <div className="bg-[#111827] p-4 rounded-lg">
                    <p className="text-3xl font-bold text-[#34D399]">24.31%</p>
                    <p className="text-sm text-gray-400">Improvement</p>
                  </div>
                  <div className="bg-[#111827] p-4 rounded-lg">
                    <p className="text-3xl font-bold text-[#6366F1]">755</p>
                    <p className="text-sm text-gray-400">Miles</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA / Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A192F]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl sm:text-6xl font-bold mb-6">
              Ready to Unlock Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-[#34D399]">
                Data's Potential
              </span>?
            </h2>
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              Book a complimentary <span className="text-[#6366F1] font-semibold">AI Opportunity Audit</span>. 
              In just 45 minutes, I'll analyze your current data landscape and identify 
              3-5 high-impact opportunities to drive revenue and efficiency.
            </p>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="bg-[#111827] border-2 border-gray-800">
                <CardContent className="p-8">
                  {formSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12"
                    >
                      <CheckCircle2 className="w-20 h-20 text-[#34D399] mx-auto mb-4" />
                      <h3 className="text-3xl font-bold text-[#34D399] mb-2">Thank You!</h3>
                      <p className="text-xl text-gray-300">
                        I'll get back to you within 24 hours to schedule your free AI Opportunity Audit.
                      </p>
                    </motion.div>
                  ) : (
                    <form 
                      onSubmit={handleSubmit} 
                      className="space-y-6"
                      name="contact"
                      method="POST"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                    >
                      <input type="hidden" name="form-name" value="contact" />
                      <input type="hidden" name="bot-field" />
                      
                      <div className="text-left">
                        <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-300">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="bg-[#0A192F] border-gray-700 focus:border-[#6366F1] text-white placeholder:text-gray-500 h-12"
                        />
                      </div>

                      <div className="text-left">
                        <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your.email@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="bg-[#0A192F] border-gray-700 focus:border-[#6366F1] text-white placeholder:text-gray-500 h-12"
                        />
                      </div>

                      <div className="text-left">
                        <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-300">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell me about your biggest data challenge..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          rows={5}
                          className="bg-[#0A192F] border-gray-700 focus:border-[#6366F1] text-white placeholder:text-gray-500 resize-none"
                        />
                      </div>

                      <div className="flex items-start gap-3 text-left">
                        <Checkbox
                          id="consent"
                          name="consent"
                          checked={formData.consent}
                          onCheckedChange={(checked) => setFormData({ ...formData, consent: checked })}
                          className="mt-1"
                          required
                        />
                        <label htmlFor="consent" className="text-sm text-gray-400 cursor-pointer">
                          I consent to the processing of my personal data for the purpose of responding to my inquiry. 
                          I understand my data will be handled according to the{' '}
                          <Link to="/privacy-policy" className="text-[#6366F1] hover:text-[#34D399]">
                            Privacy Policy
                          </Link>.
                        </label>
                      </div>

                      <Button 
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-[#6366F1] to-[#34D399] hover:from-[#5558E3] hover:to-[#2BC08A] text-white text-lg py-6 rounded-lg shadow-lg shadow-[#6366F1]/30 transition-all duration-300 hover:scale-105 group"
                      >
                        Schedule Your Free Audit
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                  )}

                  {!formSubmitted && (
                    <div className="mt-8 pt-8 border-t border-gray-800">
                      <p className="text-sm text-gray-400">
                        <span className="text-[#34D399] font-semibold">No commitment required.</span> 
                        {' '}I'll show you exactly where AI can transform your business—then you decide if we're a fit.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
       </div>
    </>
  )
}
export default HomeComplete
