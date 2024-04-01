import React from 'react'
import './hero_sec_style.css'

export default function Hero_sec_slider() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade hero-slider">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="Images/slider-1.png" className="d-block w-100 img-hero " />
                        <div className='hero-slider-txt container'>
                            <h1 className='hero-sli-txt-h1'>Don't miss amazing <br /> grocery deals</h1>
                            <h3 className='hero-sli-txt-h3'>Sign up for daily newsletter</h3>
                            <input type="email" className='hero-sec-email' placeholder='Your Email address'/>
                            <button className='hero-sec-btn'>Subscribe</button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="Images/slider-2.png" className="d-block w-100 img-hero" />
                        <div className='hero-slider-txt container'>
                            <h1 className='hero-sli-txt-h1'>Fresh vegetables <br /> Big discount</h1>
                            <h3 className='hero-sli-txt-h3'>Save upto 50%off on your order</h3>
                            <input type="email" className='hero-sec-email' placeholder='Your Email address'/>
                            <button className='hero-sec-btn'>Subscribe</button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>
    )
}
