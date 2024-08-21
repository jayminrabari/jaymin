import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { assets } from '../../assets/assets';

const Resume = () => {
    return (
        <div className="content-page">
            <Sidebar />
            <div className="content">
                <div className="container-fluid">
                    {/* <div className="row">
                        <div className="col-12">
                            <div className="page-title-box">
                                <h4 className="page-title">Resume</h4>
                            </div>
                        </div>
                    </div> */}
                    <div className="row justify-content-center">
                        <div className="col-12 col-lg-10">
                            <div className="card shadow-lg" style={{ borderRadius: '10px', overflow: 'hidden' }}>
                                <div className="card-body p-2">
                                    <div className="text-center">
                                        <a 
                                            href="./assets/images/resume.pdf"
                                            download="Resume_Jaymin_Rabari.pdf"
                                            className="tooltip-wrapper"
                                            data-tooltip="Download Resume"
                                        >
                                            <img 
                                                src={assets.resume}
                                                alt="Resume" 
                                                className="img-fluid"
                                                style={{ maxWidth: '100%', height: 'auto' }}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Resume;
