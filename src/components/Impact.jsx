import React from 'react'
import { motion } from 'framer-motion'

const MetricCard = ({ value, label, sublabel }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
    className="glass"
    style={{
      padding: '40px 32px',
      textAlign: 'center',
      border: '1px solid rgba(255,255,255,0.05)',
      background: 'linear-gradient(180deg, rgba(255,255,255,0.05) 0%, transparent 100%)'
    }}
  >
    <div style={{ 
      fontSize: '48px', 
      fontWeight: 800, 
      color: 'var(--accent-1)', 
      marginBottom: '8px',
      lineHeight: 1
    }}>
      {value}
    </div>
    <div style={{ fontSize: '16px', fontWeight: 700, color: 'white', marginBottom: '4px' }}>
      {label}
    </div>
    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
      {sublabel}
    </div>
  </motion.div>
)

const Impact = () => {
  const metrics = [
    { value: '10×', label: 'Faster Screening', sublabel: 'AI-first resume processing' },
    { value: '70%', label: 'Shorter Time-to-Hire', sublabel: 'Average reduction in cycle' },
    { value: '25×', label: 'Interview Capacity', sublabel: 'Scalable automated screening' },
    { value: '95%', label: 'Application Completion', sublabel: 'Frictionless candidate UX' },
    { value: '89%', label: 'Qualified Candidates', sublabel: 'Better top-of-funnel matches' },
    { value: '80%', label: 'Lower Recruitment Costs', sublabel: 'Massive efficiency gains' },
    { value: '50%', label: 'Fewer Bad Hires', sublabel: 'Data-driven selection' }
  ]

  return (
    <section id="impact">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: 'max(32px, 3.5vw)', marginBottom: '16px' }}>
            The RecruiterAI Advantage
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '18px' }}>
            Data-driven results for high-growth teams.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
          gap: '24px' 
        }}>
          {metrics.map((m, i) => (
            <MetricCard key={i} {...m} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Impact
