import React from 'react'
import { BrainCircuit } from 'lucide-react'

const Navbar = () => {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000,
      padding: '20px 0',
      background: 'rgba(0, 0, 0, 0.8)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ 
            background: 'linear-gradient(135deg, var(--light-primary), var(--accent-3))',
            padding: '8px',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <BrainCircuit size={24} color="white" />
          </div>
          <span style={{ fontSize: '24px', fontWeight: 800, color: 'white', letterSpacing: '-1px' }}>
            RecruiterAI
          </span>
        </div>
        
        <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="#how-it-works" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>Product</a>
          <a href="#impact" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>Impact</a>
          <a href="#faq" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>FAQ</a>
          <button className="btn-primary" style={{ padding: '10px 20px', fontSize: '14px' }}>Get Started</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
