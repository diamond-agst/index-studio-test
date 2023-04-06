import React, {useState, useEffect} from "react"
import "./styles.scss"
import Slider from "react-slick"

const HorizontalItem = ({item, index, verPosition}) => {
    const [like, setLike] = useState(false)
    let year = item.createdAt.slice(2, 4)
    let month = item.createdAt.slice(5, 7)
    let day = item.createdAt.slice(8, 10)
    let time = item.createdAt.slice(11, 16)

    useEffect(() => {
        let likeLocal = localStorage.getItem(`like${index}`);
        if(likeLocal){
            setLike(JSON.parse(likeLocal))
        }
    }, [])

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

    const onLike = () => {
        setLike(!like)
        localStorage.setItem(`like${index}`, JSON.stringify(!like));
    }
    console.log(item)
                return(
                    <>
{
                        verPosition ?
                        <div className="itemVertical" style={{position: "relative"}}>
<div onClick={() => window.location.href=`/${item.id}`} className="itemBlock">
                        <div className="itemImg">
                            <div className="imgItemBlock">
                                <Slider {...settings}>
                                    <div className="sliderItem">
                                        <img src={"https://source.unsplash.com/random"}/>
                                    </div>
                                    <div className="sliderItem">
                                    <img src={"https://source.unsplash.com/random"}/>
                                    </div>
                                    <div className="sliderItem">
                                    <img src={"https://source.unsplash.com/random"}/>
                                    </div>
                                    <div className="sliderItem">
                                    <img src={"https://source.unsplash.com/random"}/>
                                    </div>
                                </Slider>
                            </div>
                            {item.seen && <div className="seenText">Просмотрено</div>}
                        </div>
                        <div className="infoItemBlock">
                            <div className="priceInfo">
                                <p>{item.price}</p>
                                
                            </div>
                            <div className="nameItem">
                                <p>{item.title}</p>
                            </div>
                            <div className="optionInfo">
                                <p>{item.address}</p>
                                <p>{`${day}.${month}.${year}, ${time}`}</p>
                            </div>
                        </div>
                    </div> 
                    {like ?
                                <svg onClick={onLike} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.4321 9.21218C18.5975 11.5152 12.8243 16.697 10.0421 19C7.60767 16.8889 2.42577 12.206 1.17376 10.3636C-0.391238 8.06056 -0.391267 4.60649 1.17375 2.3033C2.30214 0.642681 4.3037 0.000281163 5.86877 0C7.64008 -0.000318142 10.0421 2.30302 10.0421 2.30302C10.0421 2.30302 13.6938 -1.15134 17.3455 1.15179C20.2456 2.98093 20.4755 6.33341 19.4321 9.21218Z" fill="#00A0AB"/>
                                </svg>
                                :
                                <svg className="activeLike" onClick={onLike} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.4321 9.21218C18.5975 11.5152 12.8243 16.697 10.0421 19C7.60767 16.8889 2.42577 12.206 1.17376 10.3636C-0.391238 8.06056 -0.391267 4.60649 1.17375 2.3033C2.30214 0.642681 4.3037 0.000281163 5.86877 0C7.64008 -0.000318142 10.0421 2.30302 10.0421 2.30302C10.0421 2.30302 13.6938 -1.15134 17.3455 1.15179C20.2456 2.98093 20.4755 6.33341 19.4321 9.21218Z" fill="#C7C7C7"/>
                                </svg>
                                }
                        </div>
                        :
                    <div className="itemHorizontal" style={{position: "relative", width: 472}}>
<div onClick={() => window.location.href=`/${item.id}`} className="itemBlockHorizontal">
                    <div className="itemImgHorizontal">
                        <div className="imgItemBlockHorizontal">
                            <Slider {...settings}>
                                <div className="sliderItemHorizontal">
                                <img src={"https://source.unsplash.com/random"}/>
                                </div>
                                <div className="sliderItemHorizontal">
                                <img src={"https://source.unsplash.com/random"}/>
                                </div>
                                <div className="sliderItemHorizontal">
                                <img src={"https://source.unsplash.com/random"}/>
                                </div>
                                <div className="sliderItemHorizontal">
                                <img src={"https://source.unsplash.com/random"}/>
                                </div>
                            </Slider>
                        </div>
                        {item.seen && <div className="seenTextHorizontal">Просмотрено</div>}
                    </div>
                    <div className="infoItemBlockHorizontal">
                        <div className="priceInfoHorizontal">
                            <p>{item.price} ₽</p>
                            
                            
                        </div>
                        <div className="nameItemHorizontal">
                            <p>{item.title}</p>
                        </div>
                        <div className="optionInfoHorizontal">
                            <p>{item.address}</p>
                            <p>{`${day}.${month}.${year}, ${time}`}</p>
                        </div>
                    </div>
                </div>
                {like ?
                            <svg onClick={onLike} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.4321 9.21218C18.5975 11.5152 12.8243 16.697 10.0421 19C7.60767 16.8889 2.42577 12.206 1.17376 10.3636C-0.391238 8.06056 -0.391267 4.60649 1.17375 2.3033C2.30214 0.642681 4.3037 0.000281163 5.86877 0C7.64008 -0.000318142 10.0421 2.30302 10.0421 2.30302C10.0421 2.30302 13.6938 -1.15134 17.3455 1.15179C20.2456 2.98093 20.4755 6.33341 19.4321 9.21218Z" fill="#00A0AB"/>
                            </svg>
                            :
                            <svg className="activeLike" onClick={onLike} width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M19.4321 9.21218C18.5975 11.5152 12.8243 16.697 10.0421 19C7.60767 16.8889 2.42577 12.206 1.17376 10.3636C-0.391238 8.06056 -0.391267 4.60649 1.17375 2.3033C2.30214 0.642681 4.3037 0.000281163 5.86877 0C7.64008 -0.000318142 10.0421 2.30302 10.0421 2.30302C10.0421 2.30302 13.6938 -1.15134 17.3455 1.15179C20.2456 2.98093 20.4755 6.33341 19.4321 9.21218Z" fill="#C7C7C7"/>
                            </svg>
                            }
                    </div>
                    
                    }
                    </>
                    
                    
                )
}

export default HorizontalItem;