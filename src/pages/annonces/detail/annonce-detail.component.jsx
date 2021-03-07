import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { AwesomeButton } from 'react-awesome-button';
import { DefaultButton } from 'office-ui-fabric-react';

import 'react-awesome-button/dist/themes/theme-blue.css';
import MyModal from '../../../components/Popup/modal.component';
import './annonce-detail.styles.scss';
import Axios from 'axios';
import { getAnnonceDetails } from '../../../redux/annonces/annonce.actions';
import CustomCard from '../../../components/custom-card/custom-card.component';



const AnnonceDetail = ({annoncesCollection, match, history, getAnnonceDetails, annDetails, location, currentUser}) => {
    // BASE_URL = 'http://localhost:3000';
    // const [count, setCount] = useState(0); 
    // const [seen, setSeen] = useState(false);
    const abortController = new AbortController();
    const [annonce, setAnnonce] = useState(null);
    const [annonceOwner, setAnnonceOwner] = useState(null);
    const [adMessages, setAdMessages] = useState(0)
   
    useEffect(() => {
        // console.log('valeur de history : ', match.params.id)
        // console.log('listeeee : ', annoncesCollection)
        // detailShwo()
        console.log('valeur de id annonce ', match.params.id);
        console.log('valeur reuççççeeeee ', location.state );
        console.log('le currentUser dans detail: ', currentUser)
        getAnnDetail(match.params.id);
        // msgCount(1, 'test@gmail.com')
    },[])

    const getAnnDetail = async (id) => { 
        try {
            await Axios.get(`http://localhost:3000/annonces/annonce/${id}`,{signal: abortController.signal})
                .then((res => {
                    console.log('responseeesss : ', res.data);
                    // this.props.setCurrentUser(res.data);
                    setAnnonce(res.data)
                    setAnnonceOwner(res.data.user)
                    getAnnonceDetails(res.data)
                } ))
                .catch((error) => console.log('errrroooooo', error.message))
            // this.setState({ email:'', password:'' })
        } catch(error) {
            console.log('erreur dans le try : ', error);
        }
    }

    //Renvoie le nombre de msg par annonce
    const msgCount = async (id, transmitter) => {
        await Axios.get(`http://localhost:3000/messages/${id}/${transmitter}`)
            .then((response) => {
                console.log('response du msgCount : ', response.data)
                setAdMessages(response.data);
            })
            .catch((error) => console.log('erreur dans msgCount : ', error.message))
    }

    // const detailShwo = () => {
    //     if(annoncesCollection) {
    //         const filteredAnnonces = annoncesCollection.filter(ann =>
    //             ann.annonce_id.toString().includes(match.params.id.toString())
    //           )
    //         setAnnonce(filteredAnnonces)
    //         console.log('resulllll : ', filteredAnnonces)
    //     } else {
    //         console.log('Rien a retourner')
    //     }
    // }

    const doChat = () => {
        if(currentUser && annonceOwner){
            // ici l'annonceur veux accéder au formulaire de creation de msg
            if(currentUser.infos.annonceur_id == annonceOwner.annonceur_id){
                history.push('/chat')
            } else {
                //ici il ce n'est plus l'annonceur
                if(annonce && annonceOwner){
                    msgCount(annonce.annonce_id, annonceOwner.email)
                } 
                if(currentUser) {
                    // 1-On vérifie si c'est le first msg que le currentUser envoie pour cette annonce
                    if(adMessages !=0) {
                        //ce n'est pas le first: ici on redirige vers le chat correspondant
                        history.push({
                            pathname: `/chat`,
                            state:{transmitterEmail: annonceOwner.email}
                        })
                    } else {
                        //ici c'est le first: on affiche le formulaire de creation
                        history.push({
                            pathname:'/messages/form',
                            state: {transmitterEmail: annonceOwner.email}
                        })
                    }
                    /*3-Si ce n'est pas le first msg on récupère l'email du currentUser et l'id de l'annonce
                    et on redirige vers le chat concerné*/

                    console.log('ici on auras d\'autres vérification...')
                } else {
                    //on redirige vers le formulaire de création de first msg
                    history.push({
                        pathname:'/messages/form',
                        state: {transmitterEmail: annonceOwner.email}
                    })
                } 
            }
        }
  
    }

    const doEdit = () => {
        console.log('Ediit annonce')
    }

    const doDelete = () => {
        console.log('Annoncde deleted!!');
    }

    return(
        <div className='container-detail'>
            <div className='panel'>
                {/* Tous les détails ici + image */}
                <div className='panel-header'>
                    <span>Annonce précédente</span>
                    <span>Résultats</span>
                    <span>Annonce Suivante</span>
                </div>
                <span className='divider'>Séparateur</span>
                { annonce
                    // {/* // console.log('tous les détails : ', detail) */}
                   && <div> 
                        <div className='caroussel'>
                            Carroussel
                        </div>
                        <span className='pointiller'>Nombre d'image</span>
                        <div className='infos'>
                            <div className="detail_one">
                                <span className="ann_price">{annonce.annonce_price}</span>
                                <span className="ann_title">{annonce.annonce_title}</span>
                                <div className="location">
                                    <span>{annonce.annonce_city}</span>
                                    <span>{annonce.time}</span>
                                </div>
                                <div className="inside">
                                    { annonce.surface_total && <span>{annonce.surface_total} m²</span> }
                                    {annonce.room_number && <span>chambre {annonce.room_number}</span>}
                                    {annonce.bathroom_number && <span>toilette {annonce.bathroom_number}</span>}
                                </div>
                            </div> 
                            <hr/>
                            <div className="detail_two">
                                <span>Type : {annonce.annonce_category},  {annonce.transaction_type}</span>
                                <span>Secteur: </span>
                                {/* <hr/> */}
                                <span>Salons: {annonce.livingroom_number}</span>
                                {annonce.age_of_good && <span>Âge du bien : {annonce.age_of_good}</span>}
                            </div>
                            <hr/>
                            <div className="detail_three">
                                <span className="__desc">Description</span>
                                <span>{annonce.annonce_text}</span>
                            </div>
                            
                        </div>
                        <div className='actions'>
                            {/* <button onClick={doChat}> */}
                                {/* <AwesomeButton type="secondary" size="large" >
                                    Chat
                                </AwesomeButton> */}
                                <div>
                                    <DefaultButton text="Chat" onClick={doChat} />
                                 </div>
                            {/* </button> */}
                            {/* { annonceOwner
                                && <MyModal texte={"Afficher Numéro"} popupContent={annonceOwner.tel}/>
                            } */}
                            { annonceOwner &&
                                <MyModal texte={"Afficher Numéro"} giveContent={annonceOwner.tel}/>
                            }
                        </div>
                    </ div>
                }
            </div>
            <div className='box'>
                <CustomCard ownerInfos={annonceOwner} action={doChat} client />
                
                { annonceOwner && location.state && location.state.userId === annonceOwner.annonceur_id &&
                    <CustomCard ownerInfos={annonceOwner} edit={doEdit} deleted={doDelete} manage />
                }
                {/* <div>Div client</div> */}
            </div>
        </div>
    )
};

const mapStateToProps = ({details, user}) => ({
    annDetails: details.annDetails,
    currentUser: user.currentUser
})
const mapDispathToProps = dispatch => ({
    // getAllAnnonce: annoncesCollection => dispatch(getAllAnnonce(annoncesCollection))
    getAnnonceDetails: details => dispatch(getAnnonceDetails(details))
});

export default connect(mapStateToProps, mapDispathToProps)(AnnonceDetail); 