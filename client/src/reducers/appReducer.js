let initState = {
    apps: ['no data']
}

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_APPS':
            return {apps: action.payload}
        default:
            return state
    }
}

export default appReducer