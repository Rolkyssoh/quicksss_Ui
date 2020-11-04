import React from 'react';

import CategorieItem from '../categorie-item/categorie-item.component';

import './categorie.styles.scss';

class Categorie extends React.Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title:'APPARTEMENT',
                    imageUrl: 'https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                    id: 1,
                    linkUrl: 'appartement'
                },
                {
                    title:'MAISON & VILLAS',
                    imageUrl: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=843&q=80',
                    id: 2,
                    linkUrl: 'maison'
                },
                {
                    title:'BUREAUX',
                    imageUrl: 'https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                    id: 3,
                    linkUrl: 'bureaux'
                },
                {
                    title:'Magasins, Commerce',
                    imageUrl: 'https://images.unsplash.com/photo-1596983794513-882a6de015d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80',
                    id: 4,
                    linkUrl: 'magasins'
                },
                {
                    title:'TERRAINS',
                    imageUrl: 'https://images.unsplash.com/photo-1590638815258-916997533022?ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80',
                    id: 5,
                    linkUrl: 'terrains'
                },
                {
                    title:'LOCATION DE VACANCES',
                    imageUrl: 'https://images.unsplash.com/photo-1590850242670-76b69b6fe765?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                    id: 6,
                    linkUrl: 'vacances'
                },
                {
                    title:'STUDIO',
                    imageUrl: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80',
                    // size: 'large',
                    id: 7,
                    linkUrl: 'studio'
                },
                {
                    title:'CHAMBRES',
                    imageUrl: 'https://images.unsplash.com/photo-1597098080207-0783a7c04456?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=358&q=80',
                    // size: 'large',
                    id: 8,
                    linkUrl: 'chambre'
                }
            ]
        }
    }

    render() {
        return (
            <div className="categorie">
                {
                    this.state.sections.map(({ title, imageUrl, id, linkUrl}) => (
                        <CategorieItem key={id} title={title} imageUrl={imageUrl} linkUrl={linkUrl} />
                    ))
                }
            </div>
        );
    }
}

export default Categorie