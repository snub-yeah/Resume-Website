import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TextBox.css';
import Resume from './Resume.pdf';
import Mail from '../images/mail.gif';
import MailNotTalking from '../images/mail.webp';
import Border from '../images/border.webp';
import Contact from '../images/contact.webp';

const HomeText = () => {
    
    const navigate = useNavigate();
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const [showButtons, setShowButtons] = useState(false);
    const sentences = [
        "Which contact method would you prefer?",
    ];
    


    const handleHomeClick = (event) => {
        event.stopPropagation();
        navigate('/');
    };

    const handleClick = () => {
        if (currentSentenceIndex < sentences.length - 1) {
            setCurrentSentenceIndex(currentSentenceIndex + 1);
        } else {
            setShowButtons(true);
            document.getElementById("instructions").innerHTML = "SELECT AN OPTION"
            document.getElementById("face").src = MailNotTalking;
        }
    };

    const handleResumeClick = (event) => {
        event.stopPropagation();
        window.open(Resume, '_blank');
    };


    

    const containerStyle = {
        width: '100%',
        backgroundColor: '#000000', 
        padding: '20px',
        textAlign: 'center',
        alignSelf: 'flex-end'
    };

    const wrapperStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        height: '100vh',
        position: 'relative'
    };

    const imageStyle = {
        position: 'absolute',
        right: '0',
        top: '0%',
        transform: 'translateY(-0%)',
        width: '40vw', 
        height: 'auto'
    };


    const gradientStyle = {
        position: 'absolute',
        right: '0',
        top: '0%',
        zIndex: '-1',
        transform: 'translateY(-0%)',
        width: '65vw', 
        height: 'auto'
    };

    const backgroundImageStyle = {
        position: 'absolute',
        right: '0',
        left:'0',
        top: '0%',
        transform: 'translateY(-0%)',
        width: '72vw', 
        zIndex: '-2',
        height: 'auto'
    };


    return (
        <div style={wrapperStyle} onClick={handleClick}>
            <img src={Border} alt="Animated Portrait GIF" style={gradientStyle}/>
            <div id="instructions" className='click-to-continue'>CLICK TO CONTINUE</div>
            <div style={containerStyle} className="text-container">
                {showButtons ? (
                    <div>
                        <div>
                        <button onClick={handleResumeClick}>1. Resume</button>
                        </div> <div>
                        <a href="https://github.com/snub-yeah" target='_blank' rel='noreferrer'>2. Github</a>
                        </div> <div>
                        <a href="https://www.linkedin.com/in/luke-wilson-8259452a1/" target='_blank' rel='noreferrer'>3. LinkedIn</a>
                        </div> <div>
                        <button onClick={handleHomeClick}>4. Back to Home</button>
                        </div>
                    </div>
                ) : (
                    <p>{sentences[currentSentenceIndex]}</p>
                )}
            </div>
            <img id="face" src={Mail} alt="Animated GIF" style={imageStyle} className="rotating-image" />
            <img src={Contact} alt="Mail pixel art" style={backgroundImageStyle}/>
        </div>
    );
};

export default HomeText;