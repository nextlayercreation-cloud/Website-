import React from 'react'
import services, { DEFAULT_WHATSAPP_NUMBER } from './data/services'
import Icon from './components/ui/Icon'
import './index.css'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

export default function Services(){
  return (
    <>
      <Navbar />
      <section id="services" className="services-section">
        <div className="container">
          <header style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24}}>
            <div>
              <h2 style={{margin:0}}>Our Services</h2>
              <p style={{margin:0, color:'var(--muted)'}}>Solutions tailored for your business</p>
            </div>
          </header>

          <div className="services-grid">
            {services.map(s => (
              <article key={s.id} className="service-card">
                <div className="service-icon" role="img" aria-label={`${s.title} icon`}>
                  <Icon name={s.icon} size={28} title={s.title} />
                </div>
                <h3 className="service-title">{s.title}</h3>
                <p className="service-desc">{s.description}</p>
                {(() => {
                  const phone = (s.whatsappNumber || DEFAULT_WHATSAPP_NUMBER).toString().replace(/\D/g, '');
                  const message = s.whatsappMessage || `Hi, I'm interested in ${s.title} services. Please send details.`;
                  const href = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
                  return (
                    <a className="service-book" aria-label={`Book ${s.title} via WhatsApp`} href={href} target="_blank" rel="noopener noreferrer">Book Now</a>
                  );
                })()}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
