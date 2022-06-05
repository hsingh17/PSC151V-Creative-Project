import Question from './Question'
import Choices from './Choices'
import Timer from './Timer'
import Results from './Results'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useRef, useState } from 'react'

const COLORS = {
    "Red"       : "#FF0000",
    "Yellow"    : "#FFFF00",
    "Blue"      : "#0000FF",
    "Pink"      : "#FFC0CB",
    "White"     : "#FFFFFF",
    "Green"     : "#00FF00",
    "Purple"    : "#A020F0",
    "Orange"    : "#FFA500",
    "Brown"     : "#964B00",
}

const 
    ANSWER_TIME = 3000,
    MAX_QUESTIONS = 10

function get_rand_colors() {
    // Get unique random colors to choose from
    let clrs = Array.from(Object.keys(COLORS))    // Keys of COLORS obj
    let chosen = new Set()     // Keep track of already chosen colors
    let rand_clrs = [] // Colors to return   

    while (rand_clrs.length !== 4) {
        let clr = clrs[Math.floor(Math.random() * clrs.length)]  // Get a random color
        if (!chosen.has(clr)) { // Random color hasn't already been selected
            rand_clrs.push([clr, COLORS[clr]])   // Store the obj into rand_colors
            chosen.add(clr) // Add to the set so we don't pick this clr again
        }
    }

    return rand_clrs
}

function get_rand_qtype() {
    return Math.floor(Math.random() * 3)
}

function Game() {
    let [clrs, set_clrs] = useState(get_rand_colors())    // Current colors to create question from
    let [q_type, set_qtype] = useState(get_rand_qtype())  // Question type (0 : text of color, 1 : color of text, 2 : color of background)
    let score = useRef(0)    // User's current score
    let questions = useRef(1)   // How many questions have been presented
    let game_done = questions.current > MAX_QUESTIONS

    let get_next_question = _ => {
        if (game_done) { return }
        questions.current += 1
        set_clrs(get_rand_colors())
        set_qtype(get_rand_qtype())
    }

    let set_score_wrapper = correct => {    
        score.current += correct
        get_next_question() // Get new question
    }

    let timer_end = id => {
        clearTimeout(id)
        get_next_question()
    }

    let restart_game = _ => {
        questions.current = 0
        score.current = 0
        game_done = false
        get_next_question()
    }

    return (
        <Container className='vh-100 mt-3' id='game-container'>
            <Row className='justify-content-center mb-3' id='timer'>
                <Timer timer_end={timer_end} time={ANSWER_TIME} run_timer={!game_done}/>
            </Row>

            <Row className='h-50'>
                <Question clrs={clrs} q_type={q_type}/>
            </Row>

            <Row>
                <Choices clrs={clrs} q_type={q_type} set_score={set_score_wrapper}/>
            </Row>

            <Row className='justify-content-center'>
                <h1 className='display-3 mt-1' style={{color: '#FFFFFF'}}>Score: {score.current}</h1>
            </Row>

            {(game_done && <Results score={score.current} restart_game={restart_game}/>)}
        </Container>
    )
}

export default Game

