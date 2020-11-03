import React from 'react';

import './categorie-item.styles.scss';

const CategorieItem = ({title, imageUrl}) => (
    <div
        style={{ 
            backgroundImage: `url(${imageUrl})`
        }} 
        // className={`${size} categorie-item`}
        className="categorie-item"
    >
        {/* <div
            className="background-image"
            style={{ 
                backgroundImage: `url(${imageUrl})`
            }}  
        /> */}
        <div className="content">
            <span className="title">{title.toUpperCase()}</span>
            <span className="subtitle">Détails</span>
        </div>
    </div>
);

export default CategorieItem;