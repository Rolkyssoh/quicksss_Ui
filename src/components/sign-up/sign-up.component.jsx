import Axios from 'axios';
import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';

import './sign-up.styles.scss';

class SignUp extends React.Component {
    BASE_URL = 'http://localhost:3000';
    abortController = new AbortController()

    constructor() { 
        super();

        this.state = {
            name:'',
            tel:'',
            email:'',
            password:'',
        }
    }

    componentWillUnmount() {
        this.abortController.abort() 
    }
 
    handleSubmit = async event => {
        event.preventDefault();
        const { name, tel, email, password } = this.state;
        console.log(name, tel, email, password )
        await Axios.post(`${this.BASE_URL}/auth/signup`, { name, tel, email, password, signal: this.abortController.signal})
            .then(res => {
                console.log('User added : ', res)
            })
            .catch((error) => console.log('error in signUp : ', error.message))
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='sign-up'>
                <h2 className='title'>I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='name'
                        label='Nom'
                        value={this.state.name}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput
                        type='text'
                        name='tel'
                        label='Téléphone'
                        value={this.state.tel}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        type='email'
                        name='email'
                        label='email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        type='password'
                        name='password'
                        label='Mot de passe'
                        value={this.state.password}
                        handleChange={this.handleChange}
                    />
                    <CustomButton  type='submit'>SIGN UP</CustomButton>
                </form> 
            </div>
        );
    }
};

export default SignUp;