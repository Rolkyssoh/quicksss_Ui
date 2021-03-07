import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux'; 

import CustomButton from '../../../components/custom-button/custom-button.component';
import FormInput from '../../../components/form-input/form-input.component';
import FormSelect from '../../../components/form-select/form-select.component';

import './new-annonce.styles.scss';

class NewAnnonce extends React.Component {
    BASE_URL = 'http://localhost:3000';
    abortController = new AbortController()

    constructor(props) {
        super(props);

        this.state = {
            category: '',
            transaction:'',
            ville:'',
            secteur:'',
            chambre:'',
            toilette:'',
            salon:'',
            etage:'',
            age:'',
            title:'',
            description:'',
            prix:'',
            surface_total:'',
            surface_habitable:'',
            adresse:''
        }

        this.ages = [
            {
                id:'1',
                libelle:'Neuf'
            },
            {
                id:'2',
                libelle:'1-5 ans'
            },
            {
                id:'3',
                libelle:'6-10 ans'
            },
            {
                id:'4',
                libelle:'11-20 ans'
            },
            {
                id:'5',
                libelle:'20+ ans'
            },
        ]

        this.quantités = [
            {
                id:'1',
                libelle:'1'
            },
            {
                id:'2',
                libelle:'2'
            },
            {
                id:'3',
                libelle:'3'
            },
            {
                id:'4',
                libelle:'4'
            },
            {
                id:'5',
                libelle:'5'
            },
        ]

        this.villes = [
            {
                id:'1',
                libelle:'yaoundé'
            },
            {
                id:'2',
                libelle:'douala'
            },
            {
                id:'3',
                libelle:'ngaoundéré'
            },
            {
                id:'4',
                libelle:'bafoussam'
            },
            {
                id:'5',
                libelle:'garoua'
            },
        ]

        this.transactions = [
            {
                id:'1',
                libelle:'vente'
            },
            {
                id:'2',
                libelle:'Location'
            },
            {
                id:'3',
                libelle:'Location de vacances'
            },
            {
                id:'4',
                libelle:'Demande'
            },
            {
                id:'5',
                libelle:'Demande de location'
            },
        ]

        this.annonceCategories= [
            {
                id:'1',
                libelle: 'appartement'
            },
            {
                id:'2',
                libelle: 'maison et villa'
            },
            {
                id:'3',
                libelle: 'bureaux'
            },
            {
                id:'4',
                libelle: 'magasins et commerce'
            },
            {
                id:'5',
                libelle: 'terrains'
            },
            {
                id:'6',
                libelle: 'location de vacances'
            },
            {
                id:'7',
                libelle: 'studio'
            },
            {
                id:'8',
                libelle: 'chambre'
            },
        ]
    }

    componentDidMount() {
        console.log('valeur du token : ', this.props.currentUser);
    }

    componentWillUnmount() {
        this.abortController.abort()
    }

    handleSubmit = async event => {

        event.preventDefault();
        const { category, title, description } = this.state;

        console.log(category, title, description);

        await Axios.post(
                            `${this.BASE_URL}/annonces/create`,
                            {
                                annonce_title:title,
                                annonce_category: category,
                                annonce_text: description,
                                transaction_type: this.state.transaction, 
                                annonce_city: this.state.ville,
                                // annonce_sector: this.state.secteur,
                                annonce_adress: this.state.adresse,
                                room_number: this.state.chambre,
                                bathroom_number: this.state.toilette,
                                livingroom_number: this.state.salon,
                                floor_number: this.state.etage,
                                age_of_good: this.state.age,
                                surface_total: this.state.surface_total,
                                surface_habitable: this.state.surface_habitable, 
                                annonce_price: this.state.prix,

                                signal: this.abortController.signal },
                            {headers: { 'authorization': `Bearer ${this.props.currentUser.accessToken}`}}
                        )
                .then((res) => console.log('annonce added : ', res) )
                .catch((error) => console.log('error when add', error.message))
    }

    handleChange = (event) => {
        const { value, name } = event.target;
        this.setState({ [name]: value }, () => {
            console.log('valeur du handlerChange : ', this.state.category)
        });
    }

    // selectChange = (event) => {
    //     this.setState({ category: event.target.value }, () => {
    //         console.log('valeur du select : ', this.state.category)
    //     })
    // }

