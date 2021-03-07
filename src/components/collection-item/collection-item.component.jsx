import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './collection-item.styles.scss';
// const CollectionItem = ({id, name, price, imageUrl }) => (
const CollectionItem = ({
    id,
    annonce_title, 
    annonce_text,
    age_of_good, 
    annonce_adress,
    annonce_category,
    annonce_city,
    annonce_price,
    date,
    time,
    bathroom_number,
    floor_number,
    transaction_type,
    history,
    match,
    annoncesCollection
}) => {

    const d = new Date();
    const day = d.getDate() + "/" + (d.getMonth() + 1)+"/"+d.getFullYear();
    console.log('date du jour : ', annoncesCollection); 
 
return ( 
    // to=`${match.param}/annonce_detail` 

        <Link className='collection-item' to={{ 
            pathname: `/annonce_detail/${id}`}}
        >
            <div
                className='image'
                // style={{
                //     backgroundImage: `url(${imageUrl})`  
                // }}
            />
            <div className='collection-content'>
                <div className="content-left">
                    {/* <span className='name'>{name}</span> */}
                    <span className='details'>{annonce_title}</span>
                    <span className='details'>{annonce_city}</span>
                    <span className='details'>
                        {
                            day === date ? "Aujoud'hui" : `${date}`  
                        } {time}
                    </span>
                    <span className='details'>{transaction_type}</span>
                    <span className='details'>type annonce</span>
                </div>
                <div className="content-right">
                    <div className="price">{annonce_price} Dh</div>
                    <div className="icone">icone</div>
                </div>
            </div>
        </Link>
    )
};

const mapStateToProps = ({annonces}) => ({
    annoncesCollection: annonces.annoncesCollection
});

export default connect(mapStateToProps, null)(CollectionItem);