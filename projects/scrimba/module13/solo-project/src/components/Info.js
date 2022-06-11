import React from 'react';
import profileImg from '../images/profile-img.jpg';

export default function Info() {
    return (
        <header>
            <h1 className='info--name'>Greg Johns</h1>
            <h2 className='info--title'>Web3 Developer</h2>
            <p className='info--website'>gjohns.xyz</p>
            <img className='info--pfp' src={profileImg}/>

            <div className='info--buttons'>
                <a className='btn btn-primary' href="mailto:gregjohns@fastmail.com"><i className="fa-solid fa-envelope"></i> Email</a>
                <a className='btn btn-secondary' href="https://linkedin.com/in/greg-johns" target="_blank"><i className="fa-brands fa-linkedin"></i> LinkedIn</a>
            </div>
        </header>
    )
}