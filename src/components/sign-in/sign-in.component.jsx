import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import { setCurrentUser } from '../../redux/user/user.actions'; 


import './sign-in.styles.scss';

class SignIn extends React.Component {
    _isMounted = false;
    BASE_URL = 'http://localhost:3000'; 
    abortController = new AbortController();
    
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password:'',
        } 
    }
 
    handleSubmit = async (event) => {
        this._isMounted = true;
        event.preventDefault();
        const { email, password } = this.state;

        try {
            await Axios.post(`${this.BASE_URL}/auth/signin`, {email, password, signal: this.abortController.signal})
                .then((res => {
                    console.log('responseee : ', res.data.accessToken);
                    //ici on stock le current user dans redux
                    this.props.setCurrentUser(res.data);
                } ))
                .catch((error) => console.log('errrroooooo', error.message))
            this.setState({ email:'', password:'' })
        } catch(error) {
            console.log('erreur dans le try : ', error);
        }

        // try {
        //      await fetch(`${this.BASE_URLSignIn}/auth/signin`, {
        //         method:'POST',
        //         headers: {
        //             // 'Accept': 'application/json',
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             email: email,
        //             password: password
        //         })
        //     })     
        //     .then ((response) => {
        //         // if(response.ok) {
        //             console.log('response : ', response.json());
        //         // } else {
        //         //     throw Error(`Request reject with status ${response.status}`);
        //         // }
                
        //     })
        //     .catch((error) => {
        //         console.log('errrrroooooor : ', error);
        //     })      
        //     
        // } catch(error) {
        //     console.log('Erreur l\'or de l\'authentification : ', error)
        // }

        console.log('Valeur2 de email: ', email);
    }

    componentWillUnmount() {
        // this.abortController.abort();
        this._isMounted = false;
    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        console.log('Valeur de email: ', this.state.email);
 
        return(
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>  
                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email}
                        handleChange={this.handleChange} 
                        label="email"
                        required
                    />
                    {/* <label>Email</label> */}
                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="password"
                        required
                    />
                    {/* <label>Paswword</label> */}
                    <CustomButton type="submit">Sign in</CustomButton>
                </form>
            </div>
        );
    }
};

const mapDispathToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispathToProps)(SignIn);