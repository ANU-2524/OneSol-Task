import React from 'react'
import { motion } from 'framer-motion'
import { Users, Zap, Clock, TrendingUp } from 'lucide-react'

const FloatingBubble = ({ children, position, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ 
      opacity: 1, 
      y: [0, -10, 0],
    }}
    transition={{ 
      duration: 5, 
      repeat: Infinity, 
      delay,
      opacity: { duration: 1 }
    }}
    className="glass"
    style={{
      position: 'absolute',
      padding: '16px',
      maxWidth: '280px',
      fontSize: '13px',
      ...position,
      zIndex: 1
    }}
  >
    {children}
  </motion.div>
)

const Hero = () => {
  return (
    <section className="grid-bg" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '120px'
    }}>
      {/* Background Gradients */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, var(--accent-1) 0%, transparent 70%)',
        opacity: 0.15,
        filter: 'blur(80px)',
        zIndex: 0
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '10%',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(circle, var(--accent-2) 0%, transparent 70%)',
        opacity: 0.15,
        filter: 'blur(80px)',
        zIndex: 0
      }} />

      <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 10 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span style={{ 
            background: 'rgba(59, 130, 246, 0.1)', 
            color: 'var(--light-primary)', 
            padding: '8px 16px', 
            borderRadius: '99px',
            fontSize: '14px',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            display: 'inline-block',
            marginBottom: '24px',
            border: '1px solid rgba(59, 130, 246, 0.2)'
          }}>
           
          </span>
          <h1 style={{ 
            fontSize: 'max(48px, 5vw)', 
            marginBottom: '24px', 
            lineHeight: 1.1,
            color: 'white'
          }}>
            Every Hire, <span className="text-gradient">Faster and Better</span>
          </h1>
          <p style={{ 
            fontSize: '20px', 
            color: 'rgba(255,255,255,0.7)', 
            maxWidth: '600px', 
            margin: '0 auto 40px',
            fontWeight: 500
          }}>
            Stop losing great candidates to slow, manual hiring processes. 
            Let AI handle the heavy lifting while you focus on building your team.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button className="btn-primary" style={{ fontSize: '18px', padding: '16px 36px' }}>
              Start Hiring Smarter
            </button>
            <button className="btn-outline" style={{ fontSize: '18px', padding: '16px 36px' }}>
              See How It Works
            </button>
          </div>
        </motion.div>

        {/* Floating Conversations - Desktop only for layout */}
        <div className="floating-bubbles" style={{ pointerEvents: 'none' }}>
          <FloatingBubble position={{ top: '-100px', left: '-50px' }} delay={0}>
            <div style={{ fontWeight: 700, marginBottom: '8px', color: 'var(--accent-1)', fontSize: '14px' }}>Sarah K., Founder at TechStart</div>
            <p style={{ opacity: 0.9, lineHeight: 1.4 }}>“Candidates wait 3 weeks for replies while I'm juggling everything. We're losing great talent to competitors.”</p>
          </FloatingBubble>

          <FloatingBubble position={{ top: '-80px', right: '-50px' }} delay={1}>
            <div style={{ fontWeight: 700, marginBottom: '8px', color: 'var(--accent-2)', fontSize: '14px' }}>Rahul M., Hiring Manager at GrowthCo</div>
            <p style={{ opacity: 0.9, lineHeight: 1.4 }}>“Posted on LinkedIn. Got 200 applications. Skimmed through 20. Hired on gut feeling. They quit in 2 months.”</p>
          </FloatingBubble>

          <FloatingBubble position={{ bottom: '-60px', left: '-60px' }} delay={2}>
            <div style={{ fontWeight: 700, marginBottom: '8px', color: 'var(--accent-3)', fontSize: '14px' }}>Priya S., CEO at InnovateLabs</div>
            <p style={{ opacity: 0.9, lineHeight: 1.4 }}>“I'm the CEO, product lead, AND now doing HR? There's zero time to read 200 resumes properly.”</p>
          </FloatingBubble>

          <FloatingBubble position={{ bottom: '-40px', right: '-70px' }} delay={1.5}>
            <div style={{ fontWeight: 700, marginBottom: '8px', color: 'var(--light-primary)', fontSize: '14px' }}>Amit T., Head of HR at ScaleUp</div>
            <p style={{ opacity: 0.9, lineHeight: 1.4 }}>“Our best candidate accepted another offer while we were still scheduling interviews.”</p>
          </FloatingBubble>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1024px) {
          .floating-bubbles { display: none; }
        }
      `}} />
    </section>
  )
}

export default Hero
