import './Header.css'
import { CgClose, CgMenu,CgGlobeAlt,CgOrganisation } from "react-icons/cg";
import React, { useState } from "react";
import { Link } from 'react-router-dom';

export default function Header() {

    const [isMobile, setIsMobile] = useState(true)
function handaleMobile(){
setIsMobile(false)
}
function handleClose(){
    setIsMobile(true)

}
    return (
        <>
            <nav>
                <div className='logo'>
                    <CgGlobeAlt className='icon'/>
               <CgOrganisation className='icon1'/>
                </div>
                <div className='menue-link'>
                    
                    <ul className={isMobile ?'navbar':'menue-link-mobile'}>
                    <CgClose onClick={handleClose} className='closebox'/>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>AboutUs</Link>
                        </li>
                        <li>
                            <Link to='/register' >Register</Link>
                        </li>
                        <li>
                            <Link to='/videos'>Videos</Link>
                        </li>
                        <li>
                            <Link to='contact'>Contact</Link>
                        </li>
                     <button >  <Link to='/login' style={{color:'black'}}> login</Link></button>
                    </ul>
                    <CgMenu className='menue' onClick={handaleMobile} />
                </div>

            </nav>

            
        </>
    )
}