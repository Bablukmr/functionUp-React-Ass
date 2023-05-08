import './Header.css'
import { CgClose, CgMenu,CgGlobeAlt,CgOrganisation } from "react-icons/cg";
import React, { useState } from "react";

export default function Header() {

    const [isMobile, setIsMobile] = useState(true)

    return (
        <>
            <nav>
                <div className='logo'>
                    <CgGlobeAlt className='icon'/>
               <CgOrganisation className='icon1'/>
                </div>
                <div className='menue-link'>
                    <ul className={isMobile ?'navbar':'menue-link-mobile'}>
                        <li>
                            <a href='/'>Home</a>
                        </li>
                        <li>
                            <a href='/about'>About</a>
                        </li>
                        <li>
                            <a href='/project' >Project</a>
                        </li>
                        <li>
                            <a href='/videos'>Videos</a>
                        </li>
                        <li>
                            <a href='contact'>Contact</a>
                        </li>
                        <button>login</button>
                    </ul>
                    <CgMenu className='menue' onClick={()=>(!isMobile)} />
                </div>

            </nav>

            <div className="hero-section">
                <div className="hero-content">
                    
                    <div className="hero-text">
                        <h1>We There</h1>
                        <h3>devever brilliant messages in the moment that truly define your brand.</h3>
                        <button className="hero-button">More</button>
                    </div>
                    <div className="hero-image">
                        <img src="https://images.unsplash.com/photo-1683222044051-bf429ee34d63?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNzZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="Hero" />
                    </div>
                </div>
            </div>

        </>
    )
}