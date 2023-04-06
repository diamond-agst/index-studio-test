import React from "react";
import "./styles.scss"
import Skeleton from '@mui/material/Skeleton';

const SkeletonItem = ({verPosition}) => {
    return(
        <div>
            {verPosition ? 
            <div className="skeletonContainer">
            <div className="imgSkeleton">
                <Skeleton variant="rounded" width={224} height={260} />
                <Skeleton variant="text" sx={{ fontSize: '1rem', bgcolor: '#F8F8F8' }} width={56} height={8} className="imgTextSkeleton"/>
            </div>
            <div className="textSkeleton">
                <div className="headingSkeleton">
                <Skeleton variant="rounded" sx={{ bgcolor: '#EAEAEA' }} width={166} height={25} />  
                <Skeleton variant="rounded" sx={{ bgcolor: '#EAEAEA' }} width={25} height={25} />
                </div>
                <div className="subtextSkeleton">
                    <Skeleton variant="rounded" sx={{ bgcolor: '#EAEAEA' }} height={16} /> 
                    <Skeleton variant="rounded" sx={{ bgcolor: '#EAEAEA' }} height={16} />   
                </div>
                
            </div>
        </div>:
        <div className="skeletonContainerHorizontal">
        <div className="imgSkeletonHorizontal">
            <Skeleton variant="rounded" width={156} height={134} />
            <Skeleton variant="text" sx={{ fontSize: '1rem', bgcolor: '#F8F8F8' }} width={56} height={8} className="imgTextSkeletonHorizontal"/>
        </div>
        <div className="textSkeletonHorizontal">
            <div className="headingSkeletonHorizontal">
            <Skeleton variant="rounded" sx={{ bgcolor: '#EAEAEA' }} width={256} height={25} />  
            <Skeleton variant="rounded" sx={{ bgcolor: '#EAEAEA' }} width={25} height={25} />
            </div>
            <Skeleton className="secondSkeleton" variant="rounded" sx={{ bgcolor: '#EAEAEA' }} width={292} height={16} /> 
            <Skeleton variant="rounded" sx={{ bgcolor: '#EAEAEA' }} width={116} height={16} /> 
            <div className="subtextSkeletonHorizontal">
                <Skeleton variant="rounded" sx={{ bgcolor: '#EAEAEA' }} width={177} height={16} /> 
                <Skeleton variant="rounded" sx={{ bgcolor: '#EAEAEA' }} width={107} height={16} />   
            </div>
            
        </div>
    </div>
        }
        </div>
        
    )
}

export default SkeletonItem;