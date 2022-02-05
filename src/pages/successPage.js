import React from 'react';
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import GradientCard from "../components/gradientCard";
import {FaDiscord, FiCheck, FiFacebook, FiInstagram, FiTwitter} from "react-icons/all";
import {useLocation} from "react-router-dom";

const MessagePage = () => {
    const location = useLocation();
    return (
        <div>
            <Navigation/>
            <GradientCard>
                <div className="center-container-form">
                    <h1 className='h1 centerText'>

                        <span>{location?.state?.msg}</span>

                    </h1>
                    <ul className='footer--list display_flex flexDR'>
                        <li><FaDiscord className='smSocial'/></li>
                        <li><FiInstagram className='smSocial'/></li>
                        <li><FiFacebook  className='smSocial'/></li>
                        <li><FiTwitter  className='smSocial'/></li>

                    </ul>
                </div>
            </GradientCard>
            <Footer/>
        </div>
    );
};

export default MessagePage;