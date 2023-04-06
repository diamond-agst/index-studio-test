import React from "react";
import "./styles.scss"
import Header from "../../components/Header";
import SkeletonItem from "../../components/SkeletonItem";
import ShowMore from "../../components/ShowMore";

const SkeletonPage = ({verPosition}) => {
    return(
        <div>
            <Header/>
            <div className="mainContent">
                <div className={verPosition ? "skeletonRow" : "skeletonRowHorizontal"}>
                    <SkeletonItem verPosition={verPosition}/>
                    <SkeletonItem verPosition={verPosition}/>
                    <SkeletonItem verPosition={verPosition}/>
                    <SkeletonItem verPosition={verPosition}/>
                    <SkeletonItem verPosition={verPosition}/>
                    <SkeletonItem verPosition={verPosition}/>
                    <SkeletonItem verPosition={verPosition}/>
                    <SkeletonItem verPosition={verPosition}/>
                    <SkeletonItem verPosition={verPosition}/>
                    <SkeletonItem verPosition={verPosition}/>
                    <SkeletonItem verPosition={verPosition}/>
                    <SkeletonItem verPosition={verPosition}/>
                    <SkeletonItem verPosition={verPosition}/>
                    <SkeletonItem verPosition={verPosition}/>
                    <SkeletonItem verPosition={verPosition}/>
                    <SkeletonItem verPosition={verPosition}/>
                    <SkeletonItem verPosition={verPosition}/>
                    <SkeletonItem verPosition={verPosition}/>
                    <SkeletonItem verPosition={verPosition}/>
                    <SkeletonItem verPosition={verPosition}/>
                </div>
            </div>
            <ShowMore/>
        </div>
    )
}

export default SkeletonPage