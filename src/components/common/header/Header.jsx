import React from 'react'
import Head from './Head'
import Dropdown from '../../asa/Dropdown'
import "./header.css"
import { Link } from "react-router-dom"
import { useState } from 'react'
const Header = ({handleChangeCountry}) => {
    const [navbar, setNavbar] = useState(false)
    return (
        <>
            <Head />
            <header>
                <div className="container paddingSmall">
                    <nav className=''>
                        <ul className={navbar ? "navbar" : 'flex'} onClick={() => setNavbar(false)}>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/Culture'>Culture</Link></li>
                            <li><Link to='/Politics'>Politics</Link></li>
                            <li><Link to='/Memes'>Memes</Link></li>
                            <li><Link to='/Sports'>Sports</Link></li>
                            <li><Link to='/Boxed'>Boxed</Link></li>
                            <li><Link to='/Reviews'>Reviews</Link></li>
                        </ul>
                        <Dropdown className="float-end" 
                handleChangeCountry={handleChangeCountry}/>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header