import React from 'react'
import Header from './Header/Header'
import Header_mid from './Header/Header_mid'
import Header_bottom from './Header/Header_bottom'
import Hero_sec_slider from './Hero_section/Hero_sec_slider'
import Hero_cart_slider from './Hero_section/Hero_cart_slider'

export default function Min() {
  return (
    <div className="App">
        <Header/>
        <Header_mid/>
        <Header_bottom/>
        <Hero_sec_slider/>
        <Hero_cart_slider/>
    </div>
  )
}