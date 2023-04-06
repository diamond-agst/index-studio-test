import React from "react";
import "./styles.scss"
import Skeleton from '@mui/material/Skeleton';

const Header = ({items, setVerPosition, verPosition}) => {
    const setPosition = () => {
        setVerPosition(!verPosition)
        localStorage.setItem(`horPosition`, JSON.stringify(verPosition));
    }
    return(
        <div className="header" id="start">
            {
                !items ?
                <div>
                    <Skeleton style={{borderRadius: 8}} variant="rounded" width={84} height={39} />  
                </div>:
                <div className="headerBlock">
                    <svg className={!verPosition ? "active" : null} onClick={setPosition} width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1.1" y="1.1" width="11.8" height="11.8" rx="1.9" stroke={!verPosition ? "#C7C7C7" : "#00A0AB"} stroke-width="2.2"/>
                        <rect x="18.1" y="1.1" width="11.8" height="11.8" rx="1.9" stroke={!verPosition ? "#C7C7C7" : "#00A0AB"} stroke-width="2.2"/>
                        <rect x="1.1" y="18.1" width="11.8" height="11.8" rx="1.9" stroke={!verPosition ? "#C7C7C7" : "#00A0AB"} stroke-width="2.2"/>
                        <rect x="18.1" y="18.1" width="11.8" height="11.8" rx="1.9" stroke={!verPosition ? "#C7C7C7" : "#00A0AB"} stroke-width="2.2"/>
                    </svg>
                    <svg className={verPosition ? "active" : null} onClick={setPosition} width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1.1" y="18.1" width="28.8" height="11.8" rx="1.9" stroke={verPosition ? "#C7C7C7" : "#00A0AB"} stroke-width="2.2"/>
                        <rect x="1.1" y="1.1" width="28.8" height="11.8" rx="1.9" stroke={verPosition ? "#C7C7C7" : "#00A0AB"} stroke-width="2.2"/>
                    </svg>
                </div>
            }
            
        </div>
    )

}

export default Header;