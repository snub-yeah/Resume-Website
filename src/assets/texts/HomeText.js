import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TextBox.css';
import Glasses from '../images/glasses.gif';
import GlassesNotTalking from '../images/glasses.webp';
import Border from '../images/border.webp';

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
        document.getElementById("face").src = Glasses;
    };

    const handleClick = () => {
        if (currentSentenceIndex < sentences.length - 1) {
            setCurrentSentenceIndex(currentSentenceIndex + 1);
        } else {
            setShowButtons(true);
            document.getElementById("instructions").innerHTML = "SELECT AN OPTION"
            document.getElementById("face").src = GlassesNotTalking;
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
                        <button onClick={handleExperienceClick}>2. Experience</button>
                        </div> <div>
                        <button onClick={handleContactClick}>3. Contact</button>
                        </div> <div>
                        <button onClick={handleRepeatClick}>4. Could you repeat that?</button>
                        </div>
                    </div>
                ) : (
                    <p>{sentences[currentSentenceIndex]}</p>
                )}
            </div>
            <img id="face" src={Glasses} alt="Animated Portrait GIF" style={imageStyle} className="rotating-image" />
        </div>
    );
};

export default HomeText;