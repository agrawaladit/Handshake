
const initState = {
}

const expReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_EXP':
            return {
                company: action.payload.subtitle,
                id: action.payload.id,
                duration: action.payload.f3,
                location: action.payload.f2,
                title: action.payload.f1,
                start_date: action.payload.f5,
                end_date: action.payload.f6,
                description: action.payload.f4
            }
        default:
            return state
    }
}

export default expReducer