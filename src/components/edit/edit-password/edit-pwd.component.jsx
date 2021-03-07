import React, { useState } from 'react';
import CustomButton from '../../custom-button/custom-button.component';
import FormInput from '../../form-input/form-input.component';

import './edit-pwd.styles.scss';

const EditPwd = () => {
    const [current, setCurrent] = useState('')
    const [newPwd, setNewPwd] = useState('')
    const [confirm, setConfirm] = useState('')

    const handleSubmit =() => {
        console.log('submitted!')
    }

    return(
        <div className="container-edit-pwd">
            <span>Modifier le mot de passe</span>
             <form onSubmit={handleSubmit}>  
                <FormInput 
                    name="current" 
                    type="password" 
                    value={current}
                    handleChange={(e) => setCurrent(e.target.value)} 
                    label="Actuel mot de passe"
                    required
                />
                {/* <label>Email</label> */}
                <FormInput 
                    name="new" 
                    type="password" 
                    value={newPwd}
                    handleChange={(e) => setNewPwd(e.target.value)}
                    label="Nouveau mot de passe"
                    required
                />

                <FormInput 
                    name="confirm" 
                    type="password" 
                    value={confirm}
                    handleChange={e => setConfirm(e.target.value)}
                    label="Confirmer mot de passe"
                    required
                />

                <CustomButton type="submit" >Valider</CustomButton>

            </form>
        </div>
    )
}

export default EditPwd;