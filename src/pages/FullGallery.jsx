import React, { useMemo } from 'react';
import Navbar from '../components/Navbar';
import FullScreenImage from '../components/FullScreenImage';
import { useAuth } from '../hooks/AuthContext';
import { Link } from 'react-scroll';

function FullGallery(){
    const { isLogin } = useAuth();
      const modules = import.meta.glob('/src/assets/gallery/*.{png,jpg,jpeg,svg}', { eager: true });
      const upIcon=(
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
        <path d="M20.311,9.593c-1.286-2.541-2.743-4.341-4.048-5.593h2.659c.829,0,1.5-.671,1.5-1.5s-.671-1.5-1.5-1.5H5.079c-.829,0-1.5,.671-1.5,1.5s.671,1.5,1.5,1.5h2.667c-1.308,1.254-2.771,3.055-4.056,5.593-.374,.739-.078,1.642,.661,2.016s1.641,.079,2.016-.661c1.359-2.685,2.921-4.376,4.135-5.392v15.944c0,.829,.671,1.5,1.5,1.5s1.5-.671,1.5-1.5V5.562c1.215,1.018,2.778,2.709,4.133,5.386,.264,.522,.792,.823,1.339,.823,.228,0,.459-.052,.676-.162,.739-.374,1.035-1.276,.661-2.016Z"/>
        </svg>
      );
      const allImages = useMemo(() => {
        // modules is an object mapping path -> module; module.default is the url
        return Object.values(modules).map((m) => m && m.default ? m.default : m).filter(Boolean);
      }, [modules]);
    return (
        <>
            <Navbar />
            <Link id="goToTop" to="fullGallery"></Link>
            <span className="fullGallery"></span>
            <section className="fullGallery-section">
                <div className="container">
                    <header style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24}}>
                        <div>
                            <h2 style={{margin:0}}>Gallery</h2>
                            <p style={{margin:0, color:'var(--muted)'}}>Completed Works that are handled by our Team</p>
                        </div>
                    </header>
                    <div className="fullGallery-grid">
                        {isLogin && (<div className="viewAll" onClick={()=>{document.getElementById("imgUpload").click()}} style={{backgroundColor:"grey"}}>
                            <input className="btn-primary" id="imgUpload" style={{width:"35%",visibility:"hidden"}} type="file"/>
                            <p className="viewAll-caption" style={{marginLeft:"-30%",marginTop:"5%"}}>Click to Upload</p>
                        </div>)}
                        {allImages.map((src, i) => (
                            <FullScreenImage src={src} key={i} alt={`Image ${i+1}`} />
                        ))}
                    </div>
                </div>
            </section>
            <Link title='Scroll to Top' className='scrollUp' to="fullGallery" smooth={true} duration={500} offset={-70} aria-label="Scroll to top of page">
                <div className="btn btn-primary service-icon">
                  {upIcon}
                </div>
            </Link>
        </>
    );
}

export default FullGallery;