import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-boostrap/Button'

function Choices(props) {
    let choices = Array.from(props.clrs).sort()
    console.log(choices)
    return (
        <>
            <Row className='justify-content-center'>
                <Col xs={4} sm={4} className='text-center'>
                    <Button>Choice</Button> 
                </Col>

                <Col xs={4} sm={4} className='text-center'>
                    <Button>Choice</Button> 
                </Col>
            </Row>

            <Row className='justify-content-center'>
                <Col xs={4} sm={4} className='text-center'>
                    <Button>Choice</Button> 
                </Col>

                <Col xs={4} sm={4} className='text-center'>
                    <Button>Choice</Button> 
                </Col>
            </Row>
        </>
    )
}

export default Choices