import React from 'react'
import '../styles/Box.css'
import LeftBox from './LeftBox'
import RightBox from './RightBox'

const Box = () => {
    return (
        <div className = 'box'>
            <LeftBox />
            <RightBox />
        </div>
    )
}

export default Box
