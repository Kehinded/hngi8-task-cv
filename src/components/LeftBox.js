import React from 'react'
import '../styles/Box.css'
import UserImg from '../images/kehindedUser.png'
import {FaAngleDoubleRight} from 'react-icons/fa'

const LeftBox = () => {
    return (
        <div className = 'left__box'>
            <div className="actual-box">
            <p className="heading__1">ayeni kehinde</p>
            <p className="heading__3">front-end developer</p>
            <figure className="img-box"><img src={UserImg} alt="" className="img" /></figure>
            <div className="contact-box">
                <p className="heading__2">contact</p>
                <ul className="list">
                    <li className="item">
                        <div className="title"> <FaAngleDoubleRight className='icon' /> phone number:</div>
                        <p className="text">08162631944</p>
                    </li>
                    <li className="item">
                        <div className="title">  <FaAngleDoubleRight className='icon' /> email address:</div>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ayenikehinded@gmail.com" rel='noreferrer' target = '_blank'  className="text link">ayenikehinded@gmail.com</a >
                    </li>
                    <li className="item">
                        <div className="title">  <FaAngleDoubleRight className='icon' /> linkdlen:</div>
                        <a href = 'https://www.linkedin.com/in/kehinde-ayeni-4a2660196/' rel='noreferrer' target = '_blank' className="text link">Kehinde Ayeni</a>
                    </li>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default LeftBox