    render() {
        return(
            <div className="new-container">
                <div className="new-annonce">
                    <form onSubmit={this.handleSubmit}>
                        {/* Infos générale */}
                        <div className="general-part">
                            <h2>Informations générales</h2>
                            <FormSelect
                                datas={this.annonceCategories}
                                placehoder="Choisissez un type"
                                label="*Type de bien"
                                name="category"
                                selectChange={this.handleChange}
                                required
                            />
                            {/* Type de transaction */}
                            <FormSelect
                                datas={this.transactions}
                                placehoder="Choisissez un type"
                                label="*Type de transaction"
                                name="transaction"
                                selectChange={this.handleChange}
                                required
                            />
                            {/* Ville */}
                            <FormSelect
                                datas={this.villes}
                                placehoder="Choisissez la ville"
                                label="*Ville"
                                name="ville"
                                selectChange={this.handleChange}
                                required
                            />
                            {/* Secteur */}
                            <FormSelect
                                datas={this.annonceCategories}
                                placehoder="Choisissez le secteur"
                                label="*Secteur"
                                name="secteur"
                                selectChange={this.handleChange}
                                required
                            />
                            <label className="detail-input">
                              Adresse
                              <input
                                type="text"
                                name="adresse"
                                value={this.state.adresse}
                                onChange={this.handleChange}
                            />
                            </label>
                        </div>
                        <hr/>

                        {/* Détails */}

                        <h2>Détails du bien</h2>
                        {/* <label htmlFor="">Chambres</label> */}
                        <div className="details-part">
                            <FormSelect
                                datas={this.quantités}
                                placehoder="Choisissez"
                                label="Chambres"
                                name="chambre"
                                selectChange={this.handleChange}
                                required
                            />
                            {/* Salle de bain */}
                            <FormSelect
                                datas={this.quantités}
                                placehoder="Choisissez"
                                label="Salle de bain"
                                name="toilette"
                                selectChange={this.handleChange}
                                required
                            />
                            {/* Salons*/}
                            <FormSelect
                                datas={this.quantités}
                                placehoder="Choisissez"
                                label="Salons"
                                name="salon"
                                selectChange={this.handleChange}
                                required
                            />
                            {/* Etage*/}
                            <FormSelect
                                datas={this.quantités}
                                placehoder="Choisissez"
                                label="Etage"
                                name="etage"
                                selectChange={this.handleChange}
                                required
                            />
                             <FormSelect
                                datas={this.ages}
                                placehoder="Choisissez"
                                label="Age du bien"
                                name="age"
                                selectChange={this.handleChange}
                                required
                            />
                            <label className="detail-input">
                              Surface total:
                              <input
                                type="text"
                                name="surface_total"
                                value={this.state.surface_total}
                                onChange={this.handleChange}
                            />
                            </label>
                            <label className="detail-input">
                                Surface habitable:
                                <input
                                    type="text"
                                    name="surface_habitable"
                                    value={this.state.surface_habitable}
                                    onChange={this.handleChange}
                                />
                            </label>
                        </div>
                        <hr/>

                        {/* Description */}
                        <div className="description-part">
                            <h2>Description du bien</h2>
                            {/* <label htmlFor="">Titre de l'annonce</label> */}
                            <FormInput
                                name="title"
                                type="text"
                                label="*Titre de l'annonce"
                                value={this.state.title}
                                handleChange={this.handleChange}
                                required
                            />
                            {/* <label htmlFor="">Prix</label> */}
                            <FormInput
                                name="prix"
                                type="number"
                                label="Prix du bien"
                                value={this.state.prix}
                                handleChange={this.handleChange}
                                // required
                            />
                            <label className="description-area">
                                *Texte de l'annonce
                                <textarea
                                    className="textarea"
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.handleChange}
                                    rows="5"
                                />
                            </label>
                        </div>
                        <hr/>

                        <h2>Photos</h2>

                        <hr/>

                          {/* Vos infos */}
                        <div className="description-part">
                            <h2>Vos informations</h2>
                            {/* <label htmlFor="">Titre de l'annonce</label> */}
                            {/* <FormInput
                                name="title"
                                type="text"
                                label="*Nom et prénom"
                                value={this.state.title}
                                handleChange={this.handleChange}
                                required
                            /> */}
                            {/* <label htmlFor="">Prix</label> */}
                            {/* <FormInput
                                name="prix"
                                type="email"
                                label="*Email"
                                value={this.state.prix}
                                handleChange={this.handleChange}
                                // required
                            /> */}
                             {/* <FormInput
                                name="prix"
                                type="tel"
                                label="*Téléphone"
                                value={this.state.prix}
                                handleChange={this.handleChange}
                                // required
                            /> */}
                            
                        </div>

                        <CustomButton type="submit">Déposer</CustomButton>
                    </form>
                </div>

            </div>
        )
    }
}

const mapStateToProps = ({user}) => ({
    currentUser: user.currentUser
});

export default connect(mapStateToProps, null)(NewAnnonce);