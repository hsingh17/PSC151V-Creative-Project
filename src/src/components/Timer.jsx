import { useEffect } from 'react'
import '../styles/Timer.css'

function reset_animation() {
    let bar = document.getElementById('inner-bar')
    bar.style.animation = 'none'
    const reflow = bar.offsetHeight    // Trigger a reflow so that animation is re-rendered
    bar.style.animation = 'decrease 3s linear 0s infinite forwards'

}

function animation_off() {
    let bar = document.getElementById('inner-bar')
    bar.style.animation = 'none'
}

function Timer(props) {
    let timer_end = props.timer_end
    let time = props.time
    let run_timer = props.run_timer
    useEffect(_ => {
        if (!run_timer) {
            animation_off()
        } else {
            reset_animation()
            const id = setTimeout(_ => {
                timer_end(id)
            }, time)
            return _ => clearTimeout(id)
        }
    })
        

    return (
        <div id='outer-bar'>
            <div id='inner-bar'>
            </div>
        </div>
    )
}

export default Timer