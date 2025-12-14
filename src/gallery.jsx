import { Link as RouterLink } from "react-router-dom";
import FullScreenImage from "./FullScreenImage";

function Gallery(){
    const rightArrow =(
        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24">
            <path d="m19,12c.001.664-.255,1.294-.722,1.766l-3.918,4.081c-.098.102-.229.153-.36.153-.125,0-.249-.046-.347-.14-.199-.19-.205-.508-.014-.707l3.923-4.086c.163-.165.282-.358.355-.567H5.5c-.276,0-.5-.224-.5-.5s.224-.5.5-.5h12.411c-.075-.208-.196-.398-.358-.559l-3.954-4.049c-.193-.197-.189-.514.008-.707.198-.192.515-.189.707.009l3.948,4.043c.469.462.732,1.096.737,1.763Z"/>
        </svg>
    );
    return(
        <>
            <span id="gallery"></span>
            <section className="gallery-section">
                <div className="container">
                    <header style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24}}>
                        <div>
                            <h2 style={{margin:0}}>Gallery</h2>
                            <p style={{margin:0, color:'var(--muted)'}}>Our Regular Updating Work Proofs</p>
                        </div>
                    </header>
                    <div className="gallery-grid">
                        <img src="./src/assets/gallery/Bedroom1.jpg" alt="" />
                        <img src="./src/assets/gallery/Bedroom2.jpg" alt="" />
                        <div className="viewAll" style={{background:"url('./src/assets/gallery/Livingroom16.png') center no-repeat", backgroundSize:'cover'}}>
                            <RouterLink className="viewAll-caption" to="/fullgallery">View All{rightArrow}</RouterLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Gallery;