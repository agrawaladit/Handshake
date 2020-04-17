
const initState = {
}

const eduReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_EDU':
            return {
                school: action.payload.subtitle,
                id: action.payload.id,
                major: action.payload.f3,
                location: action.payload.f2,
                degree: action.payload.f1,
                start_date: action.payload.f5,
                end_date: action.payload.f6,
                cgpa: action.payload.f4
            }
        default:
            return state
    }
}

export default eduReducer