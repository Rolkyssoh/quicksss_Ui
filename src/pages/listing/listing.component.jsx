import React from 'react';
import Axios from 'axios';
import { connect } from 'react-redux'; 
// import { Route } from 'react-router-dom';
import { getAllAnnonce } from '../../redux/annonces/annonce.actions'
 
import './listing.styles.scss';

import CollectionOverview from '../../components/collection-overview/collection-overview.component';
// import CategoryCollectionPage from '../category-collection/category-collection.component';


// console.log('ListingName : ', props.match);

// const ListingPage = ({ match}) => (

//     <div className='listing-page'>
//         <Route exact path={`${match.path}`} component={CollectionOverview} />
//         <Route path={`${match.path}/:collectionId`} component={CategoryCollectionPage} />
//     </div>
// ); 

class ListingPage extends React.Component {
    BASE_URL = 'http://localhost:3000';

    constructor() {
        super();
 
        this.state = {
            category:'',
            annonces:null,  
            hasError: false,
        }

    }

    componentDidMount() {
        console.log('Param reçu', this.props.match.params)
        this.setState({ category: this.props.match.params.categorieTitle }, (() =>{
            this.getAnnonceByCat()
        })) 

        
    }

    getAnnonceByCat = async () => {
        const { category } = this.state

        console.log('la categoriiiie : ', `${this.BASE_URL}/annonces?annonce_category=${category.toLowerCase()}`)
        await Axios.get(`${this.BASE_URL}/annonces?annonce_category=${category.toLowerCase()}`)
            .then(response => {
                console.log('All annonces : ', response)
                this.setState({ annonces: response.data })
                this.props.getAllAnnonce(response.data);
                // history.push(`/listing${match.url}${title}`) 
            })
            .catch((error) => console.log('Error for have annonces : ', error))
    }

    render() {
        console.log('Contenu de annonce: ', this.state.annonces)
        return(
            <div className='listing-page'>
                {/* <Route exact path={`${this.props.match.path}`} component={CollectionOverview} /> */}
                {/* <Route path={`${this.props.match.path}/:collectionId`} component={CategoryCollectionPage} /> */}
                {this.state.annonces !==null && <CollectionOverview annonces={this.state.annonces} />}
                {/* {
                    this.state.annonces !=null ? <CollectionOverview annonces={this.state.annonces} /> : null
                } */}
                <div className="premium">  
                </div>
            </div>
        )
    }
}


const mapDispathToProps = dispatch => ({
    getAllAnnonce: annoncesCollection => dispatch(getAllAnnonce(annoncesCollection))
});

export default connect(null, mapDispathToProps)(ListingPage);