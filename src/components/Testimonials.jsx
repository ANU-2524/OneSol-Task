import React from 'react'
import { Quote } from 'lucide-react'

const TestimonialCard = ({ quote, name, title, company }) => (
  <div className="glass" style={{
    padding: '40px',
    flex: 1,
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>
    <Quote size={32} color="var(--accent-1)" style={{ opacity: 0.5 }} />
    <p style={{ fontSize: '18px', lineHeight: 1.6, fontStyle: 'italic', color: 'rgba(255,255,255,0.9)' }}>
      {quote}
    </p>
    <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
      <div style={{ 
        width: '48px', 
        height: '48px', 
        borderRadius: '50%', 
        background: 'linear-gradient(45deg, var(--accent-1), var(--accent-3))',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 700,
        color: 'white'
      }}>
        {name.charAt(0)}
      </div>
      <div>
        <div style={{ fontWeight: 700, fontSize: '16px' }}>{name}</div>
        <div style={{ fontSize: '14px', opacity: 0.6 }}>{title}, {company}</div>
      </div>
    </div>
  </div>
)

const Testimonials = () => {
  return (
    <section>
      <div className="container">
        <h2 style={{ textAlign: 'center', marginBottom: '48px', fontSize: '32px' }}>Trusted by Founders & HR Leaders</h2>
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          <TestimonialCard 
            quote="We went from 6 weeks to hire a developer to just 10 days. RecruiterAI handled everything — screening, scheduling, follow-ups. Absolute game changer."
            name="David Chen"
            title="CTO"
            company="NexTech"
          />
          <TestimonialCard 
            quote="The ROI was obvious within the first month. We've reduced our recruitment agency spend by 80% and the quality of hires has actually gone up."
            name="Elena Rodriguez"
            title="VP of People"
            company="CloudScale"
          />
          <TestimonialCard 
            quote="Finally, an AI tool that actually understands the nuances of human interaction. The interview scheduling alone saved my team 20 hours a week."
            name="James Wilson"
            title="Founder"
            company="VelocityAI"
          />
        </div>
      </div>
    </section>
  )
}

export default Testimonials
