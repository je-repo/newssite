import React from 'react';
import Facebook from '../assets/images/facebook.png';
import Instagram from '../assets/images/instagram.png';
import LinkedIn from '../assets/images/linkedin.png';
import Tiktok from '../assets/images/tik-tok.png';
import YouTube from '../assets/images/youtube.png';

import './Footer.css';


// footer with dummy links, -social media icons and crediting free assets used

function Footer() {

    return (
        <>
            <footer className='footer'>
                <div className='footer-left-container'>
                    <ul className='footer-left-list'>
                        <li>About</li>
                        <li>Help</li>
                        <li>Contact Us</li>
                        <li>Careers</li>
                    </ul>
                </div>
                <div className='footer-middle-container'>
                    <ul className='footer-middle-list'>
                        <li>Privacy & Cookie Policy</li>
                        <li>Licensing</li>
                        <li>Cookie Setting</li>
                        <li>Site Map</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>
                <div className='footer-right-container'>
                    <ul className='footer-right-list'>
                        <li>
                            <img src={Facebook} alt='facebook-icon'></img>
                        </li>
                        <li>
                            <img src={Instagram} alt='instagram-icon'></img>
                        </li>
                        <li>
                            <img src={YouTube} alt='youtube-icon'></img>
                        </li>
                        <li>
                            <img src={LinkedIn} alt='linkedin-icon'></img>
                        </li>
                        <li>
                            <img src={Tiktok} alt='tiktok-icon'></img>
                        </li>
                    </ul>
                    <div className='assets-attribution'>
                        <a href="https://www.freepik.com/free-vector/illustrationn-megaphone-monochrome-style-isolated-white-background_9648301.htm#fromView=search&page=2&position=19&uuid=1ea4c065-2507-4bd7-bfcb-fe7430eb6f0f">Megaphone by macrovector on Freepik</a>
                        <a href="https://www.flaticon.com/free-icons" title="social media icons">Social media icons by Freepik - Flaticon</a>
                    </div>
                </div>
            </footer>
        </>
    );
}


export default Footer;