import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Icon from './components/ui/Icon';
import {Link as RouterLink} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';

function Navbar({ isLogin }) {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    useEffect(() => {
        const onResize = () => { if (window.innerWidth > 920 && menuOpen) setMenuOpen(false); };
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
    }, [menuOpen]);

    // ... rest of SVG icon variable etc.

    return (
        <header className="site-navbar" role="navigation" aria-label="Main navigation">
            <div className="container">
                <div className="nav-left">
                    <RouterLink className="logo-link" to="/" aria-label="Go to homepage">
                        <div className="logo-icon" aria-hidden={true}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                        </div>
                        <span className="brand-name">Raj Paintings</span>
                    </RouterLink>
                </div>

                <nav id="main-navigation" className={`nav-right ${menuOpen ? 'open' : ''}`} aria-label="Primary">
                    {location.pathname=="/"?(
                    <ScrollLink onClick={() => setMenuOpen(false)} className="nav-link" to="home" aria-current={location.pathname === "/" ? 'page' : undefined}>
                        <span className="nav-text" >Home</span>
                    </ScrollLink>
                    ):(
                    <RouterLink onClick={() => setMenuOpen(false)} className="nav-link" to="/" aria-current={location.pathname === "/" ? 'page' : undefined}>
                        <span className="nav-text" >Home</span>
                    </RouterLink>
                    )}
                    {location.pathname=="/" && (<>  
                        <ScrollLink onClick={() => setMenuOpen(false)} className="nav-link" to="portfolio">
                        <span className="nav-text" >Portfolio</span>
                    </ScrollLink>
                    <ScrollLink onClick={() => setMenuOpen(false)} className="nav-link" to="gallery">
                        <span className="nav-text" >Gallery</span>
                    </ScrollLink>
                    </>)}
            
                    {/* show Admin when logged in, otherwise Login */}
                    {isLogin ? (
                      <RouterLink className="nav-cta" to="/upload">Admin</RouterLink>
                    ) : (
                      <RouterLink className="nav-cta" to="/login">Log In</RouterLink>
                    )}
                </nav>

                <button
                    className={`nav-toggle ${menuOpen ? 'is-active' : ''}`}
                    aria-controls="main-navigation"
                    aria-expanded={menuOpen}
                    onClick={() => setMenuOpen((v) => !v)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                >
                    <span className="hamburger" aria-hidden={true}></span>
                </button>
            </div>
        </header>
    );
}

export default Navbar;