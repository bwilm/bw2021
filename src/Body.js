import React from 'react'
import './Body.css'
import {Button} from '@material-ui/core'
import ReactTypingEffect from 'react-typing-effect';

function Body() {


    return (
        <div className="body">
            <div className="body_text">
                <div className="body_row">

                    <h1><ReactTypingEffect text="design." cursor=" "/></h1>
                    <h1><ReactTypingEffect typingDelay={3000} cursor=" " text="develop."/></h1>
                    <h1><ReactTypingEffect typingDelay={5000} cursor=" " text="deliver."/></h1>
   
                </div>
            </div>
            <div className="body_image">
                <Button>Sign in</Button>
            </div>
        </div>
    )
}

export default Body
