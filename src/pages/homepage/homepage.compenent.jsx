import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
    <div className="homepage">
        <h2>Choisissez une catégorie</h2>
        <div className="categorie">
            <div className="categorie-item">
                <div className="content">
                    <h1 className="title">VILLAS</h1>
                    <span className="subtitle">Détails</span>
                </div>
            </div>
            <div className="categorie-item">
                <div className="content">
                    <h1 className="title">VILLAS</h1>
                    <span className="subtitle">Détails</span>
                </div>
            </div>
            <div className="categorie-item">
                <div className="content">
                    <h1 className="title">APPARTEMENT</h1>
                    <span className="subtitle">Détails</span>
                </div>
            </div>
            <div className="categorie-item">
                <div className="content">
                    <h1 className="title">STUDIO MODERNE</h1>
                    <span className="subtitle">Détails</span>
                </div>
            </div>
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