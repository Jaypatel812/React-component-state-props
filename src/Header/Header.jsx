import React from 'react'
import './Header.css'
import styled from 'styled-components'

function Header() {
    const Top_header_txt = styled.span`
    color: #3BB893;
    font-weight: bold;
    `


    return (
        <div>
            <section>
                <header>
                    <div className='header-bar-top'>
                        <div className='header-bar-top-menu'>
                            <ul className='header-bar-opt'>
                                <a href="#">About US</a>
                                <li className='bar-symbol'></li>
                                <a href="#">My Account</a>
                                <li className='bar-symbol'></li>
                                <a href="#">Wishlist</a>
                                <li className='bar-symbol'></li>
                                <a href="#">Order Tracking</a>
                            </ul>
                        </div>
                        <div>
                            <p className='text-top-bar'>Get Great Services at Up to 50% off <Top_header_txt>View Details</Top_header_txt> </p>
                        </div>
                        <div className='right-bar-menu'>
                            <div className="dropdown">
                                <ul className='header-bar-opt right-top-bar'>
                                    <p className='txt-sm'>Need help?Call Us: <Top_header_txt>+1800 900</Top_header_txt></p>
                                    <li className='bar-symbol'></li>
                                    <span className='txt-sm'>English <i className="fa-solid fa-angle-down angle-down"></i></span>
                                    <li className='bar-symbol'></li>
                                    <span className='txt-sm'>USD <i className="fa-solid fa-angle-down angle-down"></i></span>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                </header>
            </section>
        </div>
    )
}

export default Header