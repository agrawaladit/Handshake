let initState = {
    convo: ['no data']
}

const messageReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_MESSAGES':
            return {convo: action.payload}
        default:
            return state
    }
}

export default messageReducer