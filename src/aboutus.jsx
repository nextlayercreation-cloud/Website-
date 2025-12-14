import React from 'react'
import './index.css'
import about from './data/about'
import Icon from './components/ui/Icon'
import Navbar from './Navbar'

export default function AboutUs(){
  return (
    <>
      <section id="aboutus" className="services-section" aria-labelledby="aboutus-title">
        <div className="container">
          <header style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24}}>
            <div>
              <h2 id="aboutus-title" style={{margin:0}}>About Us</h2>
              <p style={{margin:0, color:'var(--muted)'}}>Who we are & what we stand for</p>
            </div>
          </header>

          <div className="services-grid">
            {about.map(a => (
              <article key={a.id} className="service-card">
                <div className="service-icon" role="img" aria-label={`${a.title} icon`}>
                  <Icon name={a.icon} size={28} title={a.title} />
                </div>
                <h3 className="service-title">{a.title}</h3>
                <p className="service-desc">{a.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
