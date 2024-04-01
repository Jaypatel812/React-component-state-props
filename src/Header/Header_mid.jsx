import React from 'react'
import './Header.css'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export default function Header_mid() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="">
                <span className='ms-3 me-5'><img src="/Images/logo.svg" alt="" width={200} /></span>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <div className='d-flex search-box-navmid-bar'>
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="All Categories" id="collapsible-nav-dropdown" className='bold'>
                                <NavDropdown.Item href="#action/3.1">Milks and Dairies</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Wines & Drinks</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Clothing And Beauty</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Fresh Seafood</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.5">Fast food</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.6">Fresh Fruit</NavDropdown.Item>
                            </NavDropdown>
                            <li className='bar-sign'></li>
                            <input type="text" placeholder='Search For More...' className='Search-more ms-3' />
                            <span className="fa-solid fa-magnifying-glass search-icon"></span>
                        </Nav>
                    </Navbar.Collapse>
                </div>
                <div className='d-flex'>
                    <div>
                        <p className='position-relative mt-3 d-flex' >
                            <span className="fa-solid fa-arrows-spin fa-2xl mt-3 ms-5"></span>
                            <span className="position-absolute top-25 start-50 translate-middle badge rounded-pill noti-badge">
                                5
                            </span>
                            <span className='ms-1 p-2'>Compare </span>
                        </p>
                    </div>
                    <div>
                        <p classname className='position-relative mt-3 d-flex'>
                            <span className="fa-regular fa-heart fa-2xl mt-3  ms-4"></span>
                            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill noti-badge">
                                6
                            </span>
                            <span className='p-2'>Wishlist </span> </p>
                    </div>
                    <div>
                        <p classname className='position-relative mt-3 d-flex'>
                            <span className="fa-solid fa-cart-shopping fa-2xl mt-3 ms-3"></span>
                            <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill noti-badge">
                                2
                            </span>
                            <span className='ms-1 p-2'>Cart </span> </p>
                    </div>
                    <div>
                        <p classname className='mt-3 d-flex'>
                            <span className="fa-regular fa-user fa-2xl mt-3 ms-3"></span>  <span className='ms-1 p-2'>Account </span> </p>
                    </div>

                </div>
            </Navbar>
            <hr className='mb-0'/>
        </div>
    )
}
