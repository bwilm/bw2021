import React from 'react'
import './Header.css'
import {Avatar} from '@material-ui/core'

function Header() {
    return (
        <div className="header">
            <div className="header_left">
                <h2>brandonKyle</h2>
            </div>
            <div className="header_right">
                <label>username</label>
                <Avatar />
            </div>
        </div>
    )
}

export default Header
