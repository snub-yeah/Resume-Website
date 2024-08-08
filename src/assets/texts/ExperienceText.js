import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TextBox.css';

const HomeText = () => {
    
    const navigate = useNavigate();
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const [showButtons, setShowButtons] = useState(false);
    const sentences = [
        "I am a sophomore at Oklahoma City University.",
        "My major is Computer Science with a minor in Cybersecurity.",
        "I am a computer science student at Oklahoma City University.",
    ];
    


    const handleRepeatClick = (event) => {
        event.stopPropagation();
        setShowButtons(false);
        setCurrentSentenceIndex(0);
    };

    const handleClick = () => {
        if (currentSentenceIndex < sentences.length - 1) {
            setCurrentSentenceIndex(currentSentenceIndex + 1);
        } else {
            setShowButtons(true);
        }
    };

    const handleAboutMeClick = (event) => {
        event.stopPropagation();
        navigate('/about-me');
    };

    const handleHomeClick = (event) => {
        event.stopPropagation();
        navigate('/');
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

    return (
        <div style={wrapperStyle} onClick={handleClick}>
            <div className='click-to-continue'>CLICK TO CONTINUE</div>
            <div style={containerStyle} className="text-container">
                {showButtons ? (
                    <div>
                        <button onClick={handleAboutMeClick}>1. About Me</button>
                        <button onClick={handleHomeClick}>2. Back to Home</button>
                        <button onClick={handleRepeatClick}>3. Could you repeat that?</button>
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