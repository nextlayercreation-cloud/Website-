import './index.css'
import Icon from './components/ui/Icon';

function Footer(){
    return (
        <>
            <footer className="foot">
                <div className="container" style={{textAlign:'center', padding: '0 0', color: 'var(--muted)'}}>
                    <p className='h5' style={{color:"black"}}>&copy; {new Date().getFullYear()} NextLayer Creations - Design Your Next Digital Layer</p>
                    <a target="_new" href="http://nextlayercreation.netlify.app/"><img src="./src/assets/NLC-Logo.jpg" alt="NA" /></a>
                    <a className="btn btn-primary LinkBtn" href="https://nextlayercreation.netlify.app/"><Icon name="globe" size={20}/>      Visit Our Website</a>
                    <a className="Btn btn-primary LinkBtn" href="tel:+91 8610599800"><Icon name="contact" size={20}/>      +91 8610599800</a>
                    <a className="Btn btn-primary LinkBtn" href="mailto:nextlayercreation@gmail.com"><Icon name="mail" size={20}/>      nextlayercreation@gmail.com</a>
                </div>
            </footer>
        </>
    );
}

export default Footer;