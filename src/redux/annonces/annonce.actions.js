export const getAllAnnonce = annonces => ({
    type:'GET_ALL_ANNONCE',
    payload: annonces
})

export const getAnnonceDetails = details => ({
    type: 'GET_ANNOCE_DETAILS',
    payload: details
})

// export const moveCurrentUser = user => ({
//     type: 'LOG_OUT',
//     // payload: user 
// })  