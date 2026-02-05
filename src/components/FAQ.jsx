import React, { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          padding: '24px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: 'none',
          color: 'white',
          textAlign: 'left'
        }}
      >
        <span style={{ fontSize: '18px', fontWeight: 600 }}>{question}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ paddingBottom: '24px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const FAQ = () => {
  const faqs = [
    {
      question: "How does the AI screening process work?",
      answer: "Our AI analyzes resumes against your specific job requirements, looking for skills, experience, and cultural fit markers. It ranks candidates based on objective criteria, ensuring you see the best talent first without manual skimming."
    },
    {
      question: "Does it integrate with my existing ATS?",
      answer: "Yes! RecruiterAI offers native integrations with Lever, Greenhouse, Workday, and more. You can sync candidates, status updates, and notes in real-time."
    },
    {
      question: "What is the pricing model?",
      answer: "We offer flexible usage-based pricing designed for growth. Start with our Pro plan for small teams or contact us for Enterprise-grade features and custom volume discounting."
    },
    {
      question: "How long does it take to set up?",
      answer: "Most teams are up and running in less than 30 minutes. Setting up your first automated workflow is as simple as selecting a template and connecting your job board."
    },
    {
      question: "Is my candidate data secure?",
      answer: "Security is our top priority. We are SOC2 Type II compliant and use industry-standard encryption. Your data is isolated and never used to train global models without your consent."
    }
  ]

  return (
    <section id="faq">
      <div className="container" style={{ maxWidth: '800px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '48px', fontSize: '32px' }}>Frequently Asked Questions</h2>
        <div>
          {faqs.map((faq, i) => (
            <FAQItem key={i} {...faq} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
