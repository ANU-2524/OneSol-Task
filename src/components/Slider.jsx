import React from 'react'
import { motion } from 'framer-motion'

const logos = [
  'LinkedIn', 'Naukri', 'Indeed', 'AngelList', 'Instahyre', 
  'Wellfound', 'IIMJobs', 'Glassdoor', 'Monster', 'Cutshort'
]

const Slider = () => {
  return (
    <section style={{ padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.05)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 700, opacity: 0.8 }}>Post Once, Reach Everywhere</h2>
          <p style={{ opacity: 0.5, fontSize: '14px' }}>RecruiterAI automatically syncs your job postings across all major platforms</p>
        </div>
        
        <div style={{ 
          overflow: 'hidden', 
          whiteSpace: 'nowrap', 
          position: 'relative',
          padding: '20px 0'
        }}>
          {/* Fades */}
          <div style={{
            position: 'absolute', top: 0, left: 0, bottom: 0, width: '100px',
            background: 'linear-gradient(to right, var(--dark-primary-bg), transparent)',
            zIndex: 2
          }} />
          <div style={{
            position: 'absolute', top: 0, right: 0, bottom: 0, width: '100px',
            background: 'linear-gradient(to left, var(--dark-primary-bg), transparent)',
            zIndex: 2
          }} />

          <motion.div 
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            style={{ display: 'inline-flex', gap: '80px', alignItems: 'center' }}
          >
            {[...logos, ...logos].map((logo, i) => (
              <div 
                key={i} 
                style={{ 
                  color: 'white', 
                  fontSize: '24px', 
                  fontWeight: 800, 
                  opacity: 0.4, 
                  filter: 'grayscale(1)',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.opacity = '1'
                  e.currentTarget.style.filter = 'grayscale(0)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.opacity = '0.4'
                  e.currentTarget.style.filter = 'grayscale(1)'
                }}
              >
                {logo}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Slider
