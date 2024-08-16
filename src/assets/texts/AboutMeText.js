import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TextBox.css';
import Dandy from '../images/dandy.gif';
import DandyNotTalking from '../images/dandy.webp';
import Border from '../images/border.webp';
import School from '../images/school.webp';


const HomeText = () => {
    
    const navigate = useNavigate();
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const [showButtons, setShowButtons] = useState(false);
    const sentences = [
        "I am a sophomore at Oklahoma City University.",
        "My major is Computer Science with a minor in Cybersecurity.",
        "I always like learning new information relating to my field.",
        "I also enjoy creating art, playing video games, and watching TV.",
    ];
    


    const handleRepeatClick = (event) => {
        event.stopPropagation();
        setShowButtons(false);
        //repeat the sentences and change the instructions
        setCurrentSentenceIndex(0);
        document.getElementById("instructions").innerHTML = "CLICK TO CONTINUE"
        document.getElementById("face").src = Dandy;
    };

    const handleClick = () => {
        if (currentSentenceIndex < sentences.length - 1) {
            setCurrentSentenceIndex(currentSentenceIndex + 1);
        } else {
            //when the user reaches the end of the sentences, show the buttons and switch the instructions
            setShowButtons(true);
            document.getElementById("instructions").innerHTML = "SELECT AN OPTION"
            document.getElementById("face").src = DandyNotTalking;
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
        width: '38vw', 
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
                        <button onClick={handleExperienceClick}>1. Experience</button> 
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
            <img id="face" src={Dandy} alt="Animated Portrait GIF" style={imageStyle} className="rotating-image" />
            <img src={School} alt="OCU Pixel Art" style={backgroundImageStyle} />
        </div>
    );
};

export default HomeText;