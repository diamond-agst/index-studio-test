import React from "react";
import "./styles.scss"
import ShowMore from "../../components/ShowMore";
import Header from "../../components/Header";
import HorizontalItem from "../../components/HorizontalItem";

const MainBlock = ({setItems, items, verPosition, setVerPosition}) => {

    return(
        <div>
            <Header items={items} setVerPosition={setVerPosition} verPosition={verPosition}/>
            {items &&
            
            <div className="App">
                <div className={verPosition ? "itemsRow" : "itemsRowHorizontal"}>
                    {items.map((item, index) => {
                        return(
                            <HorizontalItem verPosition={verPosition} item={item} index={index}/> 
                        )
                    })}
                </div>
        </div>}
        <ShowMore items={items} setItems={setItems}/>
        </div>
    )

}

export default MainBlock;