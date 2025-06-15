import heroImg from '/assets/heroImg.png';

const Projects = () => {
    const data = {
        id: "1",
        title: "What is occupational therapy ",
        desc: "Occupational Therapy (OT) helps people of all ages do daily activities they need or want to do, even if they have physical, mental, or developmental challenges. According to WHO, OT supports individuals to participate fully in life by improving skills and adapting environments. Therapists use different approaches like Sensory Integration Therapy, Neurodevelopmental Therapy (NDT), Cognitive Behavioral Approach, Play Therapy, and Hand Function Therapy to help individuals regain independence. These therapies help improve movement, thinking, behavior, and daily life skills, making individuals confident and self-reliant."
    };

    return (
        <div id="projects" className="projects">
            <div className="projectContainer">
                <div className="leftContainer">
                    <p className="title">
                        {data.title}
                    </p>
                    <p className="description">
                        {data.desc}
                    </p>
                </div>
                <div
                    className="rightContainer">
                    <div className="images">
                        <img src={heroImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects
