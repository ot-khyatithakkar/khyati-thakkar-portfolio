import React from 'react'
import heroImg from '/assets/header.jpg';

const Header = () => {
    const mobileNumber = +919876543212;
    return (
        <div id='homeHeader' className="homeHeader">
            <div className="background">
                <img src={heroImg} loading="lazy" alt="" />
            </div>
            <div className="content">
                <p className="title">
                    Occupation Therapy
                </p>
                <p className="slogan">
                    by Dr. Khyati Thakkar
                </p>
                <button onClick={() => { window.open(`https://wa.me/${mobileNumber}`, "_blank"); }} className="learnmore">
                    Book Appointment
                </button>
            </div>
            <svg className="wave" viewBox="0 0 1440 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1440 108L1392 119.981C1344 132.188 1248 155.813 1152 150.019C1056 144 960 108 864 99C768 90 672 108 576 101.981C480 96.1875 384 65.8125 288 60.0187C192 54 96 72 48 81L0 90V180H48C96 180 192 180 288 180C384 180 480 180 576 180C672 180 768 180 864 180C960 180 1056 180 1152 180C1248 180 1344 180 1392 180H1440V108Z" fill="#ffffff" />
            </svg>


        </div>
    )
}

export default Header