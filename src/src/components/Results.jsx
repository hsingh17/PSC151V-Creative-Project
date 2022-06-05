import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

function Results(props) {
    let score = props.score
    let restart_game = props.restart_game
    
    return (
        <Modal show={true} keyboard={false} size='lg' centered>
            <Modal.Header backdrop='static'>
                <Modal.Title>
                    <h1 className='display-5'>Results</h1>
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <h1 className='display-5'>
                    You got {<span style={{color: "#FF0000"}}>{score}</span>} correct!
                </h1>
            </Modal.Body>

            <Modal.Footer>
                <Button variant='primary' onClick={restart_game}>
                    <h3>Play Again</h3>
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

export default Results