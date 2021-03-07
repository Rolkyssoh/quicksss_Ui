import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import './my-ads.styles.scss';

const MyAds = ({annonce_price, annonce_title, id, userAnnonceurId, history}) => {

    useEffect(() => {
        // console.log('recu: ', ads)
        console.log('Dans le Route de myAdvertisement', history)  
    }, [])
    

    return(
        <Link 
            to={{ 
                    pathname: `/annonce_detail/${id}`,
                    state: { userId: userAnnonceurId }
                }} 
            className="container"
        >
            <div className="image-div">
                image
            </div>
            <div className="title-div">
                {
                    annonce_price ? <span>{annonce_price}</span>
                    : <span>Prix non spécifié</span>
                }
                <span>{annonce_title}</span>
            </div>
            {/* My Ads */}
        </Link>
    )
};

export default MyAds;