import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/listing/listing.selectors';

import './category-collection.styles.scss';

const CategoryCollectionPage = ({collection}) =>{ 
    console.log('match:',collection);
    const { title, items } = collection;
    return (
        <div className='category-collection'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {
                    items.map(item => <CollectionItem key={item.id} item={item} />)
                }
            </div>
        </div>
    )
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CategoryCollectionPage);