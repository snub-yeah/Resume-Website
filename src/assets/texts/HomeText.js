import React from "react";
import './TextBox.css';

const HomeText = () => {
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
        height: '100vh'
    };

    return (
        <div style={wrapperStyle}>
            <div style={containerStyle}>
                <p>M. Bison Missle Inbound!</p>
            </div>
        </div>
    )
}

export default HomeText;