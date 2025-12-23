import React, { useEffect, useMemo, useState, useRef } from 'react';
import '../styles/index.css';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll';

export default function Home(){
  // dynamically import all images from the sliders folder using Vite's import.meta.glob
  const modules = import.meta.glob('/src/assets/sliders/*.{png,jpg,jpeg,svg}', { eager: true });
  const allImages = useMemo(() => {
    // modules is an object mapping path -> module; module.default is the url
    return Object.values(modules).map((m) => m && m.default ? m.default : m).filter(Boolean);
  }, [modules]);

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const count = allImages.length;
  const intervalRef = useRef(null);
  const go=(
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
  <path d="m19,12c.001.664-.255,1.294-.722,1.766l-3.918,4.081c-.098.102-.229.153-.36.153-.125,0-.249-.046-.347-.14-.199-.19-.205-.508-.014-.707l3.923-4.086c.163-.165.282-.358.355-.567H5.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h12.411c-.075-.208-.196-.398-.358-.559l-3.954-4.049c-.193-.197-.189-.514.008-.707.198-.192.515-.189.707.009l3.948,4.043c.469.462.732,1.096.737,1.763Z"/>
</svg>
  )

  useEffect(() => {
    if (count === 0) return;
    if (isPaused) return;

    intervalRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % count);
    }, 3500);

    return () => clearInterval(intervalRef.current);
  }, [count, isPaused]);

  const goTo = (i) => setCurrent((i + count) % count);
  const next = () => setCurrent((c) => (c + 1) % count);
  const prev = () => setCurrent((c) => (c - 1 + count) % count);

  if (count === 0) {
    return (
      <div className="hero-slider" aria-live="polite">
        <div className="slides"><div className="slide empty">No slider images found</div></div>
      </div>
    );
  }
  const upIcon=(
    <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
      <path d="M20.311,9.593c-1.286-2.541-2.743-4.341-4.048-5.593h2.659c.829,0,1.5-.671,1.5-1.5s-.671-1.5-1.5-1.5H5.079c-.829,0-1.5,.671-1.5,1.5s.671,1.5,1.5,1.5h2.667c-1.308,1.254-2.771,3.055-4.056,5.593-.374,.739-.078,1.642,.661,2.016s1.641,.079,2.016-.661c1.359-2.685,2.921-4.376,4.135-5.392v15.944c0,.829,.671,1.5,1.5,1.5s1.5-.671,1.5-1.5V5.562c1.215,1.018,2.778,2.709,4.133,5.386,.264,.522,.792,.823,1.339,.823,.228,0,.459-.052,.676-.162,.739-.374,1.035-1.276,.661-2.016Z"/>
    </svg>
  );

  return (
    <>
      <span id="home">.</span>
      <section className="hero-slider" aria-roledescription="carousel" aria-label="Homepage Highlights" aria-live="polite" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        <div className="slides">
          <div className="track" style={{ width: `${count * 100}%`, transform: `translateX(-${current * (100 / count)}%)` }}>
            {allImages.map((src, i) => (
              <div className={`slide ${i === current ? 'active' : ''}`} key={src} aria-hidden={i !== current} role="group" aria-roledescription="slide" aria-label={`Slide ${i+1} of ${count}`} style={{ flex: `0 0 ${100 / count}%` }}>
                <img src={src} alt={`Slide ${i+1}`} />
              </div>
            ))}
          </div>
        </div>

        <button className="prev left" onClick={prev} aria-label="Previous slide">‹</button>
        <button className="next right" onClick={next} aria-label="Next slide">›</button>

        <div className="dots" role="tablist" aria-label="Slide navigation">
          {allImages.map((_, i) => (
            <button key={i} className={`dot ${i === current ? 'active' : ''}`} onClick={() => goTo(i)} aria-label={`Go to slide ${i+1}`} aria-pressed={i === current}></button>
          ))}
        </div>
        <div className="slide-static-caption" aria-hidden={false}>
          <h3>Transform Your Dream</h3>
          <h3>Home into Reality</h3>
          <p>Luxury & Trustworthy Services</p>
        </div>
      </section>
        <RouterLink className="nav-cta viewServices viewServicesBtn" style={{textDecoration:'none'}} to="/services">View Services{go}</RouterLink>
          <Link title='Scroll to Top' className='scrollUp' to="home" smooth={true} duration={500} offset={-70} aria-label="Scroll to top of page">
            <div className="btn btn-primary service-icon">
              {upIcon}
            </div>
          </Link>
    </>
  );
}
