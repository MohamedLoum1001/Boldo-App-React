import React from 'react'
import Team1 from "../Assets/team1.png";
import Team2 from "../Assets/team2.png";
import Team3 from "../Assets/team3.png";

const ProductPhoto = () => {
    return (
        <section className="ProductPhoto my-5">
            <div className="container">
                <div className="row">
                    <div className="col-12 py-5">
                        <p className='text-secondary fs-6'>Our team</p>
                        <h2 className='text-dark fs-1'>The leadership team</h2>
                        <p className='fs-6 fw-100 text-secondary'>Conversion angel investor entrepreneur first mover advantage. Handshake <br />
                            infographic mass market crowdfunding iteration. Traction stack user experience <br />
                            deployment beta innovator incubator focus. Sales user experience branding growth <br />
                            hacking holy grall monetization conversion prototype stock network effects. Learning <br />
                            curve network effects return on investment bootstrapping business-to-consumer.</p>

                    </div>
                </div>

                <div className="row my-5 p-5">
                    <div className="d-flex flex-column flex-md-row justify-content-around align-items-center justify-content-md-around align-items-md-center">
                        <div className="col-md-4 col-lg-4">
                            <img src={Team1} alt="" className='img-fluid mx-auto' />
                            <p className='text-dark fs-2 text-center mt-4'>Michael Scoot</p>
                            <p className='text-secondary fs-6 text-center'>General manager</p>

                        </div>

                        <div className="col-md-4 col-lg-4">
                            <img src={Team2} alt="" className='img-fluid mx-auto' />
                            <p className='text-dark fs-2 text-center mt-4'>Dwight Schrute</p>
                            <p className='text-secondary fs-6 text-center'>General manager</p>
                        </div>

                        <div className="col-md-4 col-lg-4">
                            <img src={Team3} alt="" className='img-fluid mx-auto' />
                            <p className='text-dark fs-2 text-center mt-4'>Pam Beetsley</p>
                            <p className='text-secondary fs-6 text-center'>General manager</p>
                        </div>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default ProductPhoto
