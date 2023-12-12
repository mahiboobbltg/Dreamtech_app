import React from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import Logo from "./image/Logo.png"
import "./style.css"
import { Link } from 'react-router-dom'

function Dtechregister() {
    return (
        <Container fluid className='bg-light d-flex justify-content-center align-items-center'>
            <Row >
                <Col>
                    <div className=' d-flex justify-content-center mt-4'>
                        <img src={Logo} alt='hrlogo' width={80} />
                    </div>
                    <Card style={{ width: '25rem' }} className='mt-4 bg-white'>
                        <Card.Title className='text-center mt-4 fs-2 '>Register</Card.Title>
                        <Card.Subtitle className='text-center text-success'>Access to our dashboard</Card.Subtitle>
                        <Card.Body>
                            <Form>
                                <Form.Group className='mb-3'>
                                    <Form.Label>Email </Form.Label>
                                    <Form.Control type='email' placeholder='Email' className='bg-light' />
                                </Form.Group>
                                <Form.Group className='mb-4'>
                                    <div className='d-flex justify-content-between '>
                                        <Form.Label> Password</Form.Label>
                                        <p>Forgot Password?</p>

                                    </div>
                                    <Form.Control type='password' placeholder=' Password' className='bg-light' />
                                </Form.Group>
                                <Form.Group className='mb-4'>
                                    <Form.Label> Repeat Password </Form.Label>
                                    <Form.Control type='email' placeholder=' Confirm Password' className='bg-light' />
                                </Form.Group>
                                <div className="d-grid mb-4">
                                    <Button type='submit' variant="danger" size="lg">
                                        Register
                                    </Button>
                                </div>
                            </Form>
                            <p className='mb-2 text-center'>Alredy have an account ?  <Link to='/' className='text-decoration-none' variant="danger" size="lg">
                                Login
                            </Link></p>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Dtechregister