import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TextBox.css';
import Monocle from '../images/monocle.gif';
import Gradient from '../images/gradient.gif';

const HomeText = () => {
    
    const navigate = useNavigate();
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const [showButtons, setShowButtons] = useState(false);
    const sentences = [
        "I placed in the 90th percentile for the Spring 2024 NCL game.",
        "Some of my projects include this website and a drawing application.",
        "This website was created with React. The art was created using Aseprite.",
        "The drawing application was created using Java and JavaFX.",
        "It features variable brush sizes, an eraser... ",
        "...a fill tool, and an undo button.",
        "More information about my projects can be found on the contact page.",
        "Information is available on either my github or resume."
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

    const handleHomeClick = (event) => {
        event.stopPropagation();
        navigate('/');
    };

    const handleContactClick = (event) => {
        event.stopPropagation();
        navigate('/contact');
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
            <img src={Gradient} alt="Animated Portrait GIF" style={gradientStyle}/>
            <div id="instructions" className='click-to-continue'>CLICK TO CONTINUE</div>
            <div style={containerStyle} className="text-container">
                {showButtons ? (
                    <div>
                        <button onClick={handleAboutMeClick}>1. About Me</button>
                        <button onClick={handleContactClick}>2. Contact</button>
                        <button onClick={handleHomeClick}>3. Back to Home</button>
                        <button onClick={handleRepeatClick}>4. Could you repeat that?</button>
                    </div>
                ) : (
                    <p>{sentences[currentSentenceIndex]}</p>
                )}
            </div>
            <img src={Monocle} alt="Animated GIF" style={imageStyle} className="rotating-image" />
        </div>
    );
};

export default HomeText;