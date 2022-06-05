import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

const QUESTIONS = [
    'What is the color being described by the text?',
    'What is the color of the text?',
    'What is the color of the background?'
]

function Question(props) {
    let clrs = props.clrs
    let q_type = props.q_type
    let text = clrs[0][0]
    let text_clr = clrs[1][1]
    let background_clr = clrs[2][1]

    return (
        <Container>
            <Row 
                className='border border-dark border-3 text-center h-75'
                style={{backgroundColor : background_clr}}>
                
                <h1 className='display-1 fw-bold align-self-center' style={{color : text_clr}}>
                    {text}
                </h1>
            </Row>

            <Row className='text-center'>
                <h2 style={{color : "#FFFFFF"}}>{QUESTIONS[q_type]}</h2>        
            </Row>
        </Container>
    )
}

export default Question