import { useLocation } from 'react-router-dom';
import logo from "/assets/logo.png";
import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const location = useLocation();
    const currentRoute = location.pathname.split("/")[1];
    const [activeMenu, setActiveMenu] = useState(false);

    const handleOutsideClick = (e) => {
        if (e.target.className.includes("mobile-menu-container")) {
            setActiveMenu(false);
        }
    }

    return (
        <>
            <div className="navbarCustom">
                <div className="leftNav">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="rightNav">
                    <div className="menus">
                        <ul>
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
            </div>

            <div className="mobileNavbar">
                <div className="topNavbar">
                    <Link to="home" smooth={true} duration={500}>
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className={activeMenu ? "active hamburger" : "hamburger"} onClick={() =>
                    setActiveMenu(!activeMenu)
                }>
                    <div className="line1 line"></div>
                    <div className="line2 line"></div>
                    <div className="line3 line"></div>
                </div>

                <div className={activeMenu ? "activeMenu mobile-menu-container" : "mobile-menu-container"} onClick={handleOutsideClick}>
                    <div className="mobileMenu">
                        <ul>
                            <li>
                                <Link onClick={() => setActiveMenu(false)} to="home" smooth={true} duration={200} className='logo'>
                                    <img src={logo} alt="" />
                                </Link>
                            </li>
                            <li>
                                <Link onClick={() => setActiveMenu(false)} to="home" smooth={true} duration={200}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link onClick={() => setActiveMenu(false)} to="services" smooth={true} duration={200}>
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link onClick={() => setActiveMenu(false)} to="testimonials" smooth={true} duration={200}>
                                    Testimonials
                                </Link>
                            </li>
                            <li>
                                <Link onClick={() => setActiveMenu(false)} to="about-us" smooth={true} duration={200}>
                                    About Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;