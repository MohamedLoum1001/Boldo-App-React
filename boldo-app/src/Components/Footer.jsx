import React from 'react'
import Logo from "../Assets/LogoFooter.png";
import Button from 'react-bootstrap/Button';

const Footer = () => {
    return (
        <section className='footer'>
            <div className="container">
                <div className="row g-3 my-5">

                    <div className="col-md-3">
                        <img src={Logo} alt="" className='img-fluid' />
                        <p className='p text-secondary my-5'>Social media validation business model <br />
                            Canvas graphical user interface launch <br />
                            party creative facebook ipad twitter.</p>
                        <p className='text-secondary my-5'>All rights reserved</p>
                    </div>

                    <div className="col-md-3">
                        <h1 className='fw-bold'>Landings</h1>
                        <p className='fs-6 text-secondary'>Home</p>
                        <p className='fs-6 text-secondary'>Products</p>
                        <p className='fs-6 text-secondary'>Services</p>

                    </div>

                    <div className="col-md-3">
                        <h1 className='fw-bold'>Company</h1>
                        <p className='fs-6 text-secondary'>Home</p>
                        <div className='d-flex flex-row'>
                            <p className='fs-6 text-secondary mt-2'>Careers</p>
                            <div className='DIV rounded-pill w-20 h-8 ms-2'>
                                <p className='p-1  ms-2'>Hiring!</p>
                            </div>
                        </div>
                        <p className='fs-6 text-secondary'>Services</p>

                    </div>

                    <div className="col-md-3">
                        <h1 className='fw-bold'>Ressources</h1>
                        <p className='fs-6 text-secondary'>Blog</p>
                        <p className='fs-6 text-secondary'>Products</p>
                        <p className='fs-6 text-secondary'>Services</p>


                    </div>

                </div>
            </div>

        </section>
    )
}

export default Footer
