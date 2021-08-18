import React from 'react'
import '../styles/Box.css'
import TextAnimation from './TextAnimation'
import InfoBox from './InfoBox'

const RightBox = () => {
    return (
        <div className = 'right__box'>
            <div className="profile-box">
                <div className="heading__2">objective</div>
                <p className="text"><TextAnimation /></p>
            </div>
            <InfoBox 
                headingTwo = 'experince'
                headingThree = 'front-end intern'
                headingFour = 'zuri internship | 2021'
                texts = {
                    ['Colaborated with designers, back-end and front-end developers to build and released a responsive website',
                    'Maintaining and organizing workflow using project management tool like Github.',
                    'Monitoring webpages for troubleshooting issues.'
         ]
                }
                />
            <InfoBox 
            headingTwo = 'soft skills'
            texts = {
                ['Attention to details', 'Good communication', 'Problem Solving',
            'Creative and proactive', 'Team work'
            ]
            }
            />
            <div className="skill-box">
                <p className="heading__2">technical skills</p>
                <div className="skills">
                    <p className="skill"><span>Html</span></p>
                    <p className="skill"><span>CSS</span></p>
                    <p className="skill"><span>Bootstrap</span></p>
                    <p className="skill"><span>SASS</span></p>
                    <p className="skill"><span>javascript</span></p>
                    <p className="skill"><span>React</span></p>
                    <p className="skill"><span>git</span></p>
                    <p className="skill"><span>webpack</span></p>
                </div>
            </div>
        </div>

    )
}

export default RightBox
