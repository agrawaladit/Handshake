let initState = {
    users: ['no data']
}

const studentsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_USERS':
            return {...state, users: action.payload}
        default:
            return state
    }
}

export default studentsReducer