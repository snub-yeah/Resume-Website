import React, { useState } from 'react';
import './TextBox.css';

const HomeText = () => {
    const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
    const sentences = [
        "Welcome to my site...",
        "I'm a CS student...",
        "...",
        "...kinda"
    ];

    const handleClick = () => {
        setCurrentSentenceIndex((prevIndex) => (prevIndex + 1) % sentences.length);
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
        top: '10%',
        transform: 'translateY(-0%)',
        width: '600px', 
        height: 'auto'
    };

    return (
        <div style={wrapperStyle} onClick={handleClick}>
            <div className='click-to-continue'>CLICK TO CONTINUE</div>
            <div style={containerStyle} className="text-container">
                <p>{sentences[currentSentenceIndex]}</p>
            </div>
            <img src="/images/richard.gif" alt="Animated GIF" style={imageStyle} className="rotating-image" />
        </div>
    );
};

export default HomeText;