import React from 'react';
import Popup from 'reactjs-popup';
import { AwesomeButton } from 'react-awesome-button';

import './modal.styles.scss'; 
import { PrimaryButton } from '@fluentui/react';
 
const MyModal1 = ({texte, popupContent, iwidth}) => (
//   <Popup trigger={<button> Trigger</button>} position="right center">
//     <div>Popup content here !!</div>
//   </Popup>
    <Popup
        trigger={open => ( 
            // <button className="button">
            //     <AwesomeButton type="primary" size="large" >{texte}</AwesomeButton>    
            // </button>
                // {/* <AwesomeButton type="primary" size="large" >{texte}</AwesomeButton> */}
            
            <PrimaryButton text={texte} className={ iwidth && "num-button" } />
        )}
        position="top center"
        closeOnDocumentClick
        >
            <span className="popup-content">{popupContent}</span>
    </Popup>
);
export default MyModal1;