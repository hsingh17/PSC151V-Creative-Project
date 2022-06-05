import Button from 'react-bootstrap/Button'
import '../styles/MyButton.css'
import { useRef } from 'react'

function MyButton(props) {
    const btn_ref = useRef(null)
    const parent_click_handler = props.click_handler
    let select_ans = _ => {
        parent_click_handler(btn_ref.current.textContent)
    }
    
    return (
        <Button ref={btn_ref} onClick={select_ans} id='choice-btn'><h1>{props.clr[0]}</h1></Button> 
    )
}

export default MyButton