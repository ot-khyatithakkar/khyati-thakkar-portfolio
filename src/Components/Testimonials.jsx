import Carousel from 'react-bootstrap/Carousel';
import { Element } from 'react-scroll';

const Testimonials = () => {
    return (
        <Element name="testimonials" className="testimonial-component">
            <h1 className="testimonial-title">What People Says</h1>
            <Carousel data-bs-theme="dark">
                <Carousel.Item>
                    <div className="carouselSlide">
                        <br /><br />
                        <h1 className='title'>
                            She is a Magician
                        </h1>
                        <p className="description">
                            My son who  was struggling with speech delay started speaking many things in just few months and all the credit goes to Dr. Khyati . She is truly magical and very very confident about her work … the amount of hardwork and efforts she puts in for each and every child is absolutely commendable!
                            &nbsp; <a href="https://maps.app.goo.gl/tP9dh6A1Zy1CyNJ89" target='_blank'>Read full review</a>
                        </p>
                        <h1 className='author'>
                            — Komal Kothari
                        </h1>
                        <br /><br />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carouselSlide">
                        <br /><br />
                        <h1 className='title'>
                            A Guiding Light in Our Journey
                        </h1>
                        <p className="description">
                            Words seem inadequate to express the profound impact Dr. Khyati has had on our daughter, Liana, and our entire family. From the moment Dr. Khyati accurately diagnosed Liana's ADHD, we knew we were in the hands of someone truly exceptional. What followed was nothing short of a transformative journey, guided by Dr. Khyati's expertise, dedication, and unwavering compassion. &nbsp; <a href="https://g.co/kgs/epPrVBf" target='_blank'>Read full review</a>
                        </p>
                        <h1 className="author">
                            — Dr Swati Arora Roy
                        </h1>
                        <br /><br />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="carouselSlide">
                        <br /><br />
                        <h1 className='title'>
                            she's the one you all need it
                        </h1>
                        <p className="description">
                            She's one of the brilliant therapist I have ever known and treated by! I can't thank enough to her, how she cure and make my nephew's life sooo better! And she helped me alot to heal me and my family, when we were going through this hard time! My family is always greatful to her! &nbsp; <a href="https://maps.app.goo.gl/iUKXWgEsZtHhj2cj9" target='_blank'>Read full review</a>
                        </p>
                        <h1 className="author">
                            — Misari Joshi 
                        </h1>
                        <br /><br />
                    </div>
                </Carousel.Item>
            </Carousel>
        </Element>
    )
}

export default Testimonials
