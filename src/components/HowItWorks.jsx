import React from 'react'
import { motion } from 'framer-motion'
import { Search, Mail, Calendar, Video, CheckCircle, RefreshCcw, ArrowRight, TrendingUp, Users, Clock, Target, FileSearch, UserCheck, ClipboardCheck } from 'lucide-react'

const FlowNode = ({ icon: Icon, label, color = 'var(--light-primary)' }) => (
  <motion.div 
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    style={{
      background: 'rgba(255, 255, 255, 0.05)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      borderRadius: '12px',
      padding: '12px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      width: '100%',
      position: 'relative',
      zIndex: 2
    }}
  >
    <div style={{ background: color, padding: '8px', borderRadius: '8px', display: 'flex' }}>
      <Icon size={16} color="white" />
    </div>
    <span style={{ fontSize: '13px', fontWeight: 600 }}>{label}</span>
  </motion.div>
)

const DecisionNode = ({ label }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    style={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      margin: '10px 0',
      position: 'relative',
      zIndex: 2
    }}
  >
    <div style={{
      width: '100px',
      height: '50px',
      background: 'rgba(59, 130, 246, 0.1)',
      border: '2px solid var(--accent-3)',
      clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '10px'
    }}>
      <span style={{ fontSize: '10px', fontWeight: 800, textAlign: 'center', color: 'var(--accent-3)' }}>{label}</span>
    </div>
  </motion.div>
)

const Connector = () => (
  <div style={{
    width: '2px',
    height: '20px',
    background: 'linear-gradient(to bottom, var(--light-primary), transparent)',
    margin: '0 auto',
    position: 'relative'
  }} />
)

const FlowchartCard = ({ title, nodes, benefit, highlightColor, index }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.2 }}
    whileHover={{ y: -5, scale: 1.01 }}
    className="glass glow-card" 
    style={{ 
      padding: '32px', 
      flex: 1, 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '8px',
      background: 'linear-gradient(180deg, rgba(59, 130, 246, 0.1) 0%, rgba(0,0,0,0.4) 100%)',
      border: '1px solid rgba(59, 130, 246, 0.3)',
      minWidth: '300px'
    }}
  >
    <h3 style={{ fontSize: '20px', marginBottom: '24px', fontWeight: 800 }}>{title}</h3>
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flex: 1 }}>
      {nodes.map((node, i) => (
        <React.Fragment key={i}>
          {node.type === 'node' ? (
            <FlowNode {...node} />
          ) : (
            <DecisionNode label={node.label} />
          )}
          {i < nodes.length - 1 && <Connector />}
        </React.Fragment>
      ))}
    </div>
    <div style={{ 
      marginTop: '32px', 
      padding: '16px', 
      borderRadius: '12px', 
      background: highlightColor + '15', 
      border: `1px solid ${highlightColor}30`,
      borderLeft: `4px solid ${highlightColor}`,
      fontSize: '14px',
      fontWeight: 700,
      color: 'white'
    }}>
      {benefit}
    </div>
  </motion.div>
)

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="grid-bg" style={{ position: 'relative' }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span style={{ color: 'var(--light-primary)', fontWeight: 800, fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase' }}>Workflow Automation</span>
          <h2 style={{ fontSize: 'max(36px, 4vw)', marginBottom: '20px', marginTop: '12px' }}>
            AI Recruiting Software That Works Like Your Own HR Team
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '20px', maxWidth: '700px', margin: '0 auto' }}>
            Build custom hiring workflows in minutes. No coding required.
          </p>
        </div>

        <div className="flowcharts-container">
          <FlowchartCard 
            index={0}
            title="Automated Screening & Scheduling"
            highlightColor="#3B82F6"
            benefit="🟦 Screen 250+ applications in minutes vs. 8 hours manually"
            nodes={[
              { type: 'node', icon: FileSearch, label: 'Resume screening', color: '#3B82F6' },
              { type: 'node', icon: TrendingUp, label: 'AI ranking', color: '#3B82F6' },
              { type: 'decision', label: 'QUALIFIED?' },
              { type: 'node', icon: Mail, label: 'Auto emails', color: '#3B82F6' },
              { type: 'node', icon: Calendar, label: 'Interview scheduling', color: '#3B82F6' },
              { type: 'node', icon: Users, label: 'Talent pool logic', color: '#3B82F6' }
            ]}
          />
          <FlowchartCard 
            index={1}
            title="Multi-Stage Interview Automation"
            highlightColor="#D0BCFF"
            benefit="🟪 Reduce time-to-hire from 42 days to 12 days"
            nodes={[
              { type: 'node', icon: Video, label: 'AI video interviews', color: '#D0BCFF' },
              { type: 'node', icon: ClipboardCheck, label: 'Scoring with rubric', color: '#D0BCFF' },
              { type: 'decision', label: 'PASS?' },
              { type: 'node', icon: UserCheck, label: 'Hiring manager round', color: '#D0BCFF' },
              { type: 'node', icon: Target, label: 'Offer / rejection automation', color: '#D0BCFF' }
            ]}
          />
          <FlowchartCard 
            index={2}
            title="Passive Candidate Re-engagement"
            highlightColor="#B197FC"
            benefit="🟩 Never start hiring from scratch again"
            nodes={[
              { type: 'node', icon: Users, label: 'Future talent pool', color: '#B197FC' },
              { type: 'node', icon: Clock, label: '3-month wait', color: '#B197FC' },
              { type: 'node', icon: Mail, label: 'Re-engagement emails', color: '#B197FC' },
              { type: 'node', icon: ArrowRight, label: 'Fast-track interviews', color: '#B197FC' }
            ]}
          />
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        .flowcharts-container {
          display: flex;
          gap: 32px;
          justify-content: center;
        }
        @media (max-width: 1100px) {
          .flowcharts-container {
            flex-direction: column;
            align-items: center;
          }
        }
      `}} />
    </section>
  )
}

export default HowItWorks
