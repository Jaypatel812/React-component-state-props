import React from 'react'
import Dropdown from 'react-bootstrap/Dropdown';
import styled from 'styled-components'



export default function Header_bottom() {

    const MyButton = styled.button`
    border:none;
    border-radius:10px;
    padding:10px 20px;
    background:none;
    color:black;
    display:block;
    margin:0;
    &:hover{
            color:#3BB893;}`


    const Buttons = () => {
        var arr = ["Deals", "Home", "About", "Shop", "Vendors", "Megamenu", "Blog", "Pages", "Contact"]
        return arr.map((val) => {
            return <MyButton>{val} <i className="fa-solid fa-angle-down angle-down"></i></MyButton>
        })
    };

    return (
        <div>
            <div className='container-fluid d-flex'>
                <Dropdown>
                    <Dropdown.Toggle variant="" id="dropdown-basic" className='btn-cate-all mt-3'>
                        <i class="fa-solid fa-square-plus"></i> Browse All Categoties
                    </Dropdown.Toggle>
                </Dropdown>
                <div className='d-flex mt-2'>
                    <Buttons></Buttons>
                </div>
                <div className='cus-support d-flex'>
                    <div className='headpone-logo mt-3'>
                        <i class="fa-solid fa-headphones fa-2xl"></i>
                    </div>
                    <div className='cus-num-support'>
                        <span className='tel-num'>1900-888</span><br />
                        <span className='tel-support'>24/7 Support Center</span>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}
