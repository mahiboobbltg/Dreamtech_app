import React from 'react'

import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'


import Logo from "./image/Logo.png"
import "./style.css"
import { Link } from 'react-router-dom'





function Dtechlogin() {
    return (
        <Container fluid className='bg-light d-flex  justify-content-center align-items-center '>
            <Row >
                <Col>
                <div className=' d-flex justify-content-center mt-4'>
                <img  src={Logo} alt='hrlogo'  width={100} />
                </div>
                    <Card style={{ width: '27rem' }} className='mt-4 bg-white'>
                        <Card.Title className='text-center mt-4 fs-2 '>Login</Card.Title>
                        <Card.Subtitle className='text-center text-success'>Access to our dashboard</Card.Subtitle>
                        <Card.Body>
                            <Form>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control type='email' placeholder='example@123'  className='bg-light'/>
                                </Form.Group>
                                <Form.Group className='mb-4'>
                                    <div className='d-flex justify-content-between flex-wrap'>
                                    <Form.Label> Password</Form.Label>
                                 <p>Forgot Password?</p>

                                    </div>
                                    <Form.Control type='password' placeholder='enter Password'  className='bg-light' />
                                </Form.Group>
                                <div className="d-grid mb-4">
                                    <Button  type='submit' variant="danger" size="lg"> <Link  to="/Dtechadmin" className='text-decoration-none text-white' variant="danger" size="lg">
                                    Login
                                    </Link>
                                 
                                    </Button>
                                    </div>
                            </Form>
                            <p className='mb-5 text-center'>Dont't have an account yet?   <Link  to="/Dtechregister" className='text-decoration-none' variant="danger" size="lg">
                                   Register
                                    </Link></p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Dtechlogin