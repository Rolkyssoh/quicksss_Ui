import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import EditInfos from '../../../components/edit/edit-informations/edit-infos.component';
import EditPwd from '../../../components/edit/edit-password/edit-pwd.component';
import MyAds from '../../../components/owner-ads/my-ads.component';

import './my-advertisement.styles.scss';

const openCity = (evt, cityName) => {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
  }

const MyAdvertisement = (props) => {
  const [myAds, setMyAds] = useState(null);
  const [userInfos, setUserInfos] = useState(null);

  useEffect(() => {
    console.log('Dans le useEffect!!!', props.currentUser.accessToken);
    
    console.log('ads reçuess : ', myAds)
    getMyAds()
  }, [])

  const getMyAds = async () => {
    try {
        await Axios.get(`http://localhost:3000/annonces/account`, {headers: { 'authorization': `Bearer ${ props.currentUser.accessToken}`}})
            .then((res => {
                console.log('Résultaatttt de myads : ', res.data);
                // this.props.setCurrentUser(res.data);
                setMyAds(res.data.userAnnonce) 
                setUserInfos(res.data.user) 
                // setAnnonce(res.data)
                // setAnnonceOwner(res.data.user)
                // getAnnonceDetails(res.data)
            } ))
            .catch((error) => console.log('errrroooooo', error.message))
        // this.setState({ email:'', password:'' })
    } catch(error) {
        console.log('erreur dans le try : ', error);
    }
}
    
    return(
        <div className="tab-container">                                                                               
            {/* <!-- Tab links --> */}
            <div className="tab">
              <button className="tablinks" onClick={(event) => openCity(event, 'Mes annonces')}>Mes annonces</button>
              <button className="tablinks" onClick={(event) =>openCity(event, 'Mes favoris')}>Paris</button>
              <button className="tablinks" onClick={(event) => openCity(event, 'Réglages')}>Réglages</button>
            </div>
            {/* <!-- Tab content --> */}
            <div id="Mes annonces" className="tabcontent">
              <div className="my-annonces">
                {/* { 
                  myAds && myAds.map (({annonce_id, ...restOfProps}) => {
                    // console.log('dans le map', ad) 
                    <MyAds key={annonce_id} {...restOfProps} />
                  }) 
                } */}
                {
                  // myAds && <div>Vous n'avez pas d'annonces publiées </div>
                  myAds !=null ? myAds.map(({annonce_id, ...theRestOfProps}) =>(
                    <MyAds key={annonce_id} id={annonce_id} {...theRestOfProps} />
                  )) : <div>Vous n'avez pas d'annonce publiées</div>
                }
              </div>
            </div>

            <div id="Mes favoris" className="tabcontent">
              <div className="">
                <h3>Mes favoris</h3>
                <p>Mes favoris is the capital of France.</p>
              </div>
            </div>

            <div id="Réglages" className="tabcontent">
              <div className="container-setting">
                <div className="infos">
                  {/* <span>Modifier vos Informations</span> */}
                  {/* <div>
                    Contenu ici
                  </div> */}
                  { userInfos && <EditInfos user={userInfos} token={props.currentUser.accessToken} /> }
                </div>
                <div className="password">
                  {/* <span>Modifier le mot de passe</span> */}
                  {/* <div>
                    Contenu ici
                  </div> */}
                  <EditPwd />
                </div>
              </div>
            </div>
        </div>
    )
};

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser
});

export default connect(mapStateToProps, null)(MyAdvertisement);