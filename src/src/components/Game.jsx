import Question from './Question'
import Choices from './Choices'
import Timer from './Timer'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { useState } from 'react'

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

function Game() {
    let clrs = get_rand_colors()    // Current colors to create question from
    let q_type = Math.floor(Math.random() * 3)  // Question type (0 : text of color, 1 : color of text, 2 : color of background)
    let [score, set_score] = useState(0)  // Current score of user
    
    let set_score_wrapper = correct => {    // Wrapper of set_score passed to Choices so it can update score if user answers correctly
        console.log(correct)
        set_score(score + correct)  // Update score if user got it correct
        console.log(score) 
    }



    return (
        <Container className='vh-100 mt-3'>
            <Row className='h-50'>
                <Question clrs={clrs} q_type={q_type} />
            </Row>

            <Choices clrs={clrs} q_type={q_type} set_score={set_score_wrapper}/>
        </Container>
    )
}

export default Game

