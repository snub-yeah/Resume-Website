import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TextBox.css';

const HomeText = () => {
    
    const navigate = useNavigate();
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const [showButtons, setShowButtons] = useState(false);
    const sentences = [
        "Welcome to my portfolio site!",
        "My name is Luke Wilson.",
        "I am a computer science student at Oklahoma City University.",
        "What do you want to hear about?"
    ];
    


    const handleRepeatClick = (event) => {
        event.stopPropagation();
        setShowButtons(false);
        setCurrentSentenceIndex(0);
        document.getElementById("instructions").innerHTML = "CLICK TO CONTINUE"
    };

    const handleClick = () => {
        if (currentSentenceIndex < sentences.length - 1) {
            setCurrentSentenceIndex(currentSentenceIndex + 1);
        } else {
            setShowButtons(true);
            document.getElementById("instructions").innerHTML = "SELECT AN OPTION"
        }
    };

    const handleAboutMeClick = (event) => {
        event.stopPropagation();
        navigate('/about-me');
    };

    const handleExperienceClick = (event) => {
        event.stopPropagation();
        navigate('/experience');
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
            <div id="instructions" className='click-to-continue'>CLICK TO CONTINUE</div>
            <div style={containerStyle} className="text-container">
                {showButtons ? (
                    <div>
                        <button onClick={handleAboutMeClick}>1. About Me</button>
                        <button onClick={handleExperienceClick}>2. Experience</button>
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