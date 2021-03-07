import Axios from 'axios';
import React, { useEffect, useState} from 'react';
import CustomButton from '../../custom-button/custom-button.component';
import FormInput from '../../form-input/form-input.component';

import './edit-infos.styles.scss';


const EditInfos = (props) => {
    const [name, setName] = useState(props.user.name);
    const [tel, setTel] = useState(props.user.tel);
    const [email, setEmail] = useState(props.user.email);
    const [city, setCity] = useState('');

    useEffect(() => {
        console.log('Dans le edit infos: ', props)
    })

    const handleSubmit = async () => {
        console.log('submitted!')
        // await Axios.post(
        //         `http://localhost:3000/${props.user.annonceur_id}/editinfos`, 
        //         {name, tel},
        //         {headers: { 'authorization': `Bearer ${ props.token}`}}
        //     )
        //     .then((resp) => {
        //         console.log('result update : ', resp)
        //     })
        //     .catch((error) => console.log('Errorr update user infos', error.message))
    }

    const nameChanged = (val) => {
        setName(val)
    }

    const telChanged = (val) => {
        setTel(val)
    }
    const emailChanged = (val) => {
        setEmail(val)
    }

    return(
        <div className="container-edi-infos">
             <span>Modifier vos Informations</span>
             <form onSubmit={handleSubmit}>  
                <FormInput 
                    name="nom" 
                    type="text" 
                    value={name}
                    handleChange={(e) => nameChanged(e.target.value)} 
                    label="Nom"
                    required
                    // noWidth 
                />
                {/* <label>Email</label> */}
                <FormInput 
                    name="tel" 
                    type="text" 
                    value={tel}
                    handleChange={(e) => telChanged(e.target.value)}
                    label="Téléphone"
                    required
                    // noWidth
                />

                <FormInput 
                    name="email" 
                    type="email" 
                    value={email}
                    handleChange={e => emailChanged(e.target.value)}
                    label="Email"
                    required
                    disabled
                    // noWidth
                />

                {/* <FormInput 
                    name="ville" 
                    type="text" 
                    value={city}
                    handleChange={e => setCity(e.target.value)}
                    label="Ville"
                    required
                    // noWidth
                /> */}
                {/* <label>Paswword</label> */}

                {/* <CustomButton type="submit">Sign in</CustomButton> */}
                <CustomButton type="submit" >Valider</CustomButton>
            </form>
        </div>
    )
};

export default EditInfos