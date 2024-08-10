import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TextBox.css';
import Resume from './Resume.pdf';

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
        width: '600px', 
        height: 'auto'
    };

    const gradientStyle = {
        position: 'absolute',
        right: '0',
        top: '0%',
        zIndex: '-1',
        transform: 'translateY(-0%)',
        width: '950px', 
        height: 'auto'
    };

    return (
        <div style={wrapperStyle} onClick={handleClick}>
            <img src="/images/gradient.gif" alt="Animated Portrait GIF" style={gradientStyle}/>
            <div id="instructions" className='click-to-continue'>CLICK TO CONTINUE</div>
            <div style={containerStyle} className="text-container">
                {showButtons ? (
                    <div>
                        <button onClick={handleResumeClick}>1. Resume</button>
                        <a href="https://github.com/snub-yeah" target='_blank' rel='noreferrer'>2. Github</a>
                        <a href="https://www.linkedin.com/in/luke-wilson-8259452a1/" target='_blank' rel='noreferrer'>3. LinkedIn</a>
                        <button onClick={handleHomeClick}>4. Back to Home</button>
                    </div>
                ) : (
                    <p>{sentences[currentSentenceIndex]}</p>
                )}
            </div>
            <img src="/images/richard.gif" alt="Animated GIF" style={imageStyle} className="rotating-image" />
        </div>
    );
};

export default HomeText;