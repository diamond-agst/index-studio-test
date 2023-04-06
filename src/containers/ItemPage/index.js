import React, { useEffect, useState } from "react";
import axios from "axios"
import Slider from "react-slick"

const ItemPage = () => {
    const [item, setItem] = useState()

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: null,
        prevArrow: null,
        autoplay: true,
        autoplaySpeed: 2000
    };


    useEffect(() => {
        axios.get(`https://testguru.ru/frontend-test/api/v1/items/${window.location.pathname.slice(1)}`)
        .then(res => {
            setItem(res.data)
        })
    }, [])

    console.log(item)

    let year = item && item.createdAt.slice(2, 4)
    let month = item && item.createdAt.slice(5, 7)
    let day = item && item.createdAt.slice(8, 10)
    let time = item && item.createdAt.slice(11, 16)

    return(
        <div className="itemAbout">
            <div className="itemAboutBlock">
              <div className="itemImage">
                <Slider {...settings}>
                    <div className="itemImage">
                        <img src={"https://source.unsplash.com/random"}/>
                    </div>
                    <div className="itemImage">
                        <img src={"https://source.unsplash.com/random"}/>
                    </div>
                    <div className="itemImage">
                        <img src={"https://source.unsplash.com/random"}/>
                    </div>
                    <div className="itemImage">
                        <img src={"https://source.unsplash.com/random"}/>
                    </div>
                </Slider>
                </div>
                {item && 
                <div className="itemAboutTextBlock">
                    <div>
                        <div className="itemAboutTitle">
                            <h1>{item.title}</h1>
                            <p>{item.price} ₽</p>
                        </div>
                        <div className="itemAboutText">
                            <p>{item.about}</p>
                        </div>  
                    </div>
                    <div className="itemAboutFooter">
                        <p>{item.address}</p>
                        <p>{`${day}.${month}.${year}, ${time}`}</p>
                    </div>
                </div>
                }  
            </div>
            
        </div>
    )

}

export default ItemPage;