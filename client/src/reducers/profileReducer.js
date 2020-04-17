
const initState = {
    id: '',
    first_name: '',
    last_name: '',
    email: '',
    school: '',
    education: {},
    experience: {},
    student: '',
    contact: {}
}

const profileReducer = (state = initState, action) => {
    switch (action.type) {
        case 'GET_PROFILE':
            return {
                ...state, 
                id: action.payload._id,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                email: action.payload.email,
                school: action.payload.school,
                education: action.payload.education,
                experience: action.payload.experience,
                contact: action.payload.contact
            }
        default:
            return state
    }
}

export default profileReducer