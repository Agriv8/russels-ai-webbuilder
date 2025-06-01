import { motion } from 'framer-motion'
import { 
  ChevronRight, 
  AlertCircle, 
  TrendingUp, 
  Zap, 
  Clock, 
  Shield, 
  CheckCircle,
  Star,
  ArrowRight,
  X
} from 'lucide-react'
import { useState, useEffect } from 'react'

function App() {
  const [showExitPopup, setShowExitPopup] = useState(false)
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 })
  const [notification, setNotification] = useState({ show: false, message: '' })

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { hours: prev.hours, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Exit intent detection
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !showExitPopup) {
        setShowExitPopup(true)
      }
    }
    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [showExitPopup])

  // Social proof notifications
  useEffect(() => {
    const messages = [
      "John from New York just started their AI website build",
      "Sarah's website generated 47 leads in the first week",
      "TechCorp increased conversions by 312%",
      "Mike from California just booked a consultation",
      "Emma's AI website is now live and converting"
    ]
    
    const showRandomNotification = () => {
      const randomMessage = messages[Math.floor(Math.random() * messages.length)]
      setNotification({ show: true, message: randomMessage })
      
      setTimeout(() => {
        setNotification({ show: false, message: '' })
      }, 5000)
    }
    
    // Show first notification after 3 seconds
    const firstTimer = setTimeout(showRandomNotification, 3000)
    
    // Then show notifications every 15-30 seconds
    const interval = setInterval(() => {
      if (!showExitPopup) {
        showRandomNotification()
      }
    }, Math.random() * 15000 + 15000)
    
    return () => {
      clearTimeout(firstTimer)
      clearInterval(interval)
    }
  }, [showExitPopup])

  return (
    <div className="min-h-screen bg-dark overflow-x-hidden">
      {/* Social Proof Notification */}
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: notification.show ? 0 : -300, opacity: notification.show ? 1 : 0 }}
        transition={{ type: "spring", damping: 20 }}
        className="fixed bottom-24 left-8 z-40 bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-700 max-w-sm"
      >
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          <p className="text-sm text-gray-300">{notification.message}</p>
        </div>
      </motion.div>

      {/* Floating CTA */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2 }}
        className="fixed bottom-8 right-8 z-50"
      >
        <a
          href="#final-cta"
          className="gradient-bg text-white px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2 glow"
        >
          Get Your AI Website <ChevronRight size={20} />
        </a>
      </motion.div>

      {/* Exit Intent Popup */}
      {showExitPopup && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-900 p-8 rounded-2xl max-w-md w-full relative"
          >
            <button
              onClick={() => setShowExitPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
            >
              <X size={24} />
            </button>
            <h3 className="text-2xl font-bold mb-4">Wait! Don't Leave Empty-Handed</h3>
            <p className="text-gray-300 mb-6">
              Get our FREE guide: "7 AI Website Secrets That Generated $50M in Revenue"
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 bg-gray-800 rounded-lg mb-4"
            />
            <button className="w-full gradient-bg text-white py-3 rounded-lg font-bold hover:scale-105 transition-transform">
              Send Me The Guide
            </button>
          </motion.div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg-main.jpg" 
            alt="AI Technology Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/90 to-dark" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-neonBlue/10 to-transparent" />
        
        <div className="container mx-auto text-center relative z-10 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-neonBlue/20 rounded-full text-neonBlue font-semibold text-sm">
              WARNING: Prices Increase January 1st
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Stop Losing Money on<br />
            <span className="gradient-text">Websites That Don't Convert</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            We've Built <span className="text-neonBlue font-bold">500+ AI Websites</span> That Generated{' '}
            <span className="text-neonPurple font-bold">$50M+ in Revenue</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <a
              href="#final-cta"
              className="gradient-bg text-white px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform inline-flex items-center justify-center gap-2 glow"
            >
              Get Your AI Website <ArrowRight size={20} />
            </a>
            <a
              href="#proof"
              className="border-2 border-gray-700 text-white px-8 py-4 rounded-lg font-bold text-lg hover:border-neonBlue transition-colors inline-flex items-center justify-center gap-2"
            >
              See Proof <ChevronRight size={20} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap justify-center gap-8 text-sm text-gray-400"
          >
            <span className="flex items-center gap-2">
              <Shield size={16} className="text-green-500" />
              30-Day Money Back Guarantee
            </span>
            <span className="flex items-center gap-2">
              <Star size={16} className="text-yellow-500" />
              4.9/5 from 500+ clients
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} className="text-neonBlue" />
              Built in 7 Days or Less
            </span>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-4 bg-gray-900/30" id="problem">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Website <span className="text-red-500">Looks Pretty</span> But{' '}
              <span className="gradient-text">Makes You Broke</span>
            </h2>
            <p className="text-xl text-gray-300">Here's what's actually happening:</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <AlertCircle className="text-red-500" size={40} />,
                title: "97% of Visitors Leave",
                description: "Your beautiful website doesn't tell them what to do next"
              },
              {
                icon: <TrendingUp className="text-orange-500" size={40} />,
                title: "Zero Lead Generation",
                description: "No systems to capture emails or book calls automatically"
              },
              {
                icon: <Zap className="text-yellow-500" size={40} />,
                title: "Competitors Winning",
                description: "They're using AI to convert 10x more visitors than you"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-red-500/50 transition-colors"
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-red-500/20 to-orange-500/20 p-8 rounded-xl border border-red-500/50"
          >
            <h3 className="text-2xl font-bold mb-4 text-center">
              Lost Revenue Calculator
            </h3>
            <div className="text-center">
              <p className="text-3xl font-bold gradient-text mb-2">
                You're losing $12,500/month
              </p>
              <p className="text-gray-400">
                Based on 5,000 monthly visitors with 0.2% conversion rate vs 3% AI-optimized rate
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-gray-800/20" id="solution">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AI Websites That <span className="gradient-text">Convert Visitors Into Customers</span>
            </h2>
            <p className="text-xl text-gray-300">
              Here's what actually works (proven on 500+ sites):
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "AI-Powered Personalization",
                description: "Shows exactly what each visitor wants to see",
                stat: "3x Higher Engagement"
              },
              {
                title: "Smart Conversion Funnels",
                description: "Guides visitors to take action automatically",
                stat: "15x More Leads"
              },
              {
                title: "24/7 AI Sales Assistant",
                description: "Answers questions and books calls while you sleep",
                stat: "47% More Sales"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-neonBlue/50 transition-all hover:scale-105"
              >
                <div className="mb-4">
                  <CheckCircle className="text-green-500" size={40} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <p className="text-neonBlue font-bold text-lg">{item.stat}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-neonBlue/20 to-neonPurple/20 p-8 rounded-xl border border-neonBlue/50"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Before vs After</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-center">
                <h4 className="text-xl font-bold text-red-500 mb-4">Old Website</h4>
                <img 
                  src="/images/before-website.svg" 
                  alt="Old Website Design" 
                  className="w-full max-w-sm mx-auto mb-4 rounded-lg border border-red-500/30"
                />
                <ul className="text-left space-y-2 text-gray-400 max-w-xs mx-auto">
                  <li>• 0.2% conversion rate</li>
                  <li>• 10 leads per month</li>
                  <li>• $2,500 revenue</li>
                  <li>• Manual everything</li>
                </ul>
              </div>
              <div className="text-center">
                <h4 className="text-xl font-bold text-green-500 mb-4">AI Website</h4>
                <img 
                  src="/images/after-website.svg" 
                  alt="AI-Powered Website" 
                  className="w-full max-w-sm mx-auto mb-4 rounded-lg border border-green-500/30"
                />
                <ul className="text-left space-y-2 text-gray-300 max-w-xs mx-auto">
                  <li>• 3.1% conversion rate</li>
                  <li>• 155 leads per month</li>
                  <li>• $38,750 revenue</li>
                  <li>• Full automation</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-20 px-4" id="proof">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-text">300% More Leads</span> in 30 Days
            </h2>
            <p className="text-xl text-gray-300">
              Don't take our word for it. Here's what happened:
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                name: "Sarah Mitchell",
                company: "TechFlow Solutions",
                result: "From 20 to 240 leads/month",
                testimonial: "I was skeptical about AI websites, but the results speak for themselves. ROI in 2 weeks."
              },
              {
                name: "Mike Chen",
                company: "Growth Marketing Co",
                result: "$150K in new revenue",
                testimonial: "They built exactly what we needed. The AI chat alone books 50+ calls per month on autopilot."
              },
              {
                name: "Jessica Adams",
                company: "Elite Coaching",
                result: "5x conversion rate",
                testimonial: "My old website was beautiful but useless. Now it's a 24/7 sales machine."
              },
              {
                name: "David Thompson",
                company: "SaaS Startup",
                result: "Cut CAC by 70%",
                testimonial: "The personalization is insane. Each visitor sees exactly what they need to see."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-800/50 p-6 rounded-xl border border-gray-700"
              >
                <div className="flex items-start gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="text-lg mb-4 italic">"{item.testimonial}"</p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-sm text-gray-400">{item.company}</p>
                  </div>
                  <p className="text-neonBlue font-bold">{item.result}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gray-400 mb-8">Trusted by 500+ businesses worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-12">
              <img src="/images/google-logo.svg" alt="Google" className="h-10 opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/images/microsoft-logo.svg" alt="Microsoft" className="h-10 opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/images/meta-logo.svg" alt="Meta" className="h-10 opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/images/amazon-logo.svg" alt="Amazon" className="h-10 opacity-60 hover:opacity-100 transition-opacity" />
              <img src="/images/openai-logo.svg" alt="OpenAI" className="h-10 opacity-60 hover:opacity-100 transition-opacity" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gray-900/50" id="process">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              How We Build Your <span className="gradient-text">AI Website in 7 Days</span>
            </h2>
            <p className="text-xl text-gray-300">
              Simple process. Guaranteed results.
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-neonBlue to-neonPurple hidden md:block" />

            <div className="space-y-12">
              {[
                {
                  day: "Day 1-2",
                  title: "AI Strategy Session",
                  description: "We analyze your business and design the perfect conversion system"
                },
                {
                  day: "Day 3-4",
                  title: "Build & Train AI",
                  description: "Create your website with AI personalization and smart funnels"
                },
                {
                  day: "Day 5-6",
                  title: "Test & Optimize",
                  description: "Fine-tune everything for maximum conversions"
                },
                {
                  day: "Day 7",
                  title: "Launch & Scale",
                  description: "Go live and start converting visitors into customers"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="flex-1" />
                  <div className="relative z-10 w-4 h-4 bg-neonBlue rounded-full border-4 border-dark mx-auto" />
                  <div className="flex-1 p-6">
                    <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 max-w-md mx-auto md:mx-0">
                      <span className="text-neonBlue font-bold">{item.day}</span>
                      <h3 className="text-2xl font-bold mt-2 mb-3">{item.title}</h3>
                      <p className="text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4" id="pricing">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block px-4 py-2 bg-red-500/20 rounded-full text-red-500 font-semibold text-sm mb-6">
              Prices Increase in {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Choose Your <span className="gradient-text">Growth Package</span>
            </h2>
            <p className="text-xl text-gray-300">
              All packages include our 30-day money-back guarantee
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$2,997",
                features: [
                  "5-page AI website",
                  "Basic personalization",
                  "Lead capture forms",
                  "Mobile responsive",
                  "30-day support"
                ],
                cta: "Start Converting",
                popular: false
              },
              {
                name: "Growth",
                price: "$5,997",
                oldPrice: "$7,997",
                features: [
                  "10-page AI website",
                  "Advanced personalization",
                  "AI chat assistant",
                  "A/B testing",
                  "90-day support",
                  "Conversion optimization"
                ],
                cta: "Most Popular",
                popular: true
              },
              {
                name: "Scale",
                price: "$9,997",
                features: [
                  "Unlimited pages",
                  "Full AI automation",
                  "Custom integrations",
                  "Priority support",
                  "Weekly optimization",
                  "Dedicated success manager"
                ],
                cta: "Scale Fast",
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative ${plan.popular ? 'scale-105' : ''}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-neonBlue to-neonPurple text-white px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <div className={`bg-gray-900 p-8 rounded-xl border ${
                  plan.popular ? 'border-neonBlue' : 'border-gray-800'
                } h-full flex flex-col`}>
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.oldPrice && (
                      <span className="text-gray-500 line-through ml-2">{plan.oldPrice}</span>
                    )}
                  </div>
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#final-cta"
                    className={`block text-center py-3 rounded-lg font-bold transition-all ${
                      plan.popular
                        ? 'gradient-bg text-white hover:scale-105'
                        : 'bg-gray-800 text-white hover:bg-gray-700'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 px-4 bg-gray-900/50">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Shield size={60} className="text-green-500 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              30-Day <span className="gradient-text">Money-Back Guarantee</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're so confident you'll love your AI website that we offer a full refund if you're not 
              seeing more leads within 30 days. No questions asked. No fine print. That's how sure we are.
            </p>
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 max-w-2xl mx-auto">
              <p className="text-lg">
                <span className="font-bold text-neonBlue">Zero Risk:</span> Try it for 30 days. 
                If you don't see results, get 100% of your money back. We even let you keep the website.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              A Message From <span className="gradient-text">Our Founder</span>
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8 bg-gray-800/30 p-8 rounded-xl border border-gray-700">
              <img 
                src="/images/ceo-placeholder.jpg" 
                alt="Russel, Founder & CEO"
                className="w-32 h-32 rounded-full object-cover border-4 border-neonBlue/50"
              />
              <div className="text-left">
                <p className="text-lg text-gray-300 mb-4">
                  "I've built websites for 15 years. The old way is dead. AI isn't coming - it's here. 
                  And if you're not using it, you're already behind. We've cracked the code on AI websites 
                  that actually convert. Let us show you."
                </p>
                <p className="font-bold text-xl">Russel</p>
                <p className="text-gray-400">Founder & CEO</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-4" id="final-cta">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-neonBlue/20 to-neonPurple/20 p-12 rounded-2xl border border-neonBlue/50"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Your Competition is <span className="text-red-500">Already Using AI</span>.
              <br />
              <span className="gradient-text">You're Not.</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Every day you wait, you're losing customers to competitors with AI websites. 
              Get yours built in 7 days or less.
            </p>
            
            <form className="max-w-md mx-auto space-y-4 mb-8">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-neonBlue outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-neonBlue outline-none"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="w-full px-4 py-3 bg-gray-800 rounded-lg border border-gray-700 focus:border-neonBlue outline-none"
              />
              <button
                type="submit"
                className="w-full gradient-bg text-white py-4 rounded-lg font-bold text-lg hover:scale-105 transition-transform glow"
              >
                Get Your AI Website Now
              </button>
            </form>

            <p className="text-sm text-gray-400">
              🔒 Your information is secure and will never be shared
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="container mx-auto text-center text-gray-400">
          <p>&copy; 2024 Russel's AI Webbuilder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App