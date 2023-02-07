import React from 'react'
import Head from './Head'
import "./header.css"
import { Link } from "react-router-dom"
import { useState } from 'react'
const Header = () => {
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
                        <select
                        // style={{display: "flex", float:"right"}}
                        // className="form-select form-select-sm mb-0"
                        // aria-label="form-select-sm example"
                        // onChange={(e)=>selectedCountry(e.target.value)}
                        >
                            <option value="in">India</option>
                            <option value="ar">Argentina</option>
                            <option value="au">Australia</option>
                            <option value="at">Austria</option>
                            <option value="be">Belgium</option>
                            <option value="br">Brazil</option>
                            <option value="ca">Canada</option>
                            <option value="co">Colombia</option>
                            <option value="cu">Cuba</option>
                            <option value="eg">Egypt</option>
                            <option value="fr">France</option>
                            <option value="de">Germany</option>
                            <option value="il">Isreal</option>
                            <option value="it">Italy</option>
                            <option value="nz">New Zealand</option>
                            <option value="ng">Nigeria</option>
                            <option value="no">Norway</option>
                            <option value="rs">Russia</option>
                            <option value="sg">Singapore</option>
                            <option value="ch">Switzerland</option>
                            <option value="za">South Africa</option>
                            <option value="ae">UAE</option>
                            <option value="ua">Ukraine</option>
                            <option value="us">USA</option>
                            <option value="gb">UK</option>
                            <option value="ve">Venuzuela</option>
                        </select>

                        <button className='barIco' onClick={() => setNavbar(!navbar)}>
                            {navbar ? <i className='fa fa-times'></i> : <i className='fa fa-bars'></i>}
                        </button>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header