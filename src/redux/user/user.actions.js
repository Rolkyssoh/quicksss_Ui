export const setCurrentUser = user => ({
    type:'SET_CURRENT_USER',
    payload: user
})

export const moveCurrentUser = user => ({
    type: 'LOG_OUT',
    // payload: user 
}) 

// export const getInfosCurrentUser = infos => ({
//     type:'GET_INFOS_CURRENT_USER',
//     payload: infos
// })