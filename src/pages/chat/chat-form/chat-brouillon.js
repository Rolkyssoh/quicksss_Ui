import React from 'react';
import { connect } from 'react-redux';
import FormInput from '../../../components/form-input/form-input.component';
import { AwesomeButton } from 'react-awesome-button';

import './chat-form.styles.scss';
 
class ChatForm extends React.Component {
// const ChatForm = ({annDetails}) => {
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [description , setDescription] = useState('');
    // const [annonce, setAnnonce] = useState(null)
    // const [annOwner, setAnnOwner] = useState(null)
     constructor(){ 
         super();

        this.state = {
            name:'',
            email:'',
            description:'',
            annonce: null,
            annOwner: null,
        }
    }

    componentDidMount() {
        this.setState({annonce: this.props.annDetails, annOwner:this.props.annDetails.user})
    }
    // useEffect(() => {
    //     console.log('detail reçu : ', annDetails)

    //     setAnnonce(annDetails)
    //     setAnnOwner(annDetails.user)
    // }, [annDetails])

    handleSubmit = (event) => {
        event.preventDefault();
    }

    // const handleChangeDesc = (event) => {
    //     this.setState({ description: event.target.value});
    // }

    // const nameChange = (event) => {
    //     const { value } = event.target;
    //     setName(value);
    // }

    // const emailChange = (event) => {
    //     const { value } = event.target;
    //     setEmail(value);
    // }

    // const descriptionChange = (event) => {
    //     const { value } = event.target;
    //     setDescription(value);
    // }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value });
    }

    render() {     
        const { annonce, annOwner } = this.state

        return (
            <div className="container-chat">
                <div className="form">
                    { annOwner && <span className="intitulate">Envoyer un message à {annOwner.name} </span> }
                    <form onSubmit={this.handleSubmit}>
                        <FormInput
                            name="name"
                            type="text"
                            label="Nom"
                            value={this.state.name}
                            handleChange={this.handleChange}
                            required
                        />
                        {/* <FormInput
                            name="owner"
                            type="hidden"
                            label="Owner"
                            value={ annOwner.email }
                            // handleChange={nameChange}
                            required
                        /> */}
                        <FormInput 
                            name="email"
                            type="email" 
                            label="Email"
                            value={this.state.email}
                            handleChange={this.handleChange}
                            required
                        />
                        <label className="textarea-label">
                            Description
                            <textarea  
                                className="textarea"
                                name="description"
                                value={this.state.description}
                                onChange={this.handleChange}
                                rows="5"
                            />
                        </label>
                        {/* <button type="submit"> */}
                            <AwesomeButton type="primary submit" size="large" >
                                Envoyer message
                            </AwesomeButton>
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
    }
};

const mapStateToProps = ({details}) => ({
    annDetails: details.details
})

export default connect(mapStateToProps)(ChatForm)