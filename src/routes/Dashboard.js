import React, { Component } from 'react'
import Header from '../components/Header'
import { Row,Col,Button,Container } from 'react-bootstrap'

export class Dashboard extends Component {
    render() {
        return (
            <>
                <Header />
                <Container fluid>
                <Row className='py-5 px-5 bg-primary text-secondary'>
                    <Col md="6">
                    <h1>Loreeasdsdaasd</h1>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis odit ea blanditiis nulla quisquam amet accusantium repudiandae natus laudantium sint corrupti, quidem animi eius tempora hic delectus sequi doloremque assumenda!
                    </p>
                    <Button className='btn-secondary text-primary'>Donate</Button>
                    </Col>
                    <Col md="6">
                        
                    </Col>
                </Row>
                <Row>

                </Row>
                <Row>
                </Row>
                </Container>
            </>
        )
    }
}

export default Dashboard
