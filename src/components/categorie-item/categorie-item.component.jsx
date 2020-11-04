import React from 'react';
import { withRouter } from 'react-router-dom';

import './categorie-item.styles.scss';

const CategorieItem = ({title, imageUrl, match, history, linkUrl}) => {
console.log(match)

return (
    <div
    style={{ 
        backgroundImage: `url(${imageUrl})`
    }} 
    // className={`${size} categorie-item`}
    className="categorie-item"
    onClick={()=> history.push(`${match.url}${linkUrl}`) }
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
};

export default withRouter(CategorieItem);