import React from 'react'
import About1 from "../Assets/about1.png";
import About2 from "../Assets/about2.png";
import About3 from "../Assets/about3.png";
import About4 from "../Assets/about4.png";
import About5 from "../Assets/about5.png";

const AboutHero = () => {
    return (
        <section id="aboutHero" className='aboutHero my-5'>
            <div className="container">
                <div className="row mb-5 justify-content-center">

                    <div className='aboutContainer d-flex flex-column flex-md-row justify-content-center align-items-center justify-content-md-center align-items-md-center'>
                        <div className="col-md-4 d-flex flex-column">
                            <img src={About1} alt="" className='img-fluid mx-auto' />
                            <img src={About2} alt="" className='img-fluid mx-auto mt-5' />
                        </div>

                        <div className="col-md-4 image">
                            <img src={About3} alt="" className='img-fluid mx-auto' />
                        </div>

                        <div className="col-md-4 d-flex flex-column">
                            <img src={About4} alt="" className='img-fluid mx-auto' />
                            <img src={About5} alt="" className='img-fluid mx-auto mt-5' />
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default AboutHero
