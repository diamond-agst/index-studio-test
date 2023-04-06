import React, {useEffect, useState} from "react";
import MainBlock from "../MainBlock";
import SkeletonPage from "../SkeletonPage";
import axios from "axios"
import EmptyPage from "../EmptyPage";
import arrowUp from "../../assets/images/arrowUp.svg";
import { Link } from "react-scroll";

const ListPage = ({items, setItems}) => {
  const [loadingSkeleton, setLoadingSkeleton] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [verPosition, setVerPosition] = useState(null)
  const [scrollPosition, setScrollPosition] = useState(0)

  window.addEventListener('scroll', function() {
    setScrollPosition(window.pageYOffset)
  });

  useEffect(() => {
      let horPosition = localStorage.getItem(`horPosition`);
      if(localStorage.getItem(`horPosition`)){
        setVerPosition(!JSON.parse(horPosition))
        setLoadingSkeleton(true)
      }else{
        setLoadingSkeleton(true)
      }
      axios.get("https://testguru.ru/frontend-test/api/v1/ads?page=1")
      .then(res => {
          setLoading(false)
          setItems(res.data.items)
      })
      .catch(err => {
        setError(true)
      })
  }, [])

  return (
    <div>
      {!error ? loadingSkeleton ? loading ?
        <SkeletonPage verPosition={verPosition}/>:
        <MainBlock setItems={setItems} items={items} setVerPosition={setVerPosition} verPosition={verPosition}/>:
        <div></div>
      :
      <EmptyPage/>}
      {
        scrollPosition > 100 && 
        <Link smooth={true} to="start">
          <div className="arrowUp">
            <img src={arrowUp}/>
            <p>Вверх</p>
          </div>
        </Link>
      }
    </div>
  );
}

export default ListPage;
