import React from 'react'
import './hero_sec_style.css'
import styled from 'styled-components'


export default function Hero_cart_slider() {
    const Arrow_btn = styled.button`
    border:none;
    padding: 10px 15px;
    border-radius: 50%
    `

    const arr = [
        {
            id: "1",
            image: "Images/cat-1.png",
            title: "Vegetables",
            items: "72 items",
            bgcolor: "#FFF3FF"
        },
        {
            id: "2",
            image: "Images/cat-2.png",
            title: "Strawberry",
            items: "36 items",
            bgcolor: "#F2FCE4"
        },
        {
            id: "3",
            image: "Images/cat-3.png",
            title: "Snack",
            items: "89 items",
            bgcolor: "#FEEFEA"
        },
        {
            id: "4",
            image: "Images/cat-4.png",
            title: "Black plum",
            items: "123 items",
            bgcolor: "#FFFCEB"
        },
        {
            id: "5",
            image: "Images/cat-5.png",
            title: "Custard apple",
            items: "34 items",
            bgcolor: "#FEEFEA"
        },
        {
            id: "6",
            image: "Images/cat-9.png",
            title: "Red Apple",
            items: "52 items",
            bgcolor: "#ECFFEC"
        },
        {
            id: "7",
            image: "Images/cat-11.png",
            title: "Peach",
            items: "14 items",
            bgcolor: "#F2FCE4"
        },
        {
            id: "8",
            image: "Images/cat-12.png",
            title: "Kiwi",
            items: "22 items",
            bgcolor: "#FFFCEB"
        },
        {
            id: "9",
            image: "Images/cat-13.png",
            title: "Cake & Milk",
            items: "26 items",
            bgcolor: "#ECFFEC"
        },
        {
            id: "10",
            image: "Images/cat-14.png",
            title: "Coffe & Tea",
            items: "70 items",
            bgcolor: "#ECFFEC"
        },
        {
            id: "11",
            image: "Images/cat-15.png",
            title: "Headphone",
            items: "65 items",
            bgcolor: "#ECFFEC"
        }
    ]

    const StyledCard = styled.div`
        width : 225px;
        height : 200px;
        background-color : ${props => props.bg};
        padding : 15px;
        text-align : center;
        border-radius : 10px;

        & span{
            font-size : 20px;
        }
    `

    return (
        <div>
            <div className='hero-cart-txt'>
                <p className='hero-cate-title'>Featured Categories</p>
                <p className='hero-cate-dec'>Cake & Milk</p>
                <p className='hero-cate-dec'>Coffes & Teas</p>
                <p className='hero-cate-dec'>Pet Foods</p>
                <p className='hero-cate-dec'>Vegetables</p>
                <div className='hero-mini-slibtn'>
                    <span><Arrow_btn><i class="fa-solid fa-arrow-left"></i></Arrow_btn></span>
                    <span><Arrow_btn><i class="fa-solid fa-arrow-right"></i></Arrow_btn></span>
                </div>
            </div>

            <div className='hero-cart-slider d-flex gap-3 px-3 overflow-hidden'>
                {
                    arr.map(prod => (
                        <StyledCard key={prod.id} bg={prod.bgcolor}>
                            <img src={prod.image} />
                            <span>{[prod.title]}</span>
                            <p>{[prod.items]}</p>
                        </StyledCard>
                    ))
                }
            </div>
        </div>
    )
}
