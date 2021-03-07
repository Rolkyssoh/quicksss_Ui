import React, { useEffect } from 'react';
import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react';

import './custom-card.styles.scss';
import MyModal from '../Popup/modal.component';


const CustomCard = ({ manage, client, ownerInfos, action, edit, deleted}) => {

    useEffect(() => {
        console.log('dans le custom card : ', ownerInfos)
    })
    
    return(
        <div className="container-card">
            {   ownerInfos && client &&
                <div className="user-infos">
                    <span>icone</span>
                    <div className="user-details">
                        <span>{ownerInfos.name}</span>
                        <span>Membre depuis...</span>
                    </div>
                </div>
            }
            {/* <PrimaryButton text="Afficher numéro" className="num-button" /> */}

            {/* <div className="num-button"> */}
            {/* { ownerInfos &&
                <MyModal texte={"Afficher Numéro"} popupContent={ownerInfos.tel} iwidth />
            } */}
            {/* </div> */}
            { ownerInfos && client &&
                <MyModal texte={"Afficher Numéro"} giveContent={ownerInfos.tel} outMargin /> }

            { ownerInfos && client && <DefaultButton onClick={action} text="Chat" className="chat-button" /> }

            { ownerInfos && manage &&
              <DefaultButton text="Modifier annonce" className="edit-button" onClick={edit} />  }

            { ownerInfos && manage &&
              <DefaultButton text="Supprimer" className="delete-button" onClick={deleted} />  }
        </div>
    )
}

export default CustomCard;