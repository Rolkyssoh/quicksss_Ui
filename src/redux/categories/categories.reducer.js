const INITIAL_STATE = {
    sections: [
        { 
            title:'appartement',
            imageUrl: '../../assets/images/appartement.jpeg',
            id: 1,
            linkUrl: 'appartement'
        },
        {
            title:'MAISON et VILLA',
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
            title:'Magasins et Commerce',
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
            title:'CHAMBRE',
            imageUrl: 'https://images.unsplash.com/photo-1597098080207-0783a7c04456?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=358&q=80',
            // size: 'large',
            id: 8,
            linkUrl: 'chambre'
        }  
    ] 
};

const CategoriesReducer = (state = INITIAL_STATE, action) => { 
    switch(action.type) {
        default:
            return state;
    }
};

export default CategoriesReducer;