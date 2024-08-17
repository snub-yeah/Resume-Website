import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TextBox.css';
import Monocle from '../images/monocle.gif';
import MonocleNotTalking from '../images/monocle.webp';
import Border from '../images/border.webp';
import Experience from '../images/experience.webp';

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
        document.getElementById("face").src = Monocle;
    };

    const handleClick = () => {
        if (currentSentenceIndex < sentences.length - 1) {
            setCurrentSentenceIndex(currentSentenceIndex + 1);
        } else {
            setShowButtons(true);
            document.getElementById("instructions").innerHTML = "SELECT AN OPTION"
            document.getElementById("face").src = MonocleNotTalking;
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
        width: '68vw', 
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
                        <button onClick={handleAboutMeClick}>1. About Me</button>
                        </div> <div>
                        <button onClick={handleContactClick}>2. Contact</button>
                        </div> <div>
                        <button onClick={handleHomeClick}>3. Back to Home</button>
                        </div> <div>
                        <button onClick={handleRepeatClick}>4. Could you repeat that?</button>
                        </div>
                    </div>
                ) : (
                    <p>{sentences[currentSentenceIndex]}</p>
                )}
            </div>
            <img id="face" src={Monocle} alt="Animated GIF" style={imageStyle} className="rotating-image" />
            <img src={Experience} alt="Cubicle Pixel Art" style={backgroundImageStyle} />
        </div>
    );
};

export default HomeText;