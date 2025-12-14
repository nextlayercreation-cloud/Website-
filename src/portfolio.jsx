import { useNavigate } from "react-router-dom";

function Portfolio(){
    const navigate=useNavigate();
    return (
        <>
            <section className="portfolio-section ms-4">
                <div className="container">
                    <header style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:24}}>
                        <div>
                        <h2  id="portfolio" style={{margin:0}}>Portfolio</h2>
                        <p style={{margin:0, color:'var(--muted)'}}>What we have done & What we do</p>
                        </div>
                    </header>
                </div>
                <div className="portfolio items">
                    <div className="container">
                        <div className="portfolio-item">
                            <img className="img-thumbnail" onClick={()=>{navigate("/services")}} style={{color:"black"}} src="./src/assets/livingroom16.png" alt="Img not Available" />
                            <h3 className="">Interior Designings</h3>
                        </div>
                        <div className="portfolio-item">
                            <img className="img-thumbnail" onClick={()=>{navigate("/services")}} style={{color:"black"}} src="./src/assets/house8.jpg" alt="Img not Available" />
                            <h3 className="span">Exterior Designings</h3>
                        </div>
                    </div>
                    <div className="portfolio-grid">
                        <article className="portfolio-card">
                            <div className="portfolio-content">
                                <h3 className="portfolio-title">40+</h3>
                                <p className="portfolio-desc">Projects Complete</p>
                            </div>
                            <div className="portfolio-content">
                                <h3 className="portfolio-title">30+</h3>
                                <p className="portfolio-desc">Satisfied Clients</p>
                            </div>
                            <div className="portfolio-content">
                                <h3 className="portfolio-title">100+</h3>
                                <p className="portfolio-desc">Unique Styles</p>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Portfolio;