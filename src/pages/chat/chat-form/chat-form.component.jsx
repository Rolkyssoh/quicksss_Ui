import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import FormInput from '../../../components/form-input/form-input.component';
import { AwesomeButton } from 'react-awesome-button';

import './chat-form.styles.scss';
import "react-awesome-button/dist/styles.css";
import Axios from 'axios';
 
// class ChatForm extends React.Component {
const ChatForm = ({annDetails, history, location, match, currentUser}) => {
    const [name, setName] = useState('');
    const [ownerEmail, setOwnerEmail] = useState(location.state.transmitterEmail)
    const [email, setEmail] = useState('');
    const [content , setContent] = useState('');
    const [annonce, setAnnonce] = useState(null)
    const [annOwner, setAnnOwner] = useState(null)

    useEffect(() => {
        console.log('detail reçu : ', annDetails)
        if(currentUser){
            console.log('infos user reçu ici: ', currentUser.accessToken)
        }
        if(annDetails == null){
            // // ici on redirige vers la page d'acceuil
            history.push('/')
        } else {
            setAnnonce(annDetails)
            setAnnOwner(annDetails.user) 
        }

        if(currentUser){
            setEmail(currentUser.infos.email);
            setName(currentUser.infos.name)
        }
    }, [annDetails])

    const createChat = async () => {
        await Axios.post(`http://localhost:3000/chat/newchat`, {receiver: ownerEmail, transmitter: email})
            .then((response => {
                console.log('response du createChat :', response.data.id)
                if(response) {
                    createMessage(response.data.id)
                }
            }))
            .catch((error) => console.log('erreur lors du createChat : ', error.message))
    } 

    const createMessage = async (chatId) => {
        await Axios.post(`http://localhost:3000/messages/new`, {content, chatId, annonceAnnonceId: annDetails.annonce_id})
        .then((res => {
            console.log('responseee de createMessage: ', res);
        } ))
        .catch((error) => console.log('errrroooooo', error.message))
    }

    const getChatByTransmitter = async () => {
        await Axios.get(`http://localhost:3000/chat/${email}`)
            .then((response =>{
                console.log('response de getChatByTransmitter : ', response.data.id)
                if(response.data!="") {
                    /*ici l'email du transmitter existe déjà dans un chat donc on en crée plus un
                        on ajoute simplement son nouvea message
                    */
                    createMessage(response.data.id)
                    console.log('data différent de null')

                    //ici là si le user est connecté on le redirige vers le chat Box
                    if(currentUser){
                        history.push('/chat')
                    }
                } else {
                    //ici l'email du transmitter n'existe pas encore donc on en crée un pour lui
                    createChat()
                    console.log('data est nullllll')
                }
            }))
            .catch((error) => console.log('error getting transmittor : ', error.message))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        getChatByTransmitter()
    }

    const nameChange = (event) => {
        const { value } = event.target;
        setName(value);
    }

    const ownerEmailChange = (event) => {
        const { value } = event.target;
        setOwnerEmail(value)
    }

    const emailChange = (event) => {
        const { value } = event.target;
        setEmail(value);
    }

    const contentChange = (event) => {
        const { value } = event.target;
        setContent(value);
    }

    // const handleChange = (event) => {
    //     const { value, name } = event.target;
    //     // this.setState({ [name]: value });
    // }

    return (
        <div className="container-chat">
            <div className="form">
                { annOwner && <span className="intitulate">Envoyer un message à {annOwner.name} </span> }
                <form onSubmit={handleSubmit}>
                    <FormInput
                        name="name"
                        type="text"
                        label="Nom"
                        value={name}
                        handleChange={nameChange}
                        required
                    />
                    <FormInput
                        name="owner"
                        type="hidden"
                        // label="Owner"
                        value={ownerEmail}
                        handleChange={ownerEmailChange}
                        required
                    />
                    <FormInput 
                        name="email"
                        type="email" 
                        label="Email"
                        value={email}
                        handleChange={emailChange}
                        required
                        { ...currentUser && {disabled:true} }
                    />
                    <label className="textarea-label">
                        Message
                        <textarea  
                            className="textarea"
                            name="content"
                            value={content}
                            onChange={contentChange}
                            rows="5"
                        />
                    </label>
                    {/* <button type="submit"> */}
                        <div>
                            <AwesomeButton type="primary submit" size="large" >
                                Envoyer message
                            </AwesomeButton>
                        </div>
                    {/* </button> */}
                </form>
            </div>
            {annonce && <div className="annonce-resume">
                <span className="intitulate">Résumé de l'annonce</span>
                <span>{annonce.annonce_title}</span>
                <hr className="divide"/>
                <span>{annonce.annonce_text}</span>
                <hr className="divide"/>
                <span>{annonce.annonce_city}</span> 
            </div>}
        </div>
    )
};

const mapStateToProps = ({details, user}) => ({
    annDetails: details.details,
    currentUser: user.currentUser
})

export default connect(mapStateToProps)(ChatForm) 