import React from 'react'
import '../styles/Box.css'
import {FaAngleDoubleRight} from 'react-icons/fa'

const InfoBox = ({headingTwo, headingThree, headingFour, texts }) => {
    return (
        <div className = 'Info-box'>
            <p className="heading__2">{headingTwo}</p>
            <p className="heading__3">{headingThree}</p>
            <p className="heading__4">{headingFour}</p>
            {texts.map((text, index) => 
                <p key={index} className="text"><FaAngleDoubleRight className='icon' /> {text}</p>
            )}
        </div>
    )
}

export default InfoBox
