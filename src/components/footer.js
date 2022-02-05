import React from 'react';
import {FaDiscord, FiFacebook, FiInstagram, FiTwitter} from "react-icons/all";
const Footer = () => {
    return (
        <footer className='footer'>
            <div className="center-container">
                <div className="grid justify-btw">
                    <div className="grid-item1_3 footer--item">
                        <h5 className="fine--header">
                            LINKS
                        </h5>
                        <ul className='footer--list'>
                            <li>HOME</li>
                            <li>EVENTS</li>
                            <li>CREATORS</li>
                            <li>BUSINESSES</li>
                        </ul>
                    </div>
                    <div className="grid-item1_3 footer--item">
                        <h5 className="fine--header">
                            LINKS
                        </h5>
                        <ul className='footer--list'>
                            <li>ABOUT</li>
                            <li>SIGN UP</li>
                            <li>LOGIN</li>
                            <li>CONTACT</li>
                        </ul>
                    </div>
                    <div className="grid-item1_3 footer--item">
                        <p className="fine--header">
                            CONTACT
                        </p>
                        <ul className='footer--list display_flex flexDR'>
                            <li><FaDiscord className='smSocial'/></li>
                            <li><FiInstagram className='smSocial'/></li>
                            <li><FiFacebook  className='smSocial'/></li>
                            <li><FiTwitter  className='smSocial'/></li>

                        </ul>
                        <p className={'h5'}>info@rdland.io</p>
                    </div>
                </div>
                <p className='company'>2021 COPYRIGHT RDL</p>
            </div>

        </footer>
    );
};

export default Footer;