import logo from '/assets/logo.png'
import { Element, Link } from 'react-scroll';

const Footer = () => {
    const mobileNumber = +919876543212;
    const mailId = 'jay@gmail.com';
    return (
        <Element name="about-us" className="footerContainer">
            <div className="footer">
                <div className="leftnew">
                    <Link to="/" className="logo">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="center">
                    <div className="inner-center">
                        <div className="useful-links-container">
                            <h2 className='footer-title'>
                                Useful Links
                            </h2>
                            <ul className='useful-links'>
                                <li>
                                    <Link to="home" smooth={true} duration={500}>
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link to="services" smooth={true} duration={500}>
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link to="testimonials" smooth={true} duration={500}>
                                        Testimonials
                                    </Link>
                                </li>
                                <li>
                                    <Link to="about-us" smooth={true} duration={500}>
                                        About Us
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="socialIcons">
                        <a href={`tel:${mobileNumber}`} target="_blank" rel="noreferrer" className="icon">
                            <ion-icon name="call-outline"></ion-icon>
                        </a>
                        <a href={`mailto:${mailId}`} target="_blank" rel="noreferrer" className="icon">
                            <ion-icon name="mail-outline"></ion-icon>
                        </a>
                        <a href='' target="_blank" rel="noreferrer" className="icon">
                            <ion-icon name="logo-facebook"></ion-icon>
                        </a>
                        <a href='' target="_blank" rel="noreferrer" className="icon">
                            <ion-icon name="logo-youtube"></ion-icon>
                        </a>
                        <a href='' target="_blank" rel="noreferrer" className="icon">
                            <ion-icon name="logo-linkedin"></ion-icon>
                        </a>
                        <a href='' target="_blank" rel="noreferrer" className="icon">
                            <ion-icon name="logo-instagram"></ion-icon>
                        </a>
                    </div>
                </div>
                <div className="rightNew">
                    <h2 className='footer-title'>
                        About Us
                    </h2>
                    <p className='about-text'>
                        Dr. Khyati Thakkar is a highly skilled and compassionate Occupational Therapist, committed to delivering personalized, high-quality care that enhances the lives of individuals across all age groups.
                    </p>
                </div>
            </div>
        </Element>
    )
}

export default Footer