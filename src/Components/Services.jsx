import { Element } from 'react-scroll';
import s1 from '/assets/s1.jpg';
import s2 from '/assets/s2.jpg';
import s3 from '/assets/s3.jpg';
import s4 from '/assets/s4.jpg';
import s5 from '/assets/s5.jpg';
import { useState } from 'react';

const Services = () => {
    const serviceData = [
        {
            title: "Pediatric (Children) Occupational Therapy",
            shortDescription: "Helping children develop essential skills for daily activities, school, communication, and play.",
            image: s1,
            longDescription: [
                "Sensory Integration Therapy (SI): To manage sensory processing issues (e.g., touch, sound sensitivity).",
                "Fine Motor Therapy: To improve hand strength, grasp, writing, and manipulation skills.",
                "Gross Motor Therapy: For balance, posture, and coordination.",
                "Play Therapy: To enhance social, emotional, and cognitive development through play.",
                "Behavioral Interventions: For autism, ADHD, and learning disabilities.",
                "Feeding Therapy: To address chewing, swallowing, and picky eating problems.",
                "Social Skills Training: To improve communication and peer interaction.",
            ],
            speechAndLanguageTraining: [
                "To improve speech clarity, language development, communication, and understanding.",
                "Focus on expressive and receptive language, articulation, fluency, and pragmatic (social) language.",
                "Helps children with speech delays, stammering, apraxia, and communication disorders."
            ]
        },
        {
            title: "Adult Occupational Therapy",
            shortDescription: "Adult Occupational Therapy helps individuals regain independence in daily activities following injury, illness, or disability.",
            image: s2,
            longDescription: [
                "Neurodevelopmental Therapy (NDT): For stroke, brain injuries, and neurological disorders.",
                "Hand Function Therapy: For fractures, nerve injuries, arthritis, or post-surgical recovery.",
                "Cognitive Rehabilitation: Improving memory, attention, and executive functions.",
                "Workplace Ergonomics and Injury Prevention: Adjusting work environments for comfort and safety.",
                "Psychosocial Interventions: For anxiety, depression, and stress management.",
            ],
        },
        {
            title: "Geriatric (Elderly) Occupational Therapy",
            shortDescription: "Geriatric Occupational Therapy supports older adults in maintaining independence, and quality of life.",
            image: s3,
            longDescription: [
                "Fall Prevention Programs: Improving balance and strength.",
                "Memory Enhancement Activities: Supporting dementia and Alzheimer's care.",
                "Activities of Daily Living (ADL) Training: Bathing, dressing, grooming, toileting.",
                "Environmental Modifications: Home safety assessments, adaptive equipment.",
                "Pain Management Techniques: For chronic pain, arthritis, and mobility issues."
            ],
        },
        {
            title: "Mental Health Occupational Therapy",
            shortDescription: "Mental Health Occupational Therapy supports individuals in managing routines and engaging in daily activities.",
            image: s4,
            longDescription: [
                "Cognitive Behavioral Approach (CBT-based OT): For managing anxiety, depression, and stress.",
                "Life Skills Training: Time management, money handling, social interaction.",
                "Group Therapy: Enhancing social skills and emotional regulation.",
                "Vocational Training and Support: Helping individuals return to work and meaningful roles."
            ],
        },
        {
            title: "Rehabilitation Occupational Therapy (Post-surgery/Illness)",
            shortDescription: "Rehabilitation Occupational Therapy helps individuals recover function and independence after surgery, injury, or serious illness.",
            image: s5,
            longDescription: [
                "Orthopedic Rehabilitation: Recovery after joint replacement, fractures.",
                "Cardiac and Pulmonary Rehabilitation: Energy conservation, breathing techniques.",
                "Prosthetic Training: Training in using artificial limbs.",
                "Splinting and Orthotic Management: Customized support for mobility and function."
            ],
        },
    ]
    const mobileNumber = "+917861045443";

    const handleLearnMore = (index) => {
        setPopupData(serviceData[index]);
        setShowPopup(true);
    }

    const [showPopup, setShowPopup] = useState(false);
    const [popupData, setPopupData] = useState({});

    return (
        <>
            {
                showPopup === true &&
                (
                    <div className="popupLayer" onClick={() => { setShowPopup(""); setPopupData({}); }}>
                        <div className="popUpBox" onClick={(e) => { e.stopPropagation() }}>
                            <div className="popupHeader">
                                <div></div>
                                <p className="popup-title">
                                    {popupData.title}
                                </p>
                                <div>
                                    <ion-icon onClick={() => { setShowPopup(""); setPopupData({}); }} name="close-circle-outline"></ion-icon>
                                </div>
                            </div>

                            <div className="popup-data">
                                <div className="left">
                                    <div className="service-img-box">
                                        <img className="img" src={popupData.image} alt="" />
                                    </div>
                                </div>
                                <div className="right">
                                    <p className="description">
                                        {popupData.shortDescription}
                                    </p>
                                    <p className="sub-title">
                                        Services and Therapies:
                                    </p>
                                    {
                                        popupData.longDescription?.map((desc, index) => (
                                            <>
                                                <p className='description' key={index}>
                                                    <ion-icon name="arrow-forward-outline"></ion-icon>
                                                    {desc}
                                                </p>
                                            </>
                                        ))
                                    }

                                    {
                                        popupData.speechAndLanguageTraining &&
                                        <>
                                            <p className="sub-title">
                                                Speech and Language Training
                                            </p>
                                            {
                                                popupData.speechAndLanguageTraining?.map((desc, index) => (
                                                    <p className='description' key={index}>
                                                        <ion-icon name="arrow-forward-outline"></ion-icon>
                                                        {desc}
                                                    </p>
                                                ))
                                            }
                                        </>
                                    }
                                    <a target='_blank' href={`https://wa.me/${mobileNumber}`} className='contact-btn'>
                                        Contact Me <ion-icon name="logo-whatsapp"></ion-icon>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
            <Element name="services" className="services-component">
                <h1 className="service-title">What Services We Offer</h1>
                <div id='contact' className="services-container">
                    {
                        serviceData.map((cardData, index) => (
                            <div className="service-card" key={index}>
                                <a target='_blank' href={`https://wa.me/${mobileNumber}`} className="wp-contact">
                                    <ion-icon name="logo-whatsapp"></ion-icon>
                                </a>
                                <div className="service-img-box">
                                    <img className="img" src={cardData.image} alt="" />
                                </div>
                                <div className="service-detail">
                                    <p className="title">
                                        {cardData.title}
                                    </p>
                                    <p className="description">
                                        {cardData.shortDescription}
                                    </p>
                                    <button onClick={() => handleLearnMore(index)} className='learnmore'>
                                        Learn More
                                    </button>
                                </div>
                            </div>
                        ))
                    }
                </div>

                <svg className='wave' viewBox="0 0 1440 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 34.9867L80 37.884C160 41 320 46.4667 480 58.3293C640 69.9733 800 87.4667 960 81.6173C1120 75.9867 1280 46.4667 1360 32.0893L1440 17.4933V0H1360C1280 0 1120 0 960 0C800 0 640 0 480 0C320 0 160 0 80 0H0V34.9867Z" fill="#caebf5" />
                    <defs>
                        <clipPath id="clip0_916_42">
                            <rect width="1440" height="82" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </Element>
        </>
    )
}

export default Services
