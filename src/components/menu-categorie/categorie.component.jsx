import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCategoriesSections } from '../../redux/categories/categories.selectors';

import CategorieItem from '../categorie-item/categorie-item.component';

import './categorie.styles.scss'; 

const Categorie = ({sections}) =>(
    <div className="categorie">  
        {
            sections.map(({ title, imageUrl, id, linkUrl}) => ( 
                <CategorieItem key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl} />
            ))
        }
    </div> 
);

const mapStateToProps = createStructuredSelector({
    sections: selectCategoriesSections
});

export default connect(mapStateToProps)(Categorie)