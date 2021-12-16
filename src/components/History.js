import React,{useState} from 'react'
import {Card,Row,Col,Alert} from 'react-bootstrap'

function History(props) {
    	const [status,setStatus] = useState(true)
    return (
    <Row >
        <Col >
            <Card className='mx-auto mt-4'  style={{width:'30rem'}}>
                <Row>
                    <Col xs="8">
                    <Card.Body>
                        <Card.Title className='fs-4'>{props.donateTo}</Card.Title>
                        <Card.Text className='fs-8'>
                            <span><b>{props.date.day}</b>, {props.date.date}</span> 
                        </Card.Text>
                        <Card.Text className='fs-8 text-primary'>
                            Total : Rp. {props.total}
                        </Card.Text>
                    </Card.Body>
                    </Col>
                    {props.view &&
                    <Col className='d-flex align-items-end mt-5 pe-5 justify-content-end' xs="4">
                        <Alert className='alert-success p-2 h-1' variant="success">{status ? "Success" : "Failed"}</Alert>
                    </Col>}
                </Row>
            </Card>
        </Col>
    </Row>
    )
}

export default History