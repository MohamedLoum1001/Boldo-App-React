import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const ServicesText = () => {
    return (
        <section className='ServicesText my-5'>
            <div className="container">
                <div className="row">
                    <div className="service-sec rounded">
                        <div className="text-center py-5">
                            <h1 className='text-light fs-1 fw-100'>An entreprise template to rampe <br />
                                up your company website</h1>
                        </div>


                        <div className='d-flex justify-content-around align-items-center justify-content-md-center align-items-md-center'>
                            <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">

                                <Col sm="10">
                                    <Form.Control type="email" placeholder="Your email address" className='rounded-pill mt-2' />
                                </Col>

                                <Form.Label column sm="2">
                                    <Button  type="submit" className='rounded-pill'>
                                        Start now
                                    </Button>
                                </Form.Label>
                            </Form.Group>


                        </div>



                    </div>
                </div>
            </div>

        </section>
    )
}

export default ServicesText
