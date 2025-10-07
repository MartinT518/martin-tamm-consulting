import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Checkbox } from '@/components/ui/checkbox.jsx'
import { ArrowRight, TrendingUp, Target, Zap, BarChart3, Brain, Users, Download, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import SEO from '../components/SEO'

// Import assets
import headshot from '../assets/hero-headshot-final.png'
import headshotWebP from '../assets/hero-headshot-final.webp'
import cyberneticaLogo from '../assets/cybernetica-logo.jpg'
import piletileviLogo from '../assets/piletilevi-logo.jpg'
import ericssonLogo from '../assets/ericsson-logo.png'
import icefireLogo from '../assets/icefire-logo.jpeg'
import finestmediaLogo from '../assets/finestmedia-logo.png'
import runningData from '../assets/running-data.webp'

function HomeComplete() {
  const location = useLocation()
  
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
  
  const [contactFormLoading, setContactFormLoading] = useState(false)
  const [contactFormError, setContactFormError] = useState(null)
  const [contactFormErrors, setContactFormErrors] = useState({})
  
  const [leadMagnetLoading, setLeadMagnetLoading] = useState(false)
  const [leadMagnetError, setLeadMagnetError] = useState(null)
  const [leadMagnetErrors, setLeadMagnetErrors] = useState({})
  
  // Check for reduced motion preference - initialize with actual value to avoid flash
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches
    }
    return false
  })
  
  // Handle scroll-to-section from navigation
  useEffect(() => {
    if (location.state?.scrollTo) {
      // Small delay to ensure page is rendered
      setTimeout(() => {
        document.getElementById(location.state.scrollTo)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    }
  }, [location])
  
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener('change', handleChange)
    
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  // Helper function for accessible scroll and focus management
  const handleScrollAndFocus = (targetId) => {
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      // Small delay to ensure scroll completes before focusing
      setTimeout(() => {
        element.focus({ preventScroll: true })
      }, 500)
    }
  }

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setContactFormErrors({})
    setContactFormError(null)

    const errors = {}
    if (!formData.name.trim()) {
      errors.name = 'Name is required'
    }
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address'
    }
    if (!formData.message.trim()) {
      errors.message = 'Message is required'
    }
    if (!formData.consent) {
      errors.consent = 'You must consent to data processing to submit this form'
    }

    if (Object.keys(errors).length > 0) {
      setContactFormErrors(errors)
      return
    }

    setContactFormLoading(true)

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ 
          "form-name": "contact",
          ...formData,
          consent: formData.consent ? "yes" : "no"
        })
      })

      if (response.ok) {
        setFormSubmitted(true)
        setTimeout(() => {
          setFormData({ name: '', email: '', message: '', consent: false })
          setFormSubmitted(false)
        }, 8000)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setContactFormError('There was an error submitting the form. Please try again or email me directly.')
    } finally {
      setContactFormLoading(false)
    }
  }

  const handleLeadMagnetSubmit = async (e) => {
    e.preventDefault()
    setLeadMagnetErrors({})
    setLeadMagnetError(null)

    const errors = {}
    if (!leadMagnetEmail.trim()) {
      errors.email = 'Email is required'
    } else if (!validateEmail(leadMagnetEmail)) {
      errors.email = 'Please enter a valid email address'
    }
    if (!leadMagnetConsent) {
      errors.consent = 'You must consent to receive the checklist'
    }

    if (Object.keys(errors).length > 0) {
      setLeadMagnetErrors(errors)
      return
    }

    setLeadMagnetLoading(true)

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ 
          "form-name": "lead-magnet",
          email: leadMagnetEmail,
          consent: leadMagnetConsent ? "yes" : "no"
        })
      })

      if (response.ok) {
        setShowLeadMagnetSuccess(true)
        setLeadMagnetEmail('')
        setLeadMagnetConsent(false)
        
        setTimeout(() => {
          const link = document.createElement('a')
          link.href = '/downloads/ai-ready-checklist.pdf'
          link.download = 'ai-ready-checklist.pdf'
          document.body.appendChild(link)
          link.click()
          document.body.removeChild(link)
        }, 500)

        setTimeout(() => {
          setShowLeadMagnetSuccess(false)
        }, 8000)
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Lead magnet submission error:', error)
      setLeadMagnetError('There was an error processing your request. Please try again.')
    } finally {
      setLeadMagnetLoading(false)
    }
  }

  // Animation variants that respect reduced motion preference
  const fadeInUp = prefersReducedMotion 
    ? { initial: { opacity: 1 }, animate: { opacity: 1 }, transition: { duration: 0 } }
    : { initial: { opacity: 0, y: 60 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6 } }

  const staggerChildren = prefersReducedMotion
    ? { animate: { transition: { staggerChildren: 0 } } }
    : { animate: { transition: { staggerChildren: 0.1 } } }

  // Testimonials removed - will be added when real testimonials are available

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
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#6366F1] opacity-10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#34D399] opacity-10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
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
                onClick={() => handleScrollAndFocus('contact')}
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
                View My Experience
              </Button>
            </motion.div>

            <motion.div variants={fadeInUp} className="pt-4">
              <p className="text-sm text-gray-400 mb-4 uppercase tracking-wide">Proven Experience At Industry-Leading Companies</p>
              <div className="flex items-center gap-6 flex-wrap">
                <img src={cyberneticaLogo} alt="Cybernetica" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                <img src={ericssonLogo} alt="Ericsson" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                <img src={piletileviLogo} alt="Piletilevi Group" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
                <img src={icefireLogo} alt="Icefire" className="h-8 w-auto opacity-70 hover:opacity-100 transition-opacity" />
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <picture>
                <source srcSet={headshotWebP} type="image/webp" />
                <img 
                  src={headshot} 
                  alt="Martin Tamm - AI & Data Analysis Consultant" 
                  className="w-full h-auto object-contain"
                  loading="eager"
                  fetchPriority="high"
                />
              </picture>
            </div>
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
      <section id="credibility" tabIndex="-1" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A192F]">
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

      {/* Testimonials Section - Removed until real testimonials are available */}

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
                      Your download should start automatically. Check your email for the AI-Ready Checklist as well!
                      <br />
                      <span className="text-sm">(If you don't see it, check your spam folder)</span>
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
                    
                    <div className="text-left">
                      <Input
                        type="email"
                        name="email"
                        placeholder="your.email@company.com"
                        value={leadMagnetEmail}
                        onChange={(e) => {
                          setLeadMagnetEmail(e.target.value)
                          if (leadMagnetErrors.email) {
                            setLeadMagnetErrors({ ...leadMagnetErrors, email: null })
                          }
                        }}
                        required
                        className={`bg-[#0A192F] border-gray-700 focus:border-[#6366F1] text-white placeholder:text-gray-500 h-14 text-lg ${leadMagnetErrors.email ? 'border-red-500' : ''}`}
                        disabled={leadMagnetLoading}
                      />
                      {leadMagnetErrors.email && (
                        <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          <span>{leadMagnetErrors.email}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-start gap-3 text-left">
                      <Checkbox
                        id="leadConsent"
                        name="consent"
                        checked={leadMagnetConsent}
                        onCheckedChange={(checked) => {
                          setLeadMagnetConsent(checked)
                          if (leadMagnetErrors.consent) {
                            setLeadMagnetErrors({ ...leadMagnetErrors, consent: null })
                          }
                        }}
                        className={`mt-1 ${leadMagnetErrors.consent ? 'border-red-500' : ''}`}
                        disabled={leadMagnetLoading}
                      />
                      <label htmlFor="leadConsent" className="text-sm text-gray-400 cursor-pointer">
                        I consent to receiving the checklist and occasional insights about AI and data analysis. 
                        You can unsubscribe anytime. See our{' '}
                        <Link to="/privacy-policy" className="text-[#6366F1] hover:text-[#34D399]">
                          Privacy Policy
                        </Link>.
                      </label>
                    </div>
                    {leadMagnetErrors.consent && (
                      <div className="flex items-center gap-2 text-red-500 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{leadMagnetErrors.consent}</span>
                      </div>
                    )}

                    {leadMagnetError && (
                      <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                        <p className="text-red-500 text-sm">{leadMagnetError}</p>
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      disabled={leadMagnetLoading}
                      className="w-full bg-[#6366F1] hover:bg-[#5558E3] text-white text-lg py-6 rounded-lg shadow-lg shadow-[#6366F1]/30 transition-all duration-300 hover:scale-105 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {leadMagnetLoading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Processing...
                        </>
                      ) : (
                        <>
                          Download Now
                          <Download className="ml-2 group-hover:translate-y-1 transition-transform" />
                        </>
                      )}
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
              <div className="mt-8">
                <Button asChild size="lg" className="bg-[#6366F1] hover:bg-[#5558E3] text-white">
                  <Link to="/about">
                    Read My Full Story <ArrowRight className="ml-2" />
                  </Link>
                </Button>
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
      <section id="contact" tabIndex="-1" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#0A192F]">
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
                          onChange={(e) => {
                            setFormData({ ...formData, name: e.target.value })
                            if (contactFormErrors.name) {
                              setContactFormErrors({ ...contactFormErrors, name: null })
                            }
                          }}
                          required
                          className={`bg-[#0A192F] border-gray-700 focus:border-[#6366F1] text-white placeholder:text-gray-500 h-12 ${contactFormErrors.name ? 'border-red-500' : ''}`}
                          disabled={contactFormLoading}
                        />
                        {contactFormErrors.name && (
                          <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            <span>{contactFormErrors.name}</span>
                          </div>
                        )}
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
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value })
                            if (contactFormErrors.email) {
                              setContactFormErrors({ ...contactFormErrors, email: null })
                            }
                          }}
                          required
                          className={`bg-[#0A192F] border-gray-700 focus:border-[#6366F1] text-white placeholder:text-gray-500 h-12 ${contactFormErrors.email ? 'border-red-500' : ''}`}
                          disabled={contactFormLoading}
                        />
                        {contactFormErrors.email && (
                          <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            <span>{contactFormErrors.email}</span>
                          </div>
                        )}
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
                          onChange={(e) => {
                            setFormData({ ...formData, message: e.target.value })
                            if (contactFormErrors.message) {
                              setContactFormErrors({ ...contactFormErrors, message: null })
                            }
                          }}
                          required
                          rows={5}
                          className={`bg-[#0A192F] border-gray-700 focus:border-[#6366F1] text-white placeholder:text-gray-500 resize-none ${contactFormErrors.message ? 'border-red-500' : ''}`}
                          disabled={contactFormLoading}
                        />
                        {contactFormErrors.message && (
                          <div className="flex items-center gap-2 mt-2 text-red-500 text-sm">
                            <AlertCircle className="w-4 h-4" />
                            <span>{contactFormErrors.message}</span>
                          </div>
                        )}
                      </div>

                      <div className="flex items-start gap-3 text-left">
                        <Checkbox
                          id="consent"
                          name="consent"
                          checked={formData.consent}
                          onCheckedChange={(checked) => {
                            setFormData({ ...formData, consent: checked })
                            if (contactFormErrors.consent) {
                              setContactFormErrors({ ...contactFormErrors, consent: null })
                            }
                          }}
                          className={`mt-1 ${contactFormErrors.consent ? 'border-red-500' : ''}`}
                          required
                          disabled={contactFormLoading}
                        />
                        <label htmlFor="consent" className="text-sm text-gray-400 cursor-pointer">
                          I consent to the processing of my personal data for the purpose of responding to my inquiry. 
                          I understand my data will be handled according to the{' '}
                          <Link to="/privacy-policy" className="text-[#6366F1] hover:text-[#34D399]">
                            Privacy Policy
                          </Link>.
                        </label>
                      </div>
                      {contactFormErrors.consent && (
                        <div className="flex items-center gap-2 text-red-500 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          <span>{contactFormErrors.consent}</span>
                        </div>
                      )}

                      {contactFormError && (
                        <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-4 flex items-start gap-3">
                          <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                          <p className="text-red-500 text-sm">{contactFormError}</p>
                        </div>
                      )}

                      <Button 
                        type="submit"
                        size="lg"
                        disabled={contactFormLoading}
                        className="w-full bg-gradient-to-r from-[#6366F1] to-[#34D399] hover:from-[#5558E3] hover:to-[#2BC08A] text-white text-lg py-6 rounded-lg shadow-lg shadow-[#6366F1]/30 transition-all duration-300 hover:scale-105 group disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                      >
                        {contactFormLoading ? (
                          <>
                            <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Schedule Your Free Audit
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                          </>
                        )}
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
