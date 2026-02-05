import React from 'react'
import { motion } from 'framer-motion'
import { BrainCircuit, Twitter, Linkedin, Github } from 'lucide-react'

const FooterCTA = () => {
  return (
    <footer style={{ background: 'var(--light-primary-bg)', color: 'var(--dark-primary-bg)', padding: '100px 0 40px' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ fontSize: 'max(40px, 4vw)', marginBottom: '24px', color: '#000' }}>
            Ready to Hire Better, Faster?
          </h2>
          <p style={{ fontSize: '20px', opacity: 0.7, marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
            Join 500+ companies hiring smarter with AI. Start your 14-day free trial today.
          </p>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginBottom: '80px' }}>
            <button className="btn-primary" style={{ padding: '16px 40px', fontSize: '18px' }}>Start Free Trial</button>
            <button className="btn-outline" style={{ borderColor: 'rgba(0,0,0,0.1)', color: '#000', padding: '16px 40px', fontSize: '18px' }}>Schedule Demo</button>
          </div>
        </motion.div>

        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center', 
          borderTop: '1px solid rgba(0,0,0,0.05)', 
          paddingTop: '40px',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BrainCircuit size={24} color="var(--light-primary)" />
            <span style={{ fontWeight: 800, fontSize: '20px' }}>RecruiterAI</span>
          </div>
          
          <div style={{ display: 'flex', gap: '32px', fontSize: '14px', fontWeight: 600 }}>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Cookies</a>
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <Twitter size={20} />
            <Linkedin size={20} />
            <Github size={20} />
          </div>
        </div>
        <div style={{ marginTop: '40px', fontSize: '12px', opacity: 0.5 }}>
          © 2026 RecruiterAI. All rights reserved. Built for Silicon Valley's fastest growing teams.
        </div>
      </div>
    </footer>
  )
}

export default FooterCTA
