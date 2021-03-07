import React from 'react';
import { withRouter } from 'react-router-dom';

import './categorie-item.styles.scss';

// const CategorieItem = ({title, imageUrl, match, history, linkUrl}) =>
class CategorieItem extends React.Component {

componentDidMount() {  
    // this.getAnnonceByCat();
    // console.log('le match : ', this.props) 
} 


render(){
    const { title, imageUrl, match, history} = this.props
    console.log('le match ici \'est ' ,match)
 
    return (
        <div
        style={{
            backgroundImage: `url(${imageUrl})`
        }}
        // className={`${size} categorie-item`} 
        className="categorie-item"
        onClick={() => history.push(`/listing${match.url}${title}`)}
        // onClick={()=> history.push(`${match.url}${linkUrl}`) }
        // onClick={this.getAnnonceByCat}
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
}

};

export default withRouter(CategorieItem);