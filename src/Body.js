import React from 'react'
import './Body.css'
import {Button} from '@material-ui/core'
import Typist from 'react-typist';
function Body() {


    return (
        <div className="body">
            <div className="body_text">
                <div className="body_row">


                    <Typist>
                        <h1>design.</h1>
                    <Typist.Delay ms={500} />
                        <h1>develop.</h1>
                    <Typist.Delay ms={500} />
                        <h1>deploy.</h1>
                    </Typist>
                    
   
                </div>
            </div>
            <div className="body_image">
                <Button>Sign in</Button>
            </div>
        </div>
    )
}

export default Body
