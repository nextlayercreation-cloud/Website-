import React, { useMemo } from "react";
import Navbar from "./Navbar";

function FullGallery(){
      const modules = import.meta.glob('/src/assets/gallery/*.{png,jpg,jpeg,svg}', { eager: true });
      const allImages = useMemo(() => {
        // modules is an object mapping path -> module; module.default is the url
        return Object.values(modules).map((m) => m && m.default ? m.default : m).filter(Boolean);
      }, [modules]);

    return (
        <>
            <Navbar />
            <section className="fullGallery-section">
                <div className="container">
                    <header style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24}}>
                        <div>
                            <h2 style={{margin:0}}>Gallery</h2>
                            <p style={{margin:0, color:'var(--muted)'}}>Completed Works that are handled by our Team</p>
                        </div>
                    </header>
                    <div className="fullGallery-grid">
                        {/* <img src="./src/assets/gallery/Livingroom16.png" alt="" />
                        <img src="./src/assets/gallery/Livingroom16.png" alt="" />
                        <img src="./src/assets/gallery/Livingroom16.png" alt="" /> */}
                        {allImages.map((src, i) => (
                            <img src={src} key={i} alt={`Image ${i+1}`} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default FullGallery;