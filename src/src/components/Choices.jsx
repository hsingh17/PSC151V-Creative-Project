import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MyButton from './MyButton'
import { useEffect, useState } from 'react'

function Choices(props) {
    const clrs = Array.from(props.clrs)
    const expected_answer = clrs[props.q_type][0]    // Actual answer
    const parent_set_score = props.set_score
    clrs.sort() // Sort clrs so that options are presented in ABC order to user

    const click_handler = user_answer => {
        parent_set_score(user_answer === expected_answer)
    }

    return (
        <>
            <Row className='justify-content-center'>
                <Col xs={4} sm={4} className='text-center me-5 me-sm-2'>
                    <MyButton clr={clrs[0]} click_handler={click_handler} />
                </Col>

                <Col xs={4} sm={4} className='text-center'>
                    <MyButton clr={clrs[1]} click_handler={click_handler} />
                </Col>

            </Row>
            <Row className='justify-content-center mt-5 '>
                <Col xs={4} sm={4} className='text-center me-5 me-sm-2'>
                    <MyButton clr={clrs[2]} click_handler={click_handler} />
                </Col>

                <Col xs={4} sm={4} className='text-center'>
                    <MyButton clr={clrs[3]} click_handler={click_handler} />
                </Col>
            </Row>
        </>
    )
}

export default Choices