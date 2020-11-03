import React from 'react';

import Categorie from '../../components/menu-categorie/categorie.component';

import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage">
        <h2>Choisissez une catégorie</h2>
        <div className="categorie">
            <Categorie />
        </div>

        <h2>Choisissez une ville</h2>
        <div className="ville">
            <div className="ville-item">
                <h2 className="title">Yaoundé</h2>
            </div>
            <div className="ville-item">
                <h2 className="title">Douala</h2>
            </div>
            <div className="ville-item">
                <h2 className="title">Nkongsamba</h2>
            </div>
        </div>
    </div>
);

export default HomePage;