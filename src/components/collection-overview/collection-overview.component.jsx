import React from 'react';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { selectCollections } from '../../redux/listing/listing.selectors';
import CollectionItem from '../collection-item/collection-item.component';

import  './collection-overview.styles.scss';

const CollectionOverview = ({ annonces,annoncesCollection }) => {
    const d = new Date();
    console.log('Dans le collection overView:', annonces)
    console.log('Venant de redux : ', annoncesCollection)
    console.log('heureeeee: ', d.getDate() + "/" + (d.getMonth() + 1)+"/"+d.getFullYear() + " " + d.getHours()+":"+d.getMinutes())

    return (

        <div className='collections-overview'>
            <div className="collection-preview">
                { annonces.length > 0 && <h1 className="title">Titre</h1>} 
                <div className='preview'>
                    {   annonces.length > 0 ?
                        annonces.map(({annonce_id, ...otherCollectionProps}) =>(
                        //  <CollectionPreview key={annonce_id} {...otherCollectionProps} />
                         <CollectionItem key={annonce_id} id={annonce_id} {...otherCollectionProps} />
                     )) : 

                     <div>Pas d'annonce pour cette catégorie</div>
                    }
                </div>
            </div>
        </div>
    )
}

// const mapStateToProps = createStructuredSelector({
//     collections: selectCollections
// });
const mapStateToProps = ({annonces}) => ({
    annoncesCollection: annonces.annoncesCollection
})

export default connect(mapStateToProps)(CollectionOverview);