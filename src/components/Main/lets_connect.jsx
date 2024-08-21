import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { assets } from '../../assets/assets'; // Ensure you have the correct path to assets if needed

const Lets_connect = () => {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh', // Full viewport height
        overflow: 'hidden', // Prevent scrolling
    };

    const contentStyle = {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const iconStyle = {
        width: '50px',
        height: '50px',
        fontSize: '20px',
        borderRadius: '50%',
        color: '#000', // Default color (black)
        transition: 'color 0.3s ease', // Smooth transition for color change
    };

    const githubStyle = {
        color: '#ffffff', // Original GitHub color
    };

    const linkedinStyle = {
        color: '#0A66C2', // Original LinkedIn color
    };

    const mailStyle = {
        color: '#D44638', // Original Email color (Google)
    };

    const twitterStyle = {
        color: '#1DA1F2', // Original Twitter color
    };

    const phoneStyle = {
        color: '#25D366', // Original WhatsApp/Phone color (green)
    };

    return (
        <div className="content-page" style={containerStyle}>
            <Sidebar />
            <div className="content" style={contentStyle}>
                <div className="card text-center shadow-lg p-4" style={{ maxWidth: '500px', width: '100%' }}>
                    <div className="card-body">
                        <h4 className="card-title mb-4">Let's Connect</h4>
                        <h5>Big thanks for checking my portfolio!</h5>
                        <p className="mt-2">I would love to connect with you for any projects or opportunities. Feel free to reach out to me through any of the following platforms:</p>
                        <div className="d-flex flex-wrap justify-content-center gap-3 mt-4">
                            <a href="https://github.com/jayminrabari" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark rounded-circle d-flex align-items-center justify-content-center shadow-lg" style={{ ...iconStyle }}>
                                <i className="bi bi-github" style={githubStyle}></i>
                            </a>
                            <a href="https://www.linkedin.com/in/jayminrabari" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark rounded-circle d-flex align-items-center justify-content-center shadow-lg" style={{ ...iconStyle }}>
                                <i className="bi bi-linkedin" style={linkedinStyle}></i>
                            </a>
                            <a href="mailto:jayminrabari2000@gmail.com" className="btn btn-outline-dark rounded-circle d-flex align-items-center justify-content-center shadow-lg" style={{ ...iconStyle }}>
                                <i className="bi bi-envelope" style={mailStyle}></i>
                            </a>
                            <a href="https://twitter.com/jayminrabari07" target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark rounded-circle d-flex align-items-center justify-content-center shadow-lg" style={{ ...iconStyle }}>
                                <i className="bi bi-twitter" style={twitterStyle}></i>
                            </a>
                            <a href="tel:+918469530635" className="btn btn-outline-dark rounded-circle d-flex align-items-center justify-content-center shadow-lg" style={{ ...iconStyle }}>
                                <i className="bi bi-telephone" style={phoneStyle}></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Lets_connect;
