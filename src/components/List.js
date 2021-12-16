import React from 'react'
import {Card,Row,Col,Button} from 'react-bootstrap'

function List(props) {
    return (
    <Card className='m-3'>
        <Row>
            <Col xs="8">
            <Card.Body>
                <Card.Title className='fs-4'>{props.name}</Card.Title>
                <Card.Text className='fs-8'>
                    <span><b>{props.date.day}</b>, {props.date.date}</span> 
                </Card.Text>
                <Card.Text className='fs-8 text-primary'>
                    Total : Rp. {props.total}
                </Card.Text>
            </Card.Body>
            </Col>
            {props.view &&
            <Col className='d-flex align-items-start mt-5 pe-5 justify-content-end' xs="4">
                <Button className='primary'>View</Button>
            </Col>}
        </Row>
    </Card>
    )
}

export default List
