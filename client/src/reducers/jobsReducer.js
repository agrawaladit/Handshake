let initState = {
    jobs: ['no data']
}

const jobsReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_JOBS':
            return {jobs: action.payload}
        default:
            return state
    }
}

export default jobsReducer