import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Jayram Powar</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#portfolio" className="footer__link">Projects</a>
                </li>
                <li>
                    <a href="#contact" className="footer__link">Connect me</a>
                </li>
            </ul>
            <div className="footer__social">
                <a href="#contact" className="social-icon" >
                <i className='bx bxl-gmail'></i>
                </a>
                <a href="https://github.com/JayramPowar" className="social-icon" target="_blank" rel="noreferrer">
                <i className='bx bxl-github'></i>
                </a>
                <a href="https://www.linkedin.com/in/developerjayram" className="social-icon" target="_blank" rel="noreferrer" >
                    <i className='bx bxl-linkedin'></i>
                </a>    
            </div>
            <span className="footer__copy"></span>
        </div>
    </footer>
  );
}

export default Footer;