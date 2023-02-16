import React from 'react'

const Product = () => {
    return (
        <section id='product' className='product bg-slate-900 w-100 my-5 p-5'>
            <div className="container">
                <div className="row">
                    <div className="col-12 my-5">
                        <div className="text-center">
                            <p className='text-light fs-6'>Our Number</p>
                            <h2 className='text-light'>Handshake infographic mass market <br />
                                crowdfunding iteration</h2>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className='d-flex flex-column flex-md-row justify-content-center align-items-center justify-content-md-center align-items-md-center'>
                        <div className="col-md-4 text-center">
                            <h3 className='fs-1'>120m</h3>
                            <p className='text-light'>Cool feature title</p>

                        </div>
                        <div className="col-md-4 text-center">
                            <h3 className='fs-1'>10.000</h3>
                            <p className='text-light'>Cool feature title</p>

                        </div>
                        <div className="col-md-4 text-center">
                            <h3 className='fs-1'>240</h3>
                            <p className='text-light'>Cool feature title</p>

                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Product
