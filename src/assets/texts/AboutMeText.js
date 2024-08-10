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
        "I really enjoy creating art and playing video games.",
    ];
    


    const handleRepeatClick = (event) => {
        event.stopPropagation();
        setShowButtons(false);
        //repeat the sentences and change the instructions
        setCurrentSentenceIndex(0);
        document.getElementById("instructions").innerHTML = "CLICK TO CONTINUE"
    };

    const handleClick = () => {
        if (currentSentenceIndex < sentences.length - 1) {
            setCurrentSentenceIndex(currentSentenceIndex + 1);
        } else {
            //when the user reaches the end of the sentences, show the buttons and switch the instructions
            setShowButtons(true);
            document.getElementById("instructions").innerHTML = "SELECT AN OPTION"
        }
    };

    const handleExperienceClick = (event) => {
        event.stopPropagation();
        navigate('/experience');
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
        zIndex: '1',
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
        zIndex: '2',
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
                        <button onClick={handleExperienceClick}>1. Experience</button>
                        <button onClick={handleContactClick}>2. Contact</button>
                        <button onClick={handleHomeClick}>3. Back to Home</button>
                        <button onClick={handleRepeatClick}>4. Could you repeat that?</button>
                    </div>
                ) : (
                    <p>{sentences[currentSentenceIndex]}</p>
                )}
            </div>
            <img src="/images/glasses.gif" alt="Animated Portrait GIF" style={imageStyle} className="rotating-image" />
        </div>
    );
};

export default HomeText;