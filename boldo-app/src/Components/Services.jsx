import React from 'react'
import Card1 from "../Assets/card1.png";
import Card2 from "../Assets/card2.png";
import Card3 from "../Assets/card3.png";

const Services = () => {
    return (
        <section id='services' className='services my-5 p-5'>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 py-5 d-flex flex-column align-items-center">
                        <p className='text-light fs-6'>Our Values</p>
                        <h2 className='text-light fs-1'>Things in we believe</h2>
                        <p className='fs-6 fw-100 text-light'>Conversion angel investor entrepreneur first mover advantage. Handshake <br />
                            infographic mass market crowdfunding iteration. Traction stack user experience <br />
                            deployment beta innovator incubator focus. Sales user experience branding growth <br />
                            hacking holy grall monetization conversion prototype stock network effects. Learning <br />
                            curve network effects return on investment bootstrapping business-to-consumer.</p>
                    </div>
                </div>

                <div className='card mb-3 bg-transparent mt-5 border-0'>
                    <div className='row g-5'>
                        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center justify-content-md-center align-items-md-center">
                            <div className="col-md-6 mb-5">
                            <img src={Card1} alt="" className='img-fluid mx-auto' />
                            </div>
                            <div className="col-md-6">
                                <h4 className='fs-5 fw-100 text-light'>We are commited</h4>
                            <p className='fs-6 fw-100 text-light mt-2'>Conversion angel investor entrepreneur first mover advantage. Handshake <br />
                            infographic mass market crowdfunding iteration.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='card mb-3 bg-transparent mt-5 border-0'>
                    <div className='row g-5'>
                        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center justify-content-md-center align-items-md-center">
                            <div className="col-md-6 mb-5">
                            <img src={Card2} alt="" className='img-fluid mx-auto' />
                            </div>
                            <div className="col-md-6">
                                <h4 className='fs-5 fw-100 text-light'>We are responsible</h4>
                            <p className='fs-6 fw-100 text-light mt-2'>Conversion angel investor entrepreneur first mover advantage. Handshake <br />
                            infographic mass market crowdfunding iteration.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='card mb-3 bg-transparent mt-5 border-0'>
                    <div className='row g-5'>
                        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center justify-content-md-center align-items-md-center">
                            <div className="col-md-6 mb-5">
                            <img src={Card3} alt="" className='img-fluid mx-auto' />
                            </div>
                            <div className="col-md-6">
                                <h4 className='fs-5 fw-100 text-light'>We are for progress</h4>
                            <p className='fs-6 fw-100 text-light mt-2'>Conversion angel investor entrepreneur first mover advantage. Handshake <br />
                            infographic mass market crowdfunding iteration.</p>
                            </div>
                        </div>
                    </div>
                </div>



            </div>

        </section>
    )
}

export default Services
